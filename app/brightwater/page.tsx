"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "role", label: "My Role" },
  { id: "problem", label: "Problem" },
  { id: "decision", label: "Key Decision" },
  { id: "why", label: "Why This Worked" },
  { id: "tradeoffs", label: "Tradeoffs & Risks" },
  { id: "constraint", label: "Platform Constraints" },
  { id: "architecture", label: "Information Architecture" },
  { id: "hierarchy", label: "Information Hierarchy" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
  { id: "next", label: "Future Improvements" },
];

function KeyDecisionComparison() {
  const [leftOverlay, setLeftOverlay] = useState(false);
  const [rightOverlay, setRightOverlay] = useState(false);

  return (
    <div className="mt-9 grid grid-cols-2 gap-4">
      {/* Row 1: Text descriptions */}
      <div>
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-1">Third-Party Proposal</p>
        <p className="text-[16px] font-bold text-white mb-2">Vertical Browsing</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">The third-party design followed a traditional vertical flow, stacking building content into scrollable sections.</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">This approach aligned with familiar web behaviors but fragmented the browsing experience. As users scrolled through multiple sections, they frequently lost track of where they were within the larger development.</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">Vertical navigation supported content depth, but weakened spatial continuity — a critical factor in multi-building exploration.</p>
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-1" style={{ color: "rgba(126,207,239,0.6)" }}>My Proposal</p>
        <p className="text-[16px] font-bold text-white mb-2">Horizontal Navigation</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">Instead of stacking content vertically, I proposed a horizontal navigation model that aligned buildings across a single continuous plane.</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">This approach preserved spatial relationships between buildings and allowed users to transition between them without losing orientation. Navigation became directional rather than hierarchical, supporting natural comparison between locations.</p>
        <p className="text-[14px] text-white/55 leading-relaxed mt-2">The horizontal model shifted the experience from scrolling through content to moving across space.</p>
      </div>

      {/* Row 2: Buttons */}
      <div className="flex justify-end">
        <button
          onClick={() => setLeftOverlay(!leftOverlay)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.07)", color: leftOverlay ? "#fff" : "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          User perception overlay
          <div className="relative w-8 h-4 rounded-full transition-all duration-200 flex-shrink-0" style={{ background: leftOverlay ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}>
            <div className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-200" style={{ left: leftOverlay ? "18px" : "2px" }} />
          </div>
        </button>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setRightOverlay(!rightOverlay)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.07)", color: rightOverlay ? "#7ecfef" : "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          User perception overlay
          <div className="relative w-8 h-4 rounded-full transition-all duration-200 flex-shrink-0" style={{ background: rightOverlay ? "rgba(126,207,239,0.5)" : "rgba(255,255,255,0.15)" }}>
            <div className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-200" style={{ left: rightOverlay ? "18px" : "2px" }} />
          </div>
        </button>
      </div>

      {/* Row 3: Image boxes */}
      <div className="rounded-[20px] p-4" style={{ background: "#141414", border: "1.5px solid rgba(255,255,255,0.08)" }}>
        <div className="relative w-full">
          <img src="/images/Brightwater/key decision/scroll-base reading 1.png" alt="Scroll-based reading" className="w-full rounded-[12px]" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
          <img src="/images/Brightwater/key decision/scroll-base reading 2.png" alt="Scroll-based reading overlay" className="absolute inset-0 w-full rounded-[12px] transition-opacity duration-300" style={{ opacity: leftOverlay ? 1 : 0 }} onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
        </div>
      </div>
      <div className="rounded-[20px] p-4 flex items-center justify-center" style={{ background: "#141414", border: "1.5px solid rgba(126,207,239,0.4)" }}>
        <div className="relative w-full">
          <img src="/images/Brightwater/key decision/spatial progression 1.png" alt="Spatial progression" className="w-full rounded-[12px]" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
          <img src="/images/Brightwater/key decision/spatial progression 2.png" alt="Spatial progression overlay" className="absolute inset-0 w-full rounded-[12px] transition-opacity duration-300" style={{ opacity: rightOverlay ? 1 : 0 }} onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
        </div>
      </div>
    </div>
  );
}

