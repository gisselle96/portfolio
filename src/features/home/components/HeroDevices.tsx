"use client";

import Image from "next/image";

function MacChart() {
  return (
    <svg
      viewBox="0 0 520 300"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect width="520" height="300" fill="#12181e" />
      <rect x="16" y="14" width="70" height="10" rx="2" fill="#0b6e7a" />
      <rect x="96" y="16" width="48" height="6" rx="2" fill="rgba(255,255,255,0.18)" />
      <rect x="154" y="16" width="36" height="6" rx="2" fill="rgba(255,255,255,0.12)" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={16 + i * 164}
            y="40"
            width="150"
            height="54"
            rx="6"
            fill="#1b242d"
          />
          <rect
            x={16 + i * 164}
            y="40"
            width="3"
            height="54"
            fill={i === 2 ? "#6b9bff" : "#3aa8b8"}
          />
          <rect
            x={28 + i * 164}
            y="50"
            width="50"
            height="5"
            rx="2"
            fill="rgba(255,255,255,0.25)"
          />
          <rect
            x={28 + i * 164}
            y="66"
            width="88"
            height="16"
            rx="3"
            fill="rgba(232,238,242,0.85)"
          />
        </g>
      ))}

      <rect x="16" y="110" width="488" height="172" rx="8" fill="#1b242d" />
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="28"
          x2="492"
          y1={145 + i * 32}
          y2={145 + i * 32}
          stroke="rgba(255,255,255,0.08)"
        />
      ))}
      <path
        d="M28 250 C70 235 95 210 140 198 S210 190 250 165 S330 140 390 120 S460 100 492 88"
        fill="none"
        stroke="#3aa8b8"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M28 250 C70 235 95 210 140 198 S210 190 250 165 S330 140 390 120 S460 100 492 88 L492 268 L28 268 Z"
        fill="url(#macFill)"
      />
      <defs>
        <linearGradient id="macFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b6e7a" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0b6e7a" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[80, 150, 230, 320, 410].map((x, i) => (
        <g key={x}>
          <line
            x1={x}
            x2={x}
            y1={160 - i * 8}
            y2={210 - i * 6}
            stroke={i % 2 ? "#6b9bff" : "#3aa8b8"}
            strokeWidth="1.5"
          />
          <rect
            x={x - 4}
            y={178 - i * 7}
            width="8"
            height="14"
            fill={i % 2 ? "#6b9bff" : "#3aa8b8"}
          />
        </g>
      ))}
    </svg>
  );
}

function TabletChart() {
  return (
    <svg viewBox="0 0 220 280" className="h-full w-full" aria-hidden>
      <rect width="220" height="280" fill="#12181e" />
      <rect x="14" y="16" width="50" height="8" rx="2" fill="#0b6e7a" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="14"
          y={40 + i * 52}
          width="192"
          height="44"
          rx="6"
          fill="#1b242d"
        />
      ))}
      {[62, 58, 74, 66].map((h, i) => (
        <rect
          key={i}
          x={28 + i * 44}
          y={248 - h}
          width="28"
          height={h}
          rx="3"
          fill={i % 2 ? "#6b9bff" : "#3aa8b8"}
          opacity="0.9"
        />
      ))}
    </svg>
  );
}

function PhoneChart() {
  return (
    <svg viewBox="0 0 140 260" className="h-full w-full" aria-hidden>
      <rect width="140" height="260" fill="#12181e" />
      <rect x="12" y="18" width="40" height="7" rx="2" fill="#0b6e7a" />
      <rect x="12" y="40" width="116" height="70" rx="8" fill="#1b242d" />
      <path
        d="M20 95 C40 85, 55 70, 75 60 S110 45, 128 38"
        fill="none"
        stroke="#3aa8b8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[48, 62, 55, 78, 70, 88].map((h, i) => (
        <rect
          key={i}
          x={14 + i * 20}
          y={230 - h}
          width="14"
          height={h}
          rx="2"
          fill={i % 2 ? "#6b9bff" : "#3aa8b8"}
        />
      ))}
    </svg>
  );
}

export function HeroDevices() {
  return (
    <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none">
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,var(--hero-glow)_0%,transparent_70%)] blur-2xl" />

      <div className="relative aspect-[1536/1024] w-full">
        <Image
          src="/hero/portfolio-devices-base.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-contain"
        />

        {/* Mac screen */}
        <div className="pointer-events-none absolute top-[8.5%] left-[18%] z-10 h-[36%] w-[37%] origin-center -rotate-[1.5deg] overflow-hidden rounded-[0.35rem] opacity-95 shadow-[0_0_24px_rgba(11,110,122,0.25)]">
          <MacChart />
        </div>

        {/* Tablet */}
        <div className="pointer-events-none absolute top-[18%] left-[54.5%] z-10 h-[31%] w-[15%] origin-center rotate-[3deg] overflow-hidden rounded-[0.5rem] opacity-95 shadow-[0_0_18px_rgba(11,110,122,0.2)]">
          <TabletChart />
        </div>

        {/* Phone right (principal) */}
        <div className="pointer-events-none absolute top-[49%] left-[72%] z-20 h-[37%] w-[20.5%] origin-center rotate-[6deg] overflow-hidden rounded-[1rem] opacity-95 shadow-[0_0_18px_rgba(29,92,255,0.18)]">
          <PhoneChart />
        </div>

        {/* Phone left */}
        <div className="pointer-events-none absolute top-[47.5%] left-[10.5%] z-10 h-[25%] w-[9%] origin-center -rotate-[8deg] overflow-hidden rounded-[0.75rem] opacity-95">
          <PhoneChart />
        </div>
      </div>
    </div>
  );
}
