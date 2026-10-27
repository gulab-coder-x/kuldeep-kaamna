import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import {
  YadvindraHotelIllustration,
  KarltonInnIllustration,
  GrandMarrievillaIllustration,
  SangeetIcon,
  HaldiIcon,
  WeddingIcon,
} from './VenueIllustrations';
import {
  downloadCalendarEvent,
  downloadAllEventsCalendar,
  CalendarEvent,
} from '../utils/calendar';

export interface WeddingEvent {
  id: 'sangeet' | 'haldi' | 'wedding';
  title: string;
  time: string;
  date: string;
  fullDate: string;
  venueName: string;
  venueCity: string;
  fullAddress: string;
  mapUrl: string;
  appleMapUrl: string;
  note?: string;
  highlighted?: boolean;
  calendarData: CalendarEvent;
}

const EVENTS: WeddingEvent[] = [
  {
    id: 'sangeet',
    title: 'Sangeet',
    time: '8:00 PM',
    date: 'Tue, 17 Nov',
    fullDate: 'Tuesday, 17 November 2026',
    venueName: 'Yadvindra Dream Hotel',
    venueCity: 'Sangrur',
    fullAddress: 'Patiala Rd, Military Cantonement, Sangrur, Punjab 148001',
    mapUrl: 'https://maps.app.goo.gl/sZcGQqEJyXGiHKUo9',
    appleMapUrl: 'https://maps.apple.com/?q=Yadvindra+Dream+Hotel,+Patiala+Rd,+Military+Cantonement,+Sangrur,+Punjab+148001',
    calendarData: {
      title: 'Sangeet - Kaamna & Kuldeep',
      location: 'Yadvindra Dream Hotel, Patiala Rd, Military Cantonement, Sangrur, Punjab 148001',
      start: '20261117T200000',
      end: '20261117T235900',
      description: 'Sangeet celebration of Kaamna & Kuldeep',
    },
  },
  {
    id: 'haldi',
    title: 'Haldi',
    time: '11:00 AM',
    date: 'Thu, 19 Nov',
    fullDate: 'Thursday, 19 November 2026',
    venueName: 'Hotel Karlton Inn',
    venueCity: 'Ludhiana',
    fullAddress: '41/1B, Dugri Road, Atam Nagar, Model Town, Ludhiana, Punjab',
    mapUrl: 'https://maps.app.goo.gl/VbTzwTV7LNLPfTx66',
    appleMapUrl: 'https://maps.apple.com/?q=Hotel+Karlton+Inn,+41/1B,+Dugri+Road,+Atam+Nagar,+Model+Town,+Ludhiana,+Punjab',
    calendarData: {
      title: 'Haldi Ceremony - Kaamna & Kuldeep',
      location: 'Hotel Karlton Inn 41/1B, Dugri Road, Atam Nagar, Model Town, Ludhiana, Punjab',
      start: '20261119T110000',
      end: '20261119T150000',
      description: 'Haldi ceremony of Kaamna & Kuldeep',
    },
  },
  {
    id: 'wedding',
    title: 'Wedding',
    time: '9:00 PM',
    date: 'Sat, 21 Nov',
    fullDate: 'Saturday, 21 November 2026',
    venueName: 'Grand Marrievilla',
    venueCity: 'Ludhiana',
    fullAddress: 'Ferozpur Road, Ludhiana, Punjab',
    mapUrl: 'https://maps.app.goo.gl/u7AnbK6DUUknm98A9',
    appleMapUrl: 'https://maps.apple.com/place?place-id=I904A1AB6D7849673&address=Firozpur+Road%2C+Ludhiana+West%2C+Ludhiana%2C+141101%2C+Punjab%2C+India&coordinate=30.830289%2C75.625543&name=Grand+Marriage+Villa&_provider=9902',
    note: 'Reception of Baraat',
    highlighted: true,
    calendarData: {
      title: 'Wedding - Kaamna & Kuldeep',
      location: 'Grand Marrievilla Ferozpur Road, Ludhiana',
      start: '20261121T210000',
      end: '20261122T020000',
      description: 'Wedding celebration & Reception of Baraat for Kaamna & Kuldeep',
    },
  },
];

