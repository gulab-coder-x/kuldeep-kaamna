import React, { useState, useEffect } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { FallingPetals } from './components/FallingPetals';
import { InvitationMain } from './components/InvitationMain';

const preloadedImages = [
  'assets/hero-bg.webp',
  'assets/1s.webp',
  'assets/pink-heart.png',
  'assets/ganesh-idol-TubyYjSJ.png',
];

export const App: React.FC = () => {
  const [opening, setOpening] = useState(false);
  const skipIntro = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('no-intro');
  const [showEnvelope, setShowEnvelope] = useState(!skipIntro);

  useEffect(() => {
    document.title = 'Kuldeep & Kaamna - Wedding Invitation';
    // Preload important images
    preloadedImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative">
      <FallingPetals count={24} />
      <InvitationMain />
      {showEnvelope && (
        <EnvelopeIntro
          onOpen={() => setOpening(true)}
          opening={opening}
          onExited={() => setShowEnvelope(false)}
        />
      )}
    </div>
  );
};

export default App;
