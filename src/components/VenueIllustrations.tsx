import React from 'react';

interface SvgProps {
  className?: string;
}

/**
 * Architectural line-art for Yadvindra Dream Hotel (Sangrur)
 * Elegant palace/hotel facade with arched portico, ornamental balustrade, and garden palms.
 */
export const YadvindraHotelIllustration: React.FC<SvgProps> = ({ className = 'w-full max-w-[280px] h-auto' }) => (
  <svg
    viewBox="0 0 320 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Ground baseline */}
    <line x1="20" y1="118" x2="300" y2="118" strokeWidth="1.2" opacity="0.6" />

    {/* Flanking palm/garden trees */}
    <g opacity="0.55" strokeWidth="1">
      {/* Left Palm */}
      <line x1="42" y1="118" x2="42" y2="78" />
      <path d="M42 78 C32 68 22 72 20 76" />
      <path d="M42 78 C35 62 25 60 22 64" />
      <path d="M42 78 C42 60 40 52 42 50" />
      <path d="M42 78 C49 62 59 60 62 64" />
      <path d="M42 78 C52 68 62 72 64 76" />

      {/* Right Palm */}
      <line x1="278" y1="118" x2="278" y2="78" />
      <path d="M278 78 C268 68 258 72 256 76" />
      <path d="M278 78 C271 62 261 60 258 64" />
      <path d="M278 78 C278 60 276 52 278 50" />
      <path d="M278 78 C285 62 295 60 298 64" />
      <path d="M278 78 C288 68 298 72 300 76" />
    </g>

    {/* Main Building Body */}
    {/* Central higher pavilion */}
    <rect x="110" y="44" width="100" height="74" strokeWidth="1.2" />
    {/* Left Wing */}
    <rect x="68" y="58" width="42" height="60" strokeWidth="1.2" />
    {/* Right Wing */}
    <rect x="210" y="58" width="42" height="60" strokeWidth="1.2" />

    {/* Cornices & Parapets */}
    {/* Central Dome / Crown */}
    <path d="M135 44 C135 28 160 24 160 24 C160 24 185 28 185 44" strokeWidth="1.2" />
    <line x1="160" y1="24" x2="160" y2="16" strokeWidth="1.2" />
    <circle cx="160" cy="14" r="2" strokeWidth="1" />

    {/* Balustrade dots on wings */}
    <line x1="64" y1="58" x2="110" y2="58" strokeWidth="1.4" />
    <line x1="68" y1="54" x2="106" y2="54" strokeWidth="0.8" strokeDasharray="2 3" />
    <line x1="210" y1="58" x2="256" y2="58" strokeWidth="1.4" />
    <line x1="214" y1="54" x2="252" y2="54" strokeWidth="0.8" strokeDasharray="2 3" />

    {/* Central cornice line */}
    <line x1="106" y1="44" x2="214" y2="44" strokeWidth="1.4" />
    <line x1="110" y1="48" x2="210" y2="48" strokeWidth="0.8" />

    {/* Entrance Arch */}
    <path d="M145 118 V92 C145 83 175 83 175 92 V118" strokeWidth="1.2" />
    <path d="M149 118 V93 C149 87 171 87 171 93 V118" strokeWidth="0.8" />
    <line x1="160" y1="87" x2="160" y2="118" strokeWidth="0.8" />

    {/* Upper central balcony and arched windows */}
    <path d="M148 72 V62 C148 57 172 57 172 62 V72 Z" strokeWidth="1" />
    <line x1="160" y1="58" x2="160" y2="72" strokeWidth="0.8" />
    <line x1="144" y1="73" x2="176" y2="73" strokeWidth="1.2" />
    <line x1="145" y1="77" x2="175" y2="77" strokeWidth="0.8" strokeDasharray="2 2" />

    {/* Wing Arched Windows (Left Wing) */}
    <path d="M78 84 V74 C78 70 94 70 94 74 V84 Z" strokeWidth="1" />
    <line x1="86" y1="70" x2="86" y2="84" strokeWidth="0.7" />
    <path d="M78 110 V100 C78 96 94 96 94 100 V110 Z" strokeWidth="1" />
    <line x1="86" y1="96" x2="86" y2="110" strokeWidth="0.7" />

    {/* Wing Arched Windows (Right Wing) */}
    <path d="M226 84 V74 C226 70 242 70 242 74 V84 Z" strokeWidth="1" />
    <line x1="234" y1="70" x2="234" y2="84" strokeWidth="0.7" />
    <path d="M226 110 V100 C226 96 242 96 242 100 V110 Z" strokeWidth="1" />
    <line x1="234" y1="96" x2="234" y2="110" strokeWidth="0.7" />

    {/* Front Entrance Steps */}
    <line x1="140" y1="118" x2="180" y2="118" strokeWidth="1.2" />
    <line x1="136" y1="121" x2="184" y2="121" strokeWidth="1" />
  </svg>
);