export const ScheduleAndLocation: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);
  const [downloadedEvent, setDownloadedEvent] = useState<string | null>(null);

  // Scroll to location card smoothly
  const scrollToVenue = (id: string, index: number) => {
    setActiveEventIndex(index);
    const element = document.getElementById(`location-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Real-time smooth scroll spy to update active event as user scrolls
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportMiddle = window.innerHeight * 0.45;

          let closestIndex = 0;
          let minDistance = Infinity;

          EVENTS.forEach((event, idx) => {
            const scheduleEl = document.getElementById(`schedule-row-${event.id}`);
            const locationEl = document.getElementById(`location-${event.id}`);

            [scheduleEl, locationEl].forEach((el) => {
              if (el) {
                const rect = el.getBoundingClientRect();
                const elemCenter = rect.top + rect.height / 2;
                const dist = Math.abs(elemCenter - viewportMiddle);
                if (dist < minDistance) {
                  minDistance = dist;
                  closestIndex = idx;
                }
              }
            });
          });

          setActiveEventIndex(closestIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadSingle = (event: WeddingEvent) => {
    downloadCalendarEvent(event.calendarData);
    setDownloadedEvent(event.id);
    setTimeout(() => setDownloadedEvent(null), 3000);
  };

  const handleDownloadAll = () => {
    downloadAllEventsCalendar(EVENTS.map((e) => e.calendarData));
    setDownloadedEvent('all');
    setTimeout(() => setDownloadedEvent(null), 3000);
  };

  return (
    <section id="ceremony" className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
          SECTION 1: SCHEDULE OF EVENTS (Matching Reference Layout)
      ========================================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          {/* Decorative Divider with diamond flourishes */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xs mx-auto mb-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-sage-dark leading-[1.05] tracking-normal">
            Schedule of<br />Events
          </h2>

          <div className="flex items-center gap-2.5 mt-3">
            <span className="h-px w-8 bg-gold/50" />
            <p className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-gold-dark font-medium">
              November 2026
            </p>
            <span className="h-px w-8 bg-gold/50" />
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-xl">
          {/* Center Vertical Timeline Track Line - Clean & Minimalist */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

          {/* Timeline Event Items */}
          <div className="space-y-16 sm:space-y-20 relative z-10">
            {EVENTS.map((event, index) => {
              const isActive = activeEventIndex === index;

              return (
                <motion.div
                  key={event.id}
                  id={`schedule-row-${event.id}`}
                  data-event-id={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onClick={() => scrollToVenue(event.id, index)}
                  className={`group relative grid grid-cols-[1fr_auto_1fr] items-center gap-x-3 sm:gap-x-7 cursor-pointer p-2 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-gold/5' : 'hover:bg-gold/5'
                  }`}
                >
                  {/* Left Column: Time & Date (Matching reference) */}
                  <div className="text-right pr-2 sm:pr-4">
                    <motion.p
                      animate={{ color: isActive ? '#8a1f2d' : '#2e3b22' }}
                      className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-none tracking-wide transition-colors"
                    >
                      {event.time}
                    </motion.p>
                    <p className="mt-1.5 font-body italic text-xs sm:text-sm md:text-base text-sage-dark/70 tracking-normal">
                      {event.date}
                    </p>
                  </div>

                  {/* Center Column: Interactive Thematic Event Icon Badge */}
                  <div className="relative flex flex-col items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${event.title} details`}
                      className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 transition-all duration-300 shadow-sm z-10 ${
                        isActive
                          ? 'bg-[#8a1f2d] border-[#c9a45c] text-ivory ring-4 ring-[#8a1f2d]/25 shadow-lg scale-110'
                          : 'bg-[#faf6ee] border-gold/50 text-[#8a1f2d] hover:border-gold hover:text-gold-dark hover:scale-105'
                      }`}
                    >
                      {event.id === 'sangeet' && (
                        <SangeetIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                      {event.id === 'haldi' && (
                        <HaldiIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                      {event.id === 'wedding' && (
                        <WeddingIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </motion.button>

                    {/* Active smooth halo ring */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTimelineGlow"
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="absolute -inset-1.5 rounded-full border border-gold/70 ring-4 ring-gold/20 pointer-events-none"
                      />
                    )}
                  </div>

                  {/* Right Column: Event Title & Venue (Matching reference) */}
                  <div className="text-left pl-2 sm:pl-4">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide transition-colors ${
                          isActive ? 'text-[#8a1f2d]' : 'text-sage-dark'
                        }`}
                      >
                        {event.title}
                      </h3>
                      {event.note && (
                        <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-body font-medium">
                          {event.note}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-body italic text-xs sm:text-sm md:text-base text-sage-dark/75 leading-tight">
                      {event.venueName}, {event.venueCity}
                    </p>
                    {event.note && (
                      <p className="sm:hidden mt-0.5 font-body text-[11px] text-dusty-rose font-medium">
                        {event.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Nav hint on mobile */}
          <div className="mt-8 text-center sm:hidden">
            <p className="text-[11px] uppercase tracking-widest text-gold-dark/80 font-body flex items-center justify-center gap-1.5">
              <Navigation className="w-3 h-3 text-gold" /> Tap any event to jump to location
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Section Separator */}
      <div className="relative my-8 sm:my-14 flex items-center justify-center">
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="mx-3 flex items-center gap-1.5 text-gold-dark/60">
          <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gold" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
        </div>
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* =========================================================================
          SECTION 2: LOCATION (Matching Reference Layout & Architectural SVGs)
      ========================================================================= */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pb-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-sage-dark">
            Location
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </motion.div>

        {/* Location Cards Stack */}
        <div className="space-y-20 sm:space-y-28">
          {EVENTS.map((event, index) => {
            return (
              <motion.article
                key={event.id}
                id={`location-${event.id}`}
                data-event-id={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Event Title in Script font (Matching reference style) */}
                <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#8a1f2d] font-normal tracking-wide">
                  {event.title}
                </h3>

                {/* Venue Name in Display Serif */}
                <h4 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-sage-dark tracking-wide">
                  {event.venueName}, {event.venueCity}
                </h4>

                {/* Full Address */}
                <p className="mt-1.5 font-body italic text-sm sm:text-base text-sage-dark/80 max-w-md mx-auto leading-relaxed">
                  {event.fullAddress}
                </p>

                {/* Date & Time String (Matching reference style) */}
                <p className="mt-2 font-body text-xs sm:text-sm uppercase tracking-[0.22em] text-gold-dark font-medium">
                  {event.fullDate} · {event.time}
                  {event.note && (
                    <span className="text-dusty-rose font-semibold"> ({event.note})</span>
                  )}
                </p>

                {/* Architectural Building Structure Line-art */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full my-6 flex justify-center text-sage-dark/75 hover:text-sage-dark transition-colors"
                >
                  {event.id === 'sangeet' && (
                    <GrandMarrievillaIllustration className="w-full max-w-[290px] sm:max-w-[340px] h-auto" />
                  )}
                  {event.id === 'haldi' && (
                    <KarltonInnIllustration className="w-full max-w-[290px] sm:max-w-[340px] h-auto" />
                  )}
                  {event.id === 'wedding' && (
                    <YadvindraHotelIllustration className="w-full max-w-[290px] sm:max-w-[340px] h-auto" />
                  )}
                </motion.div>

                {/* Pill Buttons: GOOGLE MAPS & APPLE MAPS */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    href={event.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#8a1f2d] hover:bg-[#721824] text-ivory text-xs sm:text-sm tracking-[0.16em] uppercase font-display font-medium shadow-md hover:shadow-xl transition-all duration-300 ring-2 ring-gold/40 hover:ring-gold"
                  >
                    <MapPin className="w-4 h-4 text-gold-soft" />
                    <span>Google Maps</span>
                  </motion.a>

                  <motion.a
                    href={event.appleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-[#362f22] hover:bg-[#272118] text-ivory text-xs sm:text-sm tracking-[0.16em] uppercase font-display font-medium shadow-md hover:shadow-xl transition-all duration-300 ring-2 ring-gold/40 hover:ring-gold"
                  >
                    <svg className="w-4 h-4 fill-current text-gold-soft" viewBox="0 0 170 170">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.7-13.98-5.74-8.8-10.22-18.79-13.43-29.98-3.21-11.19-4.82-21.75-4.82-31.68 0-14.54 3.66-26.68 10.98-36.42 7.32-9.74 16.48-14.74 27.48-15 4.35 0 9.29 1.25 14.81 3.75 5.53 2.5 9.4 3.8 11.61 3.9 1.52-.1 5.48-1.45 11.87-4.05 6.4-2.6 11.42-3.8 15.08-3.6 10.22.44 18.66 4.3 25.32 11.6 6.66 7.3 11.05 16.22 13.17 26.77-9.35 5.66-13.9 13.59-13.66 23.8.24 8.05 3.42 14.89 9.54 20.52 6.12 5.63 13.3 8.99 21.54 10.08-2.07 6.3-4.54 12.63-7.41 18.97zM119.22 33.15c0-6.74 2.39-13.26 7.17-19.56 4.78-6.3 10.76-10.83 17.94-13.59-.11 1.09-.27 2.23-.49 3.42-.22 1.19-.54 2.28-.97 3.26-1.52 5.44-4.57 10.71-9.13 15.82-4.57 5.11-9.95 8.65-16.14 10.61-.43-1.09-.76-2.28-.99-3.59-.22-1.3-.39-2.43-.39-3.37z" />
                    </svg>
                    <span>Apple Maps</span>
                  </motion.a>
                </div>

                {/* Subtle divider between items unless last */}
                {index < EVENTS.length - 1 && (
                  <div className="w-24 h-px bg-gold/30 mt-16 sm:mt-24" />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Decorative Section Separator */}
      <div className="relative my-8 sm:my-14 flex items-center justify-center">
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="mx-3 flex items-center gap-1.5 text-gold-dark/60">
          <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gold" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
        </div>
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      {/* =========================================================================
          SECTION 3: SAVE THE DATE (Matching Reference Grid of Rounded Cards)
      ========================================================================= */}
      <div id="save-the-date" className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-sage-dark">
            Save the Date
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="h-1 w-1 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </motion.div>

        {/* 3 Rounded Cards Grid (Matching reference style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-xl mx-auto">
          {EVENTS.map((event, index) => {
            const isDownloaded = downloadedEvent === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative bg-white/80 backdrop-blur-sm border border-gold/40 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(46,59,34,0.06)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full max-w-[260px] sm:max-w-none mx-auto"
              >
                <div>
                  {/* Calendar Icon in elegant circled pill */}
                  <div className="mx-auto w-10 h-10 rounded-full bg-[#8a1f2d]/8 border border-[#8a1f2d]/20 flex items-center justify-center text-[#8a1f2d] mb-3">
                    <Calendar className="w-4 h-4" />
                  </div>

                  {/* Event Title */}
                  <h4 className="font-display text-lg sm:text-xl font-semibold text-sage-dark tracking-wide">
                    {event.title}
                  </h4>

                  {/* Date */}
                  <p className="mt-1 font-body italic text-sm sm:text-base text-sage-dark/80">
                    {event.date}
                  </p>

                  {/* Time */}
                  <p className="mt-0.5 font-display text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    {event.time}
                  </p>
                </div>

                {/* Add to Calendar Action */}
                <button
                  onClick={() => handleDownloadSingle(event)}
                  className="w-full mt-4 pt-3 border-t border-gold/25 inline-flex items-center justify-center gap-1.5 text-xs font-display font-medium uppercase tracking-[0.16em] text-[#8a1f2d] hover:text-[#721824] transition-colors cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5 text-gold-dark" />
                  <span>{isDownloaded ? 'Added ✓' : 'Add to Calendar'}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Master Action: Add All to Calendar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDownloadAll}
            className="inline-flex items-center gap-2 border-b-2 border-gold/60 pb-1 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-sage-dark hover:text-gold-dark hover:border-gold transition-all"
          >
            <Calendar className="h-4 w-4 text-gold-dark" />
            <span>
              {downloadedEvent === 'all'
                ? 'All Events Added to Calendar ✓'
                : 'Add All Celebrations to Calendar'}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Elegant bottom wavy divider transitioning to the next section (#regards-love) */}
      <svg
        className="absolute bottom-0 left-0 h-16 w-full text-[#f4ede1] sm:h-20 pointer-events-none"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="fill-current"
          d="M0,60 C180,100 360,20 540,40 C720,60 900,100 1080,70 C1260,40 1350,30 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
};
