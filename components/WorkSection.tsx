"use client";

const projects = [
  {
    tag: "Fintech · Mobile",
    title: "CardPilot",
    subtitle: "A checkout intelligence engine for multi-card users.",
    image: "/images/homepage/cardpilot.jpg",
    gradient: "from-[#1a0a00] to-[#3d1f00]",
    href: "/cardpilot",
  },
  {
    tag: "Real Estate · Kiosk",
    title: "Brightwater",
    subtitle: "An interactive sales kiosk for a 72-acre waterfront community.",
    image: "/images/Brightwater/overview/BrightwaterExperienceCentre-50.jpg",
    gradient: "from-[#0a1a10] to-[#0f2a1a]",
    href: "/brightwater",
  },
  {
    tag: "Travel · Product",
    title: "WeGo",
    subtitle: "A group trip planning app that treats the trip as a shared object.",
    image: "/images/homepage/wego.png",
    gradient: "from-[#0d0d12] to-[#1a1a2e]",
    href: "/wego",
  },
  {
    tag: "Real Estate · Web",
    title: "Zibi",
    subtitle: "A modern digital experience for a waterfront city development.",
    image: "/images/homepage/zibi.jpg",
    gradient: "from-[#0a1520] to-[#1a3040]",
    href: "/zibi",
  },
];

function ProjectCard({ p, className = "" }: { p: typeof projects[0]; className?: string }) {
  return (
    <a
      href={p.href}
      className={`relative rounded-[32px] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group ${className}`}
      draggable={false}
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset" }}
    >
      {p.image ? (
        <img
          src={p.image}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          draggable={false}
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute top-5 left-5">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium tracking-wide text-white border border-white/20 backdrop-blur-md" style={{ background: "rgba(0,0,0,0.3)" }}>
          {p.tag}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <h3 className="text-white font-semibold text-[24px] md:text-[26px] leading-snug tracking-tight mb-1">{p.title}</h3>
        <p className="text-white/50 text-[16px] leading-relaxed">{p.subtitle}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-white/40 text-[12px] font-medium group-hover:text-white/70 transition-colors duration-300">
          View case study
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function WorkSection() {
  return (
    <div className="h-full w-full overflow-hidden">

      {/* Mobile: vertical stack */}
      <div className="md:hidden h-full overflow-y-auto px-4 py-4 space-y-4" style={{ scrollbarWidth: "none" }}>
        <div className="py-4">
          <h1 className="text-white font-bold text-[clamp(30px,8vw,48px)] leading-[1.05] tracking-[-0.03em] mb-4">
            Designing{" "}
            <span className="text-[#4a9eff]">scalable</span>{" "}
            products for{" "}
            <span className="text-[#4a9eff]">complex</span>{" "}
            systems
          </h1>
          <p className="text-[#707070] text-[14px] leading-relaxed">
            I design end-to-end product experiences that simplify complex systems
            and drive meaningful outcomes. By combining{" "}
            <span className="text-[#6ab4ff]/80">product thinking</span>,{" "}
            <span className="text-[#6ab4ff]/80">UX strategy</span>, and strong
            visual execution, I create solutions that scale with both user needs
            and business goals.
          </p>
        </div>
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} className="block w-full aspect-[4/3]" />
        ))}
        <div className="h-4" />
      </div>

      {/* Desktop: horizontal scroll */}
      <div
        className="hidden md:flex items-center h-full gap-8 overflow-x-auto cursor-grab active:cursor-grabbing pr-[7vw]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={(e) => {
          const el = e.currentTarget;
          const startX = e.pageX - el.offsetLeft;
          const scrollLeft = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        }}
      >
        <div className="flex-shrink-0 w-[38vw] pl-[7vw] pr-4">
          <h1 className="text-white font-bold text-[clamp(34px,4vw,66px)] leading-[1.05] tracking-[-0.03em] mb-6">
            Designing{" "}
            <span className="text-[#4a9eff]">scalable</span>{" "}
            products for{" "}
            <span className="text-[#4a9eff]">complex</span>{" "}
            systems
          </h1>
          <p className="text-[#707070] text-[16px] leading-relaxed w-full">
            I design end-to-end product experiences that simplify complex systems
            and drive meaningful outcomes. By combining{" "}
            <span className="text-[#6ab4ff]/80">product thinking</span>,{" "}
            <span className="text-[#6ab4ff]/80">UX strategy</span>, and strong
            visual execution, I create solutions that scale with both user needs
            and business goals.
          </p>
        </div>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} className={`flex-shrink-0 w-[43vw] h-[75%] ${i === 0 ? "ml-10" : ""}`} />
        ))}
        <div className="flex-shrink-0 w-1" />
      </div>

    </div>
  );
}