/**
 * Architectural line-art for Hotel Karlton Inn (Model Town, Ludhiana)
 * Contemporary boutique hotel facade with grid windows, symmetrical wings, portico canopy, and neat topiaries.
 */
export const KarltonInnIllustration: React.FC<SvgProps> = ({ className = 'w-full max-w-[280px] h-auto' }) => (
  <svg
    viewBox="0 0 320 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Ground baseline */}
    <line x1="25" y1="118" x2="295" y2="118" strokeWidth="1.2" opacity="0.6" />

    {/* Side landscaped shrubs/topiaries */}
    <g opacity="0.55" strokeWidth="1">
      <path d="M42 118 C38 110 38 102 46 98 C54 94 58 104 56 118" />
      <line x1="49" y1="118" x2="49" y2="100" strokeWidth="0.8" />
      <path d="M264 118 C262 104 266 94 274 98 C282 102 282 110 278 118" />
      <line x1="271" y1="118" x2="271" y2="100" strokeWidth="0.8" />
    </g>

    {/* Main 2-story building block */}
    <rect x="70" y="48" width="180" height="70" strokeWidth="1.2" />

    {/* Roof Cornice & Pediment structure */}
    <line x1="64" y1="48" x2="256" y2="48" strokeWidth="1.4" />
    <line x1="67" y1="44" x2="253" y2="44" strokeWidth="0.9" />
    {/* Central raised pediment / crown */}
    <path d="M130 44 L145 32 L175 32 L190 44 Z" strokeWidth="1.1" />
    <circle cx="160" cy="38" r="2.5" strokeWidth="0.9" />

    {/* Upper Floor Windows (Symmetrical Row of 4 windows) */}
    <rect x="86" y="58" width="22" height="18" rx="1" strokeWidth="1" />
    <line x1="97" y1="58" x2="97" y2="76" strokeWidth="0.7" />
    <line x1="86" y1="67" x2="108" y2="67" strokeWidth="0.7" />

    <rect x="122" y="58" width="22" height="18" rx="1" strokeWidth="1" />
    <line x1="133" y1="58" x2="133" y2="76" strokeWidth="0.7" />
    <line x1="122" y1="67" x2="144" y2="67" strokeWidth="0.7" />

    <rect x="176" y="58" width="22" height="18" rx="1" strokeWidth="1" />
    <line x1="187" y1="58" x2="187" y2="76" strokeWidth="0.7" />
    <line x1="176" y1="67" x2="198" y2="67" strokeWidth="0.7" />

    <rect x="212" y="58" width="22" height="18" rx="1" strokeWidth="1" />
    <line x1="223" y1="58" x2="223" y2="76" strokeWidth="0.7" />
    <line x1="212" y1="67" x2="234" y2="67" strokeWidth="0.7" />

    {/* Mid-level decorative string course */}
    <line x1="70" y1="84" x2="250" y2="84" strokeWidth="0.9" opacity="0.6" />

    {/* Ground Floor Side Windows */}
    <rect x="86" y="92" width="22" height="20" rx="1" strokeWidth="1" />
    <line x1="97" y1="92" x2="97" y2="112" strokeWidth="0.7" />
    <line x1="86" y1="102" x2="108" y2="102" strokeWidth="0.7" />

    <rect x="212" y="92" width="22" height="20" rx="1" strokeWidth="1" />
    <line x1="223" y1="92" x2="223" y2="112" strokeWidth="0.7" />
    <line x1="212" y1="102" x2="234" y2="102" strokeWidth="0.7" />

    {/* Central Covered Entrance Portico */}
    {/* Portico Canopy */}
    <line x1="134" y1="88" x2="186" y2="88" strokeWidth="1.3" />
    <polygon points="137,88 183,88 180,84 140,84" strokeWidth="1" />
    {/* Columns supporting canopy */}
    <line x1="140" y1="88" x2="140" y2="118" strokeWidth="1.2" />
    <line x1="180" y1="88" x2="180" y2="118" strokeWidth="1.2" />

    {/* Main Glass Door with Arched Transom */}
    <path d="M146 118 V96 C146 91 174 91 174 96 V118" strokeWidth="1.1" />
    <line x1="160" y1="91" x2="160" y2="118" strokeWidth="0.8" />
    <line x1="146" y1="104" x2="174" y2="104" strokeWidth="0.8" />

    {/* Entrance steps */}
    <line x1="134" y1="118" x2="186" y2="118" strokeWidth="1.3" />
    <line x1="130" y1="121" x2="190" y2="121" strokeWidth="1" />
  </svg>
);

