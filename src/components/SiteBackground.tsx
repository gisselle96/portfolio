export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />

      {/* Soft color washes */}
      <div className="absolute -left-[20%] top-[-8%] h-[55%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(185,207,201,0.55)_0%,rgba(185,207,201,0.2)_42%,transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(58,168,184,0.18)_0%,transparent_70%)]" />
      <div className="absolute -right-[15%] top-[-5%] h-[48%] w-[60%] rounded-full bg-[radial-gradient(circle,rgba(184,197,214,0.5)_0%,rgba(184,197,214,0.18)_45%,transparent_72%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(107,155,255,0.14)_0%,transparent_70%)]" />
      <div className="absolute left-[5%] top-[38%] h-[42%] w-[65%] rounded-full bg-[radial-gradient(circle,rgba(169,189,208,0.42)_0%,rgba(169,189,208,0.14)_48%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(58,168,184,0.12)_0%,transparent_70%)]" />
      <div className="absolute right-[-10%] top-[55%] h-[40%] w-[55%] rounded-full bg-[radial-gradient(circle,rgba(185,207,201,0.38)_0%,rgba(185,207,201,0.12)_48%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(107,155,255,0.1)_0%,transparent_70%)]" />
      <div className="absolute left-[-8%] top-[78%] h-[38%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(169,189,208,0.35)_0%,transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(58,168,184,0.1)_0%,transparent_70%)]" />

      {/* Soft brand glows */}
      <div className="absolute right-[8%] top-[8%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(11,110,122,0.12)_0%,transparent_68%)] blur-xl dark:bg-[radial-gradient(circle,rgba(58,168,184,0.16)_0%,transparent_68%)]" />
      <div className="absolute left-[12%] top-[42%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(29,92,255,0.08)_0%,transparent_68%)] blur-xl dark:bg-[radial-gradient(circle,rgba(107,155,255,0.12)_0%,transparent_68%)]" />

      {/* Soft route accents */}
      <svg
        className="absolute top-[8%] right-[-10%] h-[38%] w-[100%] max-w-none opacity-25 sm:right-[-2%] sm:w-[54%] sm:opacity-35 dark:opacity-20 sm:dark:opacity-28"
        viewBox="0 0 820 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="siteRouteGrad" x1="80" y1="120" x2="740" y2="620">
            <stop stopColor="#0b6e7a" stopOpacity="0.15" />
            <stop offset="0.55" stopColor="#1d5cff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#0b6e7a" stopOpacity="0.7" />
          </linearGradient>
          <filter id="routeSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        <path
          className="route-path"
          filter="url(#routeSoft)"
          d="M110 560 C180 500, 210 420, 280 390 C360 354, 410 430, 490 400 C570 370, 600 280, 670 250 C710 232, 740 210, 760 170"
          stroke="url(#siteRouteGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle className="route-dot" cx="110" cy="560" r="7" fill="#0b6e7a" />
        <circle cx="490" cy="400" r="5" fill="#1d5cff" opacity="0.7" />
        <circle className="route-dot fill-ink" cx="760" cy="170" r="8" />
      </svg>

      <svg
        className="absolute top-[54%] left-[-14%] h-[36%] w-[95%] max-w-none opacity-18 sm:left-[-4%] sm:w-[50%] sm:opacity-28 dark:opacity-14 sm:dark:opacity-22"
        viewBox="0 0 820 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="siteRouteGradB" x1="740" y1="120" x2="80" y2="620">
            <stop stopColor="#1d5cff" stopOpacity="0.12" />
            <stop offset="0.55" stopColor="#0b6e7a" stopOpacity="0.35" />
            <stop offset="1" stopColor="#1d5cff" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <path
          className="route-path"
          d="M760 560 C690 500, 650 430, 580 400 C490 360, 430 450, 350 420 C270 390, 230 300, 160 260 C120 236, 80 210, 40 170"
          stroke="url(#siteRouteGradB)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle className="route-dot" cx="760" cy="560" r="6" fill="#1d5cff" />
        <circle cx="350" cy="420" r="4" fill="#0b6e7a" opacity="0.75" />
        <circle className="route-dot fill-ink" cx="40" cy="170" r="7" />
      </svg>
    </div>
  );
}
