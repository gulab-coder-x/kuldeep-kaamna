import React, { useMemo } from 'react';

const petalItems = [
  { type: 'img', src: 'assets/falling-daisy-DWyrh5i3.png' },
  { type: 'img', src: 'assets/falling-rose-petal-CzrX2ZBd.png' },
  { type: 'emoji', char: '🌸' },
  { type: 'emoji', char: '🍃' },
];

export const FallingPetals: React.FC<{ count?: number }> = ({ count = 16 }) => {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, n) => {
      const left = Math.random() * 100;
      const duration = 12 + Math.random() * 14;
      const delay = Math.random() * 10;
      const size = 20 + Math.random() * 24;
      const item = petalItems[n % petalItems.length];
      const rotate = Math.random() * 360;
      return { left, duration, delay, size, item, rotate };
    });
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p, n) => (
        <div
          key={n}
          className="absolute animate-float-petal"
          style={{
            left: `${p.left}%`,
            top: '-10vh',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotate}deg)`,
            willChange: 'transform',
            opacity: 0.9,
          }}
        >
          {p.item.type === 'img' ? (
            <img
              src={p.item.src}
              alt=""
              width={p.size}
              height={p.size}
              style={{ width: p.size, height: p.size, objectFit: 'contain' }}
            />
          ) : (
            <span
              className="font-emoji"
              style={{ fontSize: p.size * 0.55, lineHeight: 1, display: 'inline-block' }}
            >
              {p.item.char}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