/**
 * Architectural line-art for Grand Marrievilla (Ferozpur Road, Ludhiana)
 * Stately classical palace/manor with triangular pediment, colonnade columns, grand arch, and pavilion balustrade.
 */
export const GrandMarrievillaIllustration: React.FC<SvgProps> = ({ className = 'w-full max-w-[280px] h-auto' }) => (
  <svg
    viewBox="0 0 320 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Ground baseline */}
    <line x1="15" y1="118" x2="305" y2="118" strokeWidth="1.2" opacity="0.6" />

    {/* Pavilion outer wings */}
    <rect x="52" y="58" width="38" height="60" strokeWidth="1.2" />
    <rect x="230" y="58" width="38" height="60" strokeWidth="1.2" />

    {/* Wing cornices and decorative urns */}
    <line x1="48" y1="58" x2="94" y2="58" strokeWidth="1.4" />
    <line x1="52" y1="54" x2="90" y2="54" strokeWidth="0.8" strokeDasharray="2 3" />
    <path d="M56 54 C56 50 62 50 62 54" strokeWidth="0.8" />
    <path d="M80 54 C80 50 86 50 86 54" strokeWidth="0.8" />

    <line x1="226" y1="58" x2="272" y2="58" strokeWidth="1.4" />
    <line x1="230" y1="54" x2="268" y2="54" strokeWidth="0.8" strokeDasharray="2 3" />
    <path d="M234 54 C234 50 240 50 240 54" strokeWidth="0.8" />
    <path d="M258 54 C258 50 264 50 264 54" strokeWidth="0.8" />

    {/* Wing arched windows */}
    <path d="M63 94 V76 C63 70 79 70 79 76 V94 Z" strokeWidth="1" />
    <line x1="71" y1="70" x2="71" y2="94" strokeWidth="0.7" />

    <path d="M241 94 V76 C241 70 257 70 257 76 V94 Z" strokeWidth="1" />
    <line x1="249" y1="70" x2="249" y2="94" strokeWidth="0.7" />

    {/* Central Colonnade Manor Body */}
    <rect x="90" y="46" width="140" height="72" strokeWidth="1.2" />

    {/* Grand Neoclassical Triangular Pediment */}
    <polygon points="85,46 160,20 235,46" strokeWidth="1.3" />
    <polygon points="96,44 160,24 224,44" strokeWidth="0.8" opacity="0.6" />
    {/* Pediment Central Round Medallion / Crest */}
    <circle cx="160" cy="36" r="4.5" strokeWidth="1" />
    <circle cx="160" cy="36" r="1.5" strokeWidth="0.8" />

    {/* Roof finials */}
    <line x1="160" y1="20" x2="160" y2="13" strokeWidth="1.2" />
    <circle cx="160" cy="11" r="2" strokeWidth="0.9" />

    {/* Entablature horizontal frieze */}
    <line x1="88" y1="50" x2="232" y2="50" strokeWidth="1" />

    {/* Grand Central Arch Entrance */}
    <path d="M142 118 V84 C142 74 178 74 178 84 V118" strokeWidth="1.3" />
    <path d="M146 118 V86 C146 78 174 78 174 86 V118" strokeWidth="0.8" />
    {/* Keystone */}
    <polygon points="158,73 162,73 163,77 157,77" strokeWidth="0.9" />
    {/* Arch transom sunburst lines */}
    <line x1="160" y1="84" x2="160" y2="118" strokeWidth="0.8" />

    {/* Classical Colonnade Pillars (Fluting columns) */}
    {/* Pillar 1 */}
    <line x1="102" y1="50" x2="102" y2="118" strokeWidth="1.3" />
    <line x1="106" y1="50" x2="106" y2="118" strokeWidth="0.8" opacity="0.7" />
    <rect x="99" y="49" width="10" height="3" strokeWidth="0.8" />
    <rect x="99" y="115" width="10" height="3" strokeWidth="0.8" />

    {/* Pillar 2 */}
    <line x1="124" y1="50" x2="124" y2="118" strokeWidth="1.3" />
    <line x1="128" y1="50" x2="128" y2="118" strokeWidth="0.8" opacity="0.7" />
    <rect x="121" y="49" width="10" height="3" strokeWidth="0.8" />
    <rect x="121" y="115" width="10" height="3" strokeWidth="0.8" />

    {/* Pillar 3 */}
    <line x1="192" y1="50" x2="192" y2="118" strokeWidth="1.3" />
    <line x1="196" y1="50" x2="196" y2="118" strokeWidth="0.8" opacity="0.7" />
    <rect x="189" y="49" width="10" height="3" strokeWidth="0.8" />
    <rect x="189" y="115" width="10" height="3" strokeWidth="0.8" />

    {/* Pillar 4 */}
    <line x1="214" y1="50" x2="214" y2="118" strokeWidth="1.3" />
    <line x1="218" y1="50" x2="218" y2="118" strokeWidth="0.8" opacity="0.7" />
    <rect x="211" y="49" width="10" height="3" strokeWidth="0.8" />
    <rect x="211" y="115" width="10" height="3" strokeWidth="0.8" />

    {/* Grand Entrance Plinth & Steps */}
    <line x1="80" y1="118" x2="240" y2="118" strokeWidth="1.4" />
    <line x1="74" y1="121" x2="246" y2="121" strokeWidth="1.1" />
    <line x1="68" y1="124" x2="252" y2="124" strokeWidth="0.9" opacity="0.7" />
  </svg>
);

