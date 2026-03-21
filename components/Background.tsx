"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {/* SVG liquid glass filter */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="4"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="55"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="6" result="blurred" />
            <feComposite in="blurred" in2="SourceGraphic" operator="atop" />
          </filter>

          <filter id="glass-refract" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.008 0.012"
              numOctaves="3"
              seed="3"
              result="noise2"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise2"
              scale="30"
              xChannelSelector="G"
              yChannelSelector="R"
            />
          </filter>
        </defs>
      </svg>

      {/* Blob 1 — large blue top left */}
      <div
        className="absolute"
        style={{
          width: 800,
          height: 800,
          top: "-20%",
          left: "-15%",
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(59,130,246,0.55) 0%, rgba(99,102,241,0.3) 40%, transparent 70%)",
          filter: "url(#liquid-glass)",
        }}
      />

      {/* Blob 2 — indigo/violet right */}
      <div
        className="absolute"
        style={{
          width: 700,
          height: 700,
          top: "20%",
          right: "-15%",
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.25) 45%, transparent 70%)",
          filter: "url(#liquid-glass)",
        }}
      />

      {/* Blob 3 — cyan bottom */}
      <div
        className="absolute"
        style={{
          width: 900,
          height: 500,
          bottom: "-10%",
          left: "20%",
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(14,165,233,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)",
          filter: "url(#glass-refract)",
        }}
      />

      {/* Glass shimmer overlay — iridescent sheen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(99,102,241,0.04) 25%, rgba(14,165,233,0.03) 50%, rgba(139,92,246,0.04) 75%, rgba(255,255,255,0.02) 100%)",
        }}
      />

      {/* Specular highlight — top edge shimmer */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(147,197,253,0.15), rgba(255,255,255,0.08), transparent)",
        }}
      />
    </div>
  );
}
