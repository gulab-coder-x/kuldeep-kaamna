import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  audioSrc?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioSrc = 'assets/jashn-e-bahaaraa.mp3',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      try {
        audio.currentTime = 0.24;
      } catch (err) {
        console.error('Audio pre-seek error:', err);
      }
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    if (audio.readyState >= 1) {
      handleLoadedMetadata();
    }

    const startAudio = () => {
      try {
        if (audio.currentTime !== 0.24) {
          audio.currentTime = 0.24;
        }
      } catch {}
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Autoplay blocked by browser', err);
        });
    };

    const handleFirstGesture = () => {
      startAudio();
      document.removeEventListener('touchend', handleFirstGesture);
      document.removeEventListener('click', handleFirstGesture);
    };

    document.addEventListener('touchend', handleFirstGesture);
    document.addEventListener('click', handleFirstGesture);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('touchend', handleFirstGesture);
      document.removeEventListener('click', handleFirstGesture);
    };
  }, [audioSrc]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.muted = true;
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Play failed on toggle', err);
          audio.muted = !audio.muted;
        });
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gold/30 shadow-lg flex items-center justify-center text-sage-dark hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label={isPlaying ? 'Mute Music' : 'Unmute Music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </button>
  );
};
