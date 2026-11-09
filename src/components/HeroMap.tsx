export function HeroMap() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-y-0 right-[-8%] h-full w-[92%] max-w-none opacity-80 sm:right-[-2%] sm:w-[70%]"
        viewBox="0 0 820 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="routeGrad" x1="80" y1="120" x2="740" y2="620">
            <stop stopColor="#0b6e7a" stopOpacity="0.15" />
            <stop offset="0.55" stopColor="#1d5cff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0b6e7a" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <g stroke="rgba(16,24,32,0.08)" strokeWidth="1">
          <path d="M40 80 H780" />
          <path d="M40 180 H780" />
          <path d="M40 280 H780" />
          <path d="M40 380 H780" />
          <path d="M40 480 H780" />
          <path d="M40 580 H780" />
          <path d="M120 40 V680" />
          <path d="M240 40 V680" />
          <path d="M360 40 V680" />
          <path d="M480 40 V680" />
          <path d="M600 40 V680" />
          <path d="M720 40 V680" />
        </g>

        <path
          className="route-path"
          d="M110 560 C180 500, 210 420, 280 390 C360 354, 410 430, 490 400 C570 370, 600 280, 670 250 C710 232, 740 210, 760 170"
          stroke="url(#routeGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <circle className="route-dot" cx="110" cy="560" r="7" fill="#0b6e7a" />
        <circle cx="490" cy="400" r="5" fill="#1d5cff" opacity="0.85" />
        <circle className="route-dot" cx="760" cy="170" r="8" fill="#101820" />

        <rect
          x="620"
          y="120"
          width="120"
          height="72"
          rx="4"
          fill="rgba(245,248,250,0.72)"
          stroke="rgba(16,24,32,0.12)"
        />
        <path
          d="M640 148 H720 M640 164 H696"
          stroke="rgba(16,24,32,0.35)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