/**
 * Ornate Event Icons for Sangeet, Haldi, Wedding
 */

// Sangeet Icon: Dholak / Tabla & musical notes with royal flourish
export const SangeetIcon: React.FC<SvgProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Barrel body of Dholak */}
    <path
      d="M5 9 C8 6.5 20 6.5 23 9 C24.5 14 24.5 16 23 20 C20 22.5 8 22.5 5 20 C3.5 16 3.5 14 5 9 Z"
      strokeWidth="1.3"
      fill="currentColor"
      fillOpacity="0.08"
    />
    {/* Left Drum Head */}
    <ellipse cx="5.5" cy="14.5" rx="1.5" ry="5.5" strokeWidth="1.2" />
    {/* Right Drum Head */}
    <ellipse cx="22.5" cy="14.5" rx="1.5" ry="5.5" strokeWidth="1.2" />
    {/* Bracing cords (zigzag lacing) */}
    <path
      d="M5.5 10 L14 19 L22.5 10 M5.5 19 L14 10 L22.5 19"
      strokeWidth="0.9"
      opacity="0.8"
    />
    {/* Musical sparkles / notes floating above */}
    <path d="M12 4.5 C12 3.5 14 3 15 3.5 V6" strokeWidth="0.9" />
    <circle cx="12" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="17" cy="4" r="0.7" fill="currentColor" />
  </svg>
);