function SectionCard({ label, children, noPaddingBottom }: { label: string; children: React.ReactNode; noPaddingBottom?: boolean }) {
  return (
    <div className={`rounded-[24px] ${noPaddingBottom ? "pt-10 md:pt-16 px-5 md:px-10 pb-0" : "pt-10 md:pt-16 px-5 md:px-10 pb-10"}`} style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="flex items-center gap-2 mb-7">
        <span className="w-[8px] h-[8px] rounded-full bg-white flex-shrink-0" style={{ boxShadow: "0 0 6px 2px rgba(255,255,255,0.25)" }} />
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/40">{label}</p>
      </div>
      {children}
    </div>
  );
}

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div
      className="flex flex-col md:grid w-full gap-6 md:gap-0"
      style={{ gridTemplateColumns: "40% 50%", columnGap: "10%" }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export default function Brightwater() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-auto bg-black text-white" style={{ fontFamily: "'Inter', sans-serif", scrollbarWidth: "none" }}>

      {/* Fixed right sidebar */}
      <nav className="hidden lg:flex flex-col gap-0 fixed right-8 top-1/2 -translate-y-1/2 z-50">
        {navSections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="text-right text-[13px] py-1.5 px-2 transition-all duration-200 hover:text-white hover:translate-x-[-2px] font-medium"
            style={{ color: active === s.id ? "#fff" : "#555" }}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Floating back button */}
      <div className="fixed top-5 md:top-16 z-50 left-4 md:left-[7vw]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 text-[13px] text-white/80 hover:text-white hover:bg-[#222] transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2.5L4.5 7 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Hero image */}
      <div className="w-full px-4 md:px-[12vw] pt-20 md:pt-32 pb-0">
        <div className="w-full relative overflow-hidden rounded-t-[24px]" style={{ aspectRatio: "16/10.37", background: "#0a0a0a" }}>
          <img
            src="/images/Brightwater/overview/BrightwaterExperienceCentre-50.jpg"
            alt="Brightwater"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #000 100%)" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-[12vw] pb-32">

        {/* Overview */}
        <section id="overview" className="pt-4 pb-16 scroll-mt-20">
          <div className="flex flex-col md:grid w-full gap-10 md:gap-0" style={{ gridTemplateColumns: "40% 50%", columnGap: "10%" }}>

            {/* Left: title + meta */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="text-[clamp(36px,5vw,72px)] font-bold tracking-[-0.03em] leading-none mb-4">
                  Brightwater
                </h1>
                <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                  An interactive sales kiosk for a 72-acre waterfront community.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Year", value: "2025" },
                  { label: "Status", value: "Live — Brightwater Experience Centre, Port Credit" },
                  { label: "Role", value: "Sole Product Designer" },
                  { label: "Tools", value: "Figma, Adobe XD" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-1">{item.label}</p>
                    <p className="text-[14px] text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: overview summary */}
            <div className="flex flex-col justify-end">
              <div className="space-y-4 text-[16px] text-white/60 leading-relaxed">
                <p>Buyers were making $700K+ purchase decisions inside a kiosk that couldn't maintain spatial orientation. Conversations stalled, comparisons broke down, and sales teams repeatedly had to restart explanations.</p>
                <p>This wasn't a content problem — it was a navigation and mental model problem. I redesigned the browsing experience to preserve spatial continuity, support live conversations, and help buyers make confident decisions in real time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Context */}
        <section id="context" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Context">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  A flagship development with an invisible future.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Brightwater is a multi-phase development consisting of 4,000 homes, multiple buildings, shared amenities, retail spaces, and waterfront infrastructure. At launch, most of this didn't physically exist yet — making it difficult for buyers to visualize the full experience of living there.</p>
                  <p>This created a critical gap in the sales process: buyers needed to make high-stakes decisions based on fragmented information and imagination rather than lived experience.</p>
                  <p>The sales team needed a tool that could translate an unfinished vision into something tangible and understandable.</p>
                </div>
              }
            />
            <img
              src="/images/Brightwater/context/Aerial_edited.jpg"
              alt="Brightwater Aerial"
              className="w-full mt-9 rounded-[16px] object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />
          </SectionCard>
        </section>

        {/* My Role */}
        <section id="role" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="My Role">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  End-to-end ownership. No design lead above me.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>I owned this project end-to-end — from field observation to architecture design to final implementation. I worked directly with sales stakeholders to identify friction points, defined the information structure, designed every interface, and partnered with third-party developers through build and QA to ensure fidelity at launch.</p>
                </div>
              }
            />
            <img
              src="/images/Brightwater/my role/Sprint Timeline BW.png"
              alt="Sprint Timeline"
              className="w-full mt-9 rounded-[16px] object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />
          </SectionCard>
        </section>

        {/* Problem */}
        <section id="problem" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Problem">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  This wasn't an information problem — it was an orientation problem.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Buyers weren't struggling to find information — they were struggling to stay oriented.</p>
                  <p>Each building contained multiple unit types, and navigation followed a traditional vertical browsing model. As buyers moved between sections, they lost context and needed repeated assistance to reorient themselves.</p>
                  <p>In a sales environment where conversations happen live, hesitation slows momentum. Every moment spent navigating instead of discussing units weakened the flow of the interaction.</p>
                  <p>The real challenge was not access — it was orientation.</p>
                </div>
              }
            />

            <img
              src="/images/Brightwater/problem/problem.jpg"
              alt="Problem"
              className="w-full mt-9 rounded-[16px] object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />

            {/* How Might We banner */}
            <div className="mt-9 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(13,59,79,0.6)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-40" style={{ background: "#0D3B4F" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "#7ecfef" }}>How Might We</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Design a single, coherent experience that orients buyers spatially and emotionally before asking them to evaluate individual units — and that serves both self-guided exploration and sales-rep-led conversation?
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Key Decision */}
        <section id="decision" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Key Decision">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Choosing a Navigation Model.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Early exploration revealed two viable navigation approaches: a vertical browsing model proposed by a third-party vendor, and a horizontal navigation model developed internally.</p>
                </div>
              }
            />
            <KeyDecisionComparison />
            <div className="mt-9 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(13,59,79,0.4)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-30" style={{ background: "#0D3B4F" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "#7ecfef" }}>Foundation Constraint</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  All navigation had to live within a single page.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Why This Worked */}
        <section id="why" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Why This Worked">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">The design worked because it matched how people actually use the kiosk.</h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">The horizontal navigation model succeeded because it aligned with how users physically interacted with the kiosk environment. Buyers explored the system while standing and speaking with sales representatives, requiring fast recognition, minimal hesitation, and clear spatial continuity. These behavioral realities informed several key design principles that shaped the final structure.</p>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
              {[
                { num: "01", title: "Scanning Behavior", hook: "Standing users scan, not read", body: "Buyers interact with the kiosk while standing. A horizontal layout supports quick visual scanning instead of long vertical reading." },
                { num: "02", title: "Visibility", hook: "Fully visible content reduces hesitation", body: "Keeping major navigation elements visible at all times helps users understand where they are without scrolling." },
                { num: "03", title: "Conversation Support", hook: "Navigation supports live conversations", body: "Sales representatives guide buyers in real time. Single-page navigation allows fast transitions without interrupting discussions." },
                { num: "04", title: "Touch Usability", hook: "Large touch targets improve usability", body: "Horizontal grouping enabled larger interactive zones, improving accuracy and comfort on touch-based screens." },
              ].map((c) => (
                <div key={c.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.num} — {c.title}</p>
                  <p className="text-[15px] font-semibold text-white mb-2">{c.hook}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Tradeoffs & Risks */}
        <section id="tradeoffs" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Tradeoffs & Risks">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">No design decision is risk-free — adopting a horizontal model required balancing spatial clarity with technical and usability constraints.</h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">No real design decision is risk-free. While the horizontal model improved spatial clarity, it introduced several technical and usability considerations that required careful balancing.</p>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
              {[
                { num: "01", title: "Content Density", risk: "Risk: Horizontal layouts increase visual density.", body: "I introduced strict grouping rules and spacing constraints to preserve visual clarity while maintaining spatial continuity." },
                { num: "02", title: "Performance", risk: "Risk: Slower loading", body: "I prioritized critical content, reduced media weight, and coordinated staged loading strategies with developers to maintain responsive interactions." },
                { num: "03", title: "Development Complexity", risk: "Risk: Custom navigation logic", body: "I standardized navigation behaviors and transitions early, reducing implementation complexity while preserving usability." },
                { num: "04", title: "Interaction Accuracy", risk: "Risk: Touch precision", body: "I designed oversized touch targets and validated spacing to ensure reliable interaction across large-format screens." },
              ].map((c) => (
                <div key={c.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.num} — {c.title}</p>
                  <p className="text-[13px] font-semibold mb-2" style={{ color: "#f87171" }}>{c.risk}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Platform Constraints */}
        <section id="constraint" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Platform Constraints">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Interactive map navigation was not supported by the third-party platform.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The initial concept included an interactive community map that allowed users to select buildings directly from the master plan. However, the platform supported only static image rendering, preventing dynamic click-based navigation.</p>
                  <p>To maintain usability, I restructured the experience into dedicated residence pages. This decision directly influenced the site architecture, ensuring each building remained individually accessible while preserving a clear sense of community structure.</p>
                </div>
              }
            />
            <div className="mt-9 flex justify-center">
              <video
                src="/images/Brightwater/platform constraint/interactive map.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[20px] object-cover"
              />
            </div>
          </SectionCard>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Information Architecture">
            <div className="space-y-12">

              <TwoCol
                left={
                  <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                    Platform constraints directly shaped the site structure.
                  </h2>
                }
                right={
                  <div className="space-y-6 text-[16px] text-white/70 leading-relaxed">
                    <p>Without support for interactive maps, each residence required its own dedicated entry point. I designed a modular site map that allowed users to explore buildings independently while maintaining a cohesive view of the broader community.</p>
                    <p>Maintaining consistency across five distinct buildings was critical. Buyers needed to move between buildings without relearning the interface.</p>
                  </div>
                }
              />

              <img
                src="/images/Brightwater/architecture/Site Map.png"
                alt="Site map"
                className="w-full rounded-[16px] object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />

            </div>
          </SectionCard>
        </section>

        {/* Information Hierarchy */}
        <section id="hierarchy" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Information Hierarchy">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Community before unit.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The experience begins with an aerial overview of the entire community.</p>
                  <p>This was intentional.</p>
                  <p>People don't choose a unit first — they choose a place. The emotional connection to neighbourhood, lifestyle, and surroundings happens before the rational evaluation of floor plans.</p>
                  <p>By mirroring this natural decision-making sequence, the interface helped buyers feel grounded before comparing specific units.</p>
                </div>
              }
            />
            <div className="mt-9 flex justify-center">
              <video
                src="/images/Brightwater/information hierchary/touch screen.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[20px] object-cover"
              />
            </div>
          </SectionCard>
        </section>

        {/* Outcome */}
        <section id="outcome" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Outcome">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Improving Navigation Confidence.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Following implementation, the redesigned navigation significantly improved how buyers explored the development.</p>
                  <p className="text-white/50 text-[13px] font-semibold uppercase tracking-widest">Key behavioral improvements</p>
                  <ul className="space-y-1 text-white/60">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Buyers moved between buildings more confidently without needing assistance.</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Sales conversations flowed more naturally without repeated reorientation.</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Users spent more time comparing units across multiple buildings.</li>
                  </ul>
                  <p>The redesigned system reduced hesitation and allowed buyers to focus on evaluating units rather than navigating the interface.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
              {[
                { stat: "+33%", label: "Increase in daily exploration activity", body: "Buyers navigated across more sections within a single session, indicating stronger engagement." },
                { stat: "+23%", label: "Increase in client signups", body: "Improved clarity and confidence supported faster decision-making during sales interactions." },
              ].map((item) => (
                <div key={item.stat} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[clamp(28px,3vw,40px)] font-bold text-white tracking-tight leading-none mb-2">{item.stat}</p>
                  <p className="text-[14px] font-semibold text-white/70 mb-1">{item.label}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Reflection */}
        <section id="reflection" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Reflection">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Designing Systems, Not Screens.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">This project reinforced the importance of designing beyond the screen — considering physical environments, technical constraints, and long-term system scalability. It shifted my focus from building pages to designing structured experiences that support real-world interactions.</p>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
              {[
                { num: "01", title: "Designing for Physical Context", body: "Designing for a kiosk environment required understanding how users physically interact with the interface — standing, scanning, and engaging in conversations. This project strengthened my ability to align interface structure with real-world behaviors, not just screen layouts." },
                { num: "02", title: "Thinking in Systems, Not Pages", body: "Moving to a single-page navigation model required careful planning of structure, hierarchy, and scalability. This experience reinforced the value of designing flexible foundations that support future expansion without requiring structural redesign." },
              ].map((c) => (
                <div key={c.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.num}</p>
                  <p className="text-[15px] font-semibold text-white mb-2">{c.title}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* What I Would Improve Next */}
        <section id="next" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Future Improvements">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  What I Would Improve Next.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Given more time, I would explore:</p>
                  <ul className="space-y-2 text-white/60">
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Adding spatial previews between buildings to strengthen location awareness</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Introducing personalized filtering to support faster unit discovery</li>
                    <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />Conducting longitudinal usability testing to measure decision speed over time</li>
                  </ul>
                </div>
              }
            />
          </SectionCard>
        </section>

      </div>
    </div>
  );
}
