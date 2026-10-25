import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScratchCard } from './ScratchCard';
import { MusicPlayer } from './MusicPlayer';
import { ScheduleAndLocation } from './ScheduleAndLocation';

export const InvitationMain: React.FC = () => {
  const [scratchRevealed, setScratchRevealed] = useState(false);

  return (
    <main className="relative bg-ivory min-h-screen text-sage-dark overflow-x-hidden font-body antialiased select-none">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-background py-10 px-6"
      >
        <div
          className="absolute inset-0 bg-cover lg:bg-contain bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('assets/hero-bg.webp')` }}
        />
        <div className="relative z-10 w-full max-w-[85%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[30%] xl:max-w-[26%] flex flex-col items-center mt-[15vh] md:mt-[8vh]" />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={() => {
            document.getElementById('scratch-card')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="relative z-10 flex flex-col items-center gap-2 text-center text-sage-dark hover:text-gold transition-colors cursor-pointer pb-6"
        >
          <span className="text-xs tracking-[0.3em] uppercase font-display font-semibold">
            Swipe Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-gold-dark" />
          </motion.div>
        </motion.button>
      </section>

      {/* Scratch Reveal Card Section */}
      <section
        id="scratch-card"
        className="py-20 px-4 md:py-24 relative overflow-hidden bg-[#f4ede1]"
      >
        <div className="relative max-w-xl mx-auto text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-6"
          >
            A Special Reveal
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center w-full"
          >
            <ScratchCard
              revealed={scratchRevealed}
              onRevealed={() => setScratchRevealed(true)}
            />
          </motion.div>
        </div>
      </section>

      {/* Welcome / Inviting Section */}
      <section
        id="welcome"
        className="relative py-24 md:py-36 bg-[#f4ede1] overflow-hidden text-center"
      >
        <img
          src="assets/welcome-flowers-Dy0evJgO.png"
          alt=""
          className="absolute top-0 left-0 w-full sm:left-1/2 sm:-translate-x-1/2 sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto pointer-events-none select-none z-10"
        />
        <img
          src="assets/welcome-flowers-bottom-CYQVvwo4.png"
          alt=""
          className="absolute left-0 w-full sm:left-1/2 sm:-translate-x-1/2 sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto pointer-events-none select-none z-20"
          style={{ bottom: '-40px' }}
        />
        <div className="relative z-10 max-w-xl w-full mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-32 sm:pt-40 md:pt-48 lg:pt-56 flex flex-col items-center"
          >
            <img
              src="assets/ganesh-idol-TubyYjSJ.png"
              alt="Lord Ganesha"
              className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90 mb-4 select-none pointer-events-none"
            />
            <p className="text-gold-dark font-hindi-calligraphy text-xl md:text-2xl mb-2 tracking-wide font-medium">
              श्री गणेशाय नमः
            </p>
            <p className="text-sage-dark/90 font-hindi-shloka text-xs md:text-sm leading-relaxed max-w-sm mx-auto mb-4 whitespace-pre-line tracking-wide font-medium">
              विघ्न हरण मंगल करन, श्री गणपति महाराज ।{'\n'}
              प्रथम निमंत्रण आपको, पूरन करियो काज ॥
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 space-y-1"
          >
            <p className="font-body italic font-semibold text-sm md:text-base text-sage-dark/85">
              With the heavenly blessings of
            </p>
            <p className="font-display text-sm md:text-base font-bold text-gold-dark tracking-wide">
              Late. Smt. Suhagwanti &amp; Late. Sh. Roop Lal Bansal
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-2 pb-28 sm:pb-36 md:pb-44 lg:pb-52"
          >
            <h4 className="font-display text-lg md:text-xl font-bold text-gold-dark tracking-wide mb-1.5">
              Neena Bansal &amp; Anish Bansal
            </h4>
            <p className="font-body italic font-semibold text-[13px] md:text-sm text-sage-dark/80 max-w-md mx-auto mb-3 leading-relaxed whitespace-pre-line">
              request the pleasure of your company on the auspicious occasion of{'\n'}
              the wedding ceremony of their beloved daughter
            </p>
            <h3 className="font-script text-6xl md:text-7xl font-normal text-[#8a1f2d] leading-tight tracking-[0.01em]">
              Kaamna
            </h3>
            <p className="font-display font-semibold tracking-[0.25em] text-xs md:text-sm text-dusty-rose my-1.5">
              WITH
            </p>
            <h3 className="font-script text-6xl md:text-7xl font-normal text-[#8a1f2d] leading-tight tracking-[0.01em] mb-1">
              Kuldeep
            </h3>
            <p className="font-display text-base md:text-lg font-semibold text-gold-dark tracking-wide mt-2">
              S/o. Smt. Kanta Rani &amp; Sh. Krishan Kumar Goyal
            </p>

            <div className="flex items-center justify-center gap-3 mt-6 text-gold-dark/60">
              <span className="w-12 h-[1px] bg-gold-dark/40" />
              <span className="text-xs">✤</span>
              <span className="w-12 h-[1px] bg-gold-dark/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule, Location & Save the Date Sections */}
      <ScheduleAndLocation />

      {/* Regards & Love Section */}
      <section
        id="regards-love"
        className="relative py-24 md:py-36 px-6 bg-[#f4ede1] overflow-hidden"
      >
        <div className="max-w-xl mx-auto relative z-10">
          <div className="p-8 md:p-10 relative overflow-visible">
            <img
              src="assets/floral-top-right-CS2uPFt2.png"
              alt=""
              className="pointer-events-none select-none absolute -top-12 -right-4 w-52 md:w-64 z-10 opacity-90"
            />
            <img
              src="assets/floral-bottom-left-_kTL5SSX.png"
              alt=""
              className="pointer-events-none select-none absolute -bottom-16 -left-8 w-52 md:w-64 z-10 opacity-90"
            />
            <div className="relative z-20 text-center py-10">
              <div className="space-y-6 text-sage-dark">
                <p className="font-body italic text-xl leading-relaxed max-w-md mx-auto whitespace-pre-line">
                  We would be delighted{'\n'}to share this beautiful beginning with you
                </p>
                <p className="font-body italic text-xl leading-relaxed max-w-md mx-auto whitespace-pre-line">
                  With love in our hearts,{'\n'}we await your gracious presence
                </p>
                <div className="pt-6">
                  <p className="font-body font-semibold italic text-xl md:text-2xl text-sage-dark/80 tracking-wide">
                    Warm Regards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Player */}
      <MusicPlayer audioSrc="assets/jashn-e-bahaaraa.mp3" />
    </main>
  );
};