// Haldi Icon: Traditional Brass Urli with turmeric paste, floral blossoms & marigold petals
export const HaldiIcon: React.FC<SvgProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Traditional Urli bowl */}
    <path
      d="M4 14 C4 21 8 23 14 23 C20 23 24 21 24 14 Z"
      strokeWidth="1.3"
      fill="currentColor"
      fillOpacity="0.1"
    />
    {/* Urli Rim with handles */}
    <ellipse cx="14" cy="14" rx="10" ry="2.2" strokeWidth="1.2" />
    <path d="M3 13.5 C1.5 13.5 1.5 15.5 3 15.5" strokeWidth="1.1" />
    <path d="M25 13.5 C26.5 13.5 26.5 15.5 25 15.5" strokeWidth="1.1" />
    {/* Pedestal Base */}
    <path d="M10 23 H18 V25 H10 Z" strokeWidth="1" />

    {/* Marigold Flower Blossom in the center */}
    <circle cx="14" cy="11" r="2" fill="currentColor" strokeWidth="0.8" />
    {/* Petals */}
    <path d="M14 6.5 V8.5 M14 13.5 V15.5 M9.5 11 H11.5 M16.5 11 H18.5" strokeWidth="1" />
    <path d="M10.8 7.8 L12.2 9.2 M15.8 12.8 L17.2 14.2 M17.2 7.8 L15.8 9.2 M12.2 12.8 L10.8 14.2" strokeWidth="0.9" />

    {/* Turmeric droplets / auspicious marks */}
    <circle cx="8" cy="8" r="0.9" fill="currentColor" />
    <circle cx="20" cy="8" r="0.9" fill="currentColor" />
  </svg>
);

// Wedding Icon: Sacred Mandap & Varmala Rings / Kalash
export const WeddingIcon: React.FC<SvgProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Mandap Arch / Canopy */}
    <path
      d="M5 12 C5 6.5 14 4.5 14 4.5 C14 4.5 23 6.5 23 12"
      strokeWidth="1.3"
    />
    {/* Mandap top Kalash / coconut finial */}
    <path d="M12.5 4.5 C12.5 3 14 2 14 2 C14 2 15.5 3 15.5 4.5" strokeWidth="1" />
    <circle cx="14" cy="2" r="0.7" fill="currentColor" />

    {/* Pillars */}
    <line x1="7" y1="12" x2="7" y2="24" strokeWidth="1.2" />
    <line x1="21" y1="12" x2="21" y2="24" strokeWidth="1.2" />
    {/* Pillar bases */}
    <line x1="5" y1="24" x2="9" y2="24" strokeWidth="1.2" />
    <line x1="19" y1="24" x2="23" y2="24" strokeWidth="1.2" />

    {/* Sacred Agni Kund (Sacred Fire) in center */}
    <polygon points="10,21 18,21 16.5,24 11.5,24" strokeWidth="1" />
    {/* Sacred flame */}
    <path
      d="M14 14 C15 16 16.5 17 15 19 C14 20 13 18.5 14 17 C13 18 12.5 19 12 19.5"
      strokeWidth="1.1"
      fill="currentColor"
      fillOpacity="0.3"
    />

    {/* Toran / Floral Garland */}
    <path d="M7 13 C10.5 15 17.5 15 21 13" strokeWidth="0.9" strokeDasharray="1.5 2" />
  </svg>
);

// Ornamental Timeline Badge / Brooch Pin (matching the maroon medallion in the reference!)
export const TimelineOrnamentBadge: React.FC<{ active?: boolean; className?: string }> = ({
  active = false,
  className = 'w-6 h-6',
}) => (
  <svg
    viewBox="0 0 28 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Hanging drop loop */}
    <line x1="14" y1="0" x2="14" y2="4" stroke={active ? '#c9a45c' : '#a07830'} strokeWidth="1.2" />

    {/* Scalloped Medallion Outer Ring */}
    <circle
      cx="14"
      cy="14"
      r="10"
      fill={active ? '#7a1f2d' : '#8a1f2d'}
      stroke="#c9a45c"
      strokeWidth="1.4"
      className="transition-all duration-300"
    />

    {/* Inner golden ring */}
    <circle cx="14" cy="14" r="6.8" stroke="#f6deb0" strokeWidth="0.8" strokeDasharray="1.5 1.5" />

    {/* Central sparkling jewel star */}
    <circle cx="14" cy="14" r="3" fill="#fcf6ec" />
    <circle cx="14" cy="14" r="1.3" fill="#7a1f2d" />

    {/* Hanging Bottom Jewel Droplet */}
    <path
      d="M14 24 L14 27"
      stroke="#c9a45c"
      strokeWidth="1.2"
    />
    <circle cx="14" cy="29" r="2.2" fill="#8a1f2d" stroke="#c9a45c" strokeWidth="0.8" />
  </svg>
);
