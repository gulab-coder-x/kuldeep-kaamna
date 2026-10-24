import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeIntroProps {
  onOpen: () => void;
  opening: boolean;
  onExited: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({
  onOpen,
  opening,
  onExited,
}) => {
  const [state, setState] = useState<'idle' | 'playing' | 'playing2'>('idle');
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const openedRef = useRef(false);
  const stateRef = useRef<'idle' | 'playing' | 'playing2'>('idle');

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.muted = true;
      video1Ref.current.defaultMuted = true;
    }
    if (video2Ref.current) {
      video2Ref.current.muted = true;
      video2Ref.current.defaultMuted = true;
    }
  }, []);

  useEffect(() => {
    const handleStart = () => {
      if (stateRef.current === 'idle') {
        stateRef.current = 'playing';
        setState('playing');
        if (video1Ref.current) {
          video1Ref.current.play().catch((err) => {
            console.error('Video 1 direct play failed', err);
          });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('pointerdown', handleStart);
      container.addEventListener('touchstart', handleStart);
      container.addEventListener('click', handleStart);
    }
    return () => {
      if (container) {
        container.removeEventListener('pointerdown', handleStart);
        container.removeEventListener('touchstart', handleStart);
        container.removeEventListener('click', handleStart);
      }
    };
  }, []);

  const triggerOpen = () => {
    if (!openedRef.current) {
      openedRef.current = true;
      onOpen();
    }
  };

  useEffect(() => {
    if (opening) {
      const timer = setTimeout(() => {
        onExited();
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [opening, onExited]);

  const handleVideo1TimeUpdate = () => {
    const v1 = video1Ref.current;
    if (!v1) return;
    if (v1.currentTime > 0.05 && !hasStarted) {
      setHasStarted(true);
    }
    if (
      state === 'playing' &&
      v1.duration &&
      v1.duration - v1.currentTime <= 0.5 &&
      video2Ref.current &&
      video2Ref.current.paused
    ) {
      setState('playing2');
      video2Ref.current.play().catch((err) => {
        console.error('Video 2 play failed', err);
      });
    }
  };

  const handleVideo1Ended = () => {
    if (state !== 'playing2') {
      setState('playing2');
      if (video2Ref.current) {
        video2Ref.current.play().catch(() => {});
      }
    }
  };

  const handleVideo2TimeUpdate = () => {
    const v2 = video2Ref.current;
    if (!v2) return;
    if (v2.duration && v2.duration - v2.currentTime <= 1.2 && state === 'playing2') {
      triggerOpen();
    }
  };

  const handleVideo2Ended = () => {
    triggerOpen();
  };

  const isPlaying2 = state === 'playing2';

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden bg-[#362f22]"
      initial={{ opacity: 1 }}
      animate={{ opacity: opening ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ pointerEvents: opening ? 'none' : 'auto' }}
    >
      {!opening && <div className="absolute inset-0 bg-[#362f22]" aria-hidden="true" />}
      <video
        ref={video1Ref}
        src="assets/intro-video-2-a-H3NxSy.mp4"
        poster="assets/1s.webp"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        onTimeUpdate={handleVideo1TimeUpdate}
        onEnded={handleVideo1Ended}
        playsInline
        muted
        preload="auto"
      />
      <video
        ref={video2Ref}
        src="assets/env.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
          isPlaying2 ? 'opacity-100' : 'opacity-0'
        }`}
        onTimeUpdate={handleVideo2TimeUpdate}
        onEnded={handleVideo2Ended}
        playsInline
        muted
        preload="metadata"
      />
      {state === 'idle' && (
        <div className="absolute inset-x-0 bottom-16 flex flex-col items-center text-center px-6 pointer-events-none">
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1, 0.98] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="font-body text-[11px] md:text-xs tracking-[0.3em] uppercase text-sage-dark font-bold bg-[#fcfaf5]/85 backdrop-blur-[2px] px-6 py-2.5 rounded-full border border-gold/30 shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
          >
            Tap to open
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};
