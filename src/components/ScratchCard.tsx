import React, { useRef, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ScratchCardProps {
  onRevealed: () => void;
  revealed: boolean;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({ onRevealed, revealed }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawing = useRef(false);
  const lastX = useRef<number | null>(null);
  const lastY = useRef<number | null>(null);
  const [isRevealedLocally, setIsRevealedLocally] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const heartImg = new Image();
    heartImg.src = 'assets/pink-heart.png';

    const resizeAndDraw = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr * (rect.width / 240), dpr * (rect.height / 240));
      const size = 288;
      const offset = -24;
      if (heartImg.complete) {
        ctx.drawImage(heartImg, offset, offset, size, size);
      } else {
        heartImg.onload = () => {
          ctx.drawImage(heartImg, offset, offset, size, size);
        };
      }
    };

    heartImg.onload = resizeAndDraw;
    resizeAndDraw();
    window.addEventListener('resize', resizeAndDraw);
    return () => window.removeEventListener('resize', resizeAndDraw);
  }, []);

  const triggerConfetti = () => {
    const fire = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 120,
        spread: 90,
        startVelocity: 45,
        origin,
        colors: ['#f9c8d9', '#f4a3bf', '#e87aa3', '#c75a85', '#fff'],
        scalar: 1.1,
      });

    fire({ x: 0.2, y: 0.4 });
    fire({ x: 0.5, y: 0.3 });
    fire({ x: 0.8, y: 0.4 });
    setTimeout(() => fire({ x: 0.5, y: 0.5 }), 250);
  };

  const isHeartPoint = (px: number, py: number) => {
    const sx = (px - 120) / 90;
    const sy = (py - 115) / 90 + 0.1;
    return Math.pow(sx * sx + sy * sy - 1, 3) - sx * sx * Math.pow(sy, 3) <= 0.05;
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealedLocally) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const imgData = ctx.getImageData(0, 0, width, height).data;
    let heartTotal = 0;
    let heartCleared = 0;

    for (let y = 30; y < 210; y += 8) {
      for (let x = 30; x < 210; x += 8) {
        const cx = Math.round(x * (width / 240));
        const cy = Math.round(y * (height / 240));
        if (cx >= 0 && cx < width && cy >= 0 && cy < height) {
          const alphaIndex = (cy * width + cx) * 4 + 3;
          const alpha = imgData[alphaIndex];
          if (isHeartPoint(x, y)) {
            heartTotal++;
            if (alpha < 60) heartCleared++;
          }
        }
      }
    }

    if (heartTotal > 0 && heartCleared / heartTotal > 0.45) {
      setIsRevealedLocally(true);
      ctx.clearRect(0, 0, width, height);
      triggerConfetti();
      onRevealed();
    }
  };

  const drawScratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = 240 / rect.width;
    const scaleY = 240 / rect.height;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    if (lastX.current !== null && lastY.current !== null) {
      ctx.moveTo(lastX.current, lastY.current);
      ctx.lineTo(x, y);
      ctx.lineWidth = 36;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    } else {
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
    }
    lastX.current = x;
    lastY.current = y;
  };

  const handlePointerDown = (clientX: number, clientY: number) => {
    isDrawing.current = true;
    setHasInteracted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    lastX.current = (clientX - rect.left) * (240 / rect.width);
    lastY.current = (clientY - rect.top) * (240 / rect.height);
    drawScratch(clientX, clientY);
  };

  const handlePointerEnd = () => {
    isDrawing.current = false;
    lastX.current = null;
    lastY.current = null;
    checkScratchPercentage();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDrawing.current) {
      e.preventDefault();
      drawScratch(e.clientX, e.clientY);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-[430px] h-[430px] sm:w-[470px] sm:h-[470px] md:w-[520px] md:h-[520px] max-w-[94vw] aspect-square select-none flex items-center justify-center overflow-visible"
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
          hasInteracted || revealed ? 'opacity-100' : 'opacity-0'
        } z-0`}
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-[0_8px_20px_rgba(141,110,99,0.15)]"
        >
          <path
            d="M 120,65 C 120,15 30,15 30,90 C 30,140 90,175 120,215 C 150,175 210,140 210,90 C 210,15 120,15 120,65 Z"
            fill="#fcfaf5"
            stroke="#f4a3bf"
            strokeWidth="3.5"
          />

          {/* Subtitle */}
          <text
            x="120"
            y="76"
            textAnchor="middle"
            className="fill-gold-dark font-body text-[8.5px] font-bold tracking-[0.28em] uppercase"
          >
            SAVE OUR DATE
          </text>

          {/* Couple Names in Script Calligraphy */}
          <text
            x="120"
            y="102"
            textAnchor="middle"
            className="fill-[#8a1f2d] font-script text-[26px] font-normal"
          >
            Kaamna &amp; Kuldeep
          </text>

          {/* Delicate Divider */}
          <line x1="88" y1="110" x2="152" y2="110" stroke="#f4a3bf" strokeWidth="0.9" opacity="0.8" />
          <circle cx="120" cy="110" r="1.5" fill="#8a1f2d" />

          {/* Wedding Date */}
          <text
            x="120"
            y="126"
            textAnchor="middle"
            className="fill-sage-dark font-display font-semibold tracking-wide"
          >
            <tspan className="text-[15px]">21</tspan>
            <tspan className="text-[9px]" baselineShift="super">st</tspan>
            <tspan className="text-[15px]">&nbsp;Nov 2026</tspan>
          </text>

          {/* Day of Week */}
          <text
            x="120"
            y="139"
            textAnchor="middle"
            className="fill-gold-dark font-body text-[9.5px] font-bold tracking-[0.24em] uppercase"
          >
            SATURDAY
          </text>

          {/* Romantic Marriage Tagline */}
          <text
            x="120"
            y="160"
            textAnchor="middle"
            className="fill-[#8a1f2d] font-body italic text-[12px] font-semibold tracking-wide"
          >
            We&apos;re getting married!
          </text>
        </svg>
      </div>
      {!revealed && (
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            handlePointerDown(e.clientX, e.clientY);
          }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
          className="absolute z-10 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        />
      )}
    </div>
  );
};
