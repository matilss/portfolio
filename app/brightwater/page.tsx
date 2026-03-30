"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "role", label: "My Role" },
  { id: "problem", label: "Problem" },
  { id: "decision", label: "Key Decision" },
  { id: "architecture", label: "Architecture" },
  { id: "hierarchy", label: "Information Hierarchy" },
  { id: "constraint", label: "Constraint" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

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
      <div className="fixed top-5 md:top-16 z-50 left-4 md:left-[12vw]">
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
                  { label: "Client", value: "Dream Unlimited" },
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
                <p>Brightwater is a 72-acre waterfront community that will take years to fully build. Yet buyers were making $700K+ purchase decisions long before construction finished. Traditional tools — scale models, brochures, and conversations — weren't enough to communicate the scale, lifestyle, and long-term vision of the community.</p>
                <p>I designed and delivered an interactive kiosk experience that helped buyers understand the neighbourhood spatially, emotionally, and functionally — transforming the sales centre into an immersive decision-making environment.</p>
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
              src="/images/Brightwater/context/Masterplan.jpg"
              alt="Brightwater Masterplan"
              className="w-full mt-9 rounded-[16px] object-contain"
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
                  <p>Before designing anything, I spent time observing how buyers interacted with existing materials in the sales centre.</p>
                  <p>The challenge wasn't lack of content — it was lack of structure. With five buildings, multiple unit types, shared amenities, and an evolving neighbourhood, buyers didn't know where to begin. Conversations stalled not because answers weren't available, but because buyers couldn't mentally organize what they were seeing.</p>
                  <p>I also identified two distinct user modes:</p>
                  <ul className="list-disc list-inside space-y-1 text-white/60">
                    <li>Self-guided buyers exploring independently</li>
                    <li>Sales-assisted buyers navigating alongside a representative</li>
                  </ul>
                  <p>Any solution needed to support both behaviors seamlessly.</p>
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
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(13,59,79,0.9)" }}>How Might We</p>
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
                  Designing for the physical environment, not the web.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The third-party vendor initially proposed replicating the existing Brightwater website structure on the kiosk — same content hierarchy, same scroll-based navigation, simply scaled to a larger screen.</p>
                  <p>I chose not to follow that direction.</p>
                  <p>A public kiosk operates in a fundamentally different environment than a desktop or mobile device. Buyers are standing, often in conversation with a sales representative, interacting through touch rather than mouse precision. The experience needs to be fast to understand, easy to navigate, and forgiving of hesitation. In this context, vertically scrolling content increases cognitive load and creates disorientation — especially when users are already trying to understand a complex community with multiple buildings, amenities, and lifestyle components.</p>
                  <p>Rather than adapting a web pattern to a physical environment, I redesigned the experience around how people actually behave in the sales centre — standing, scanning, and making decisions in conversation.</p>
                </div>
              }
            />
            <div className="mt-9 flex justify-center">
              <video
                src="/images/Brightwater/key decision/bw web 2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[20px] object-cover"
              />
            </div>
            <div className="mt-9 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(13,59,79,0.4)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-30" style={{ background: "#0D3B4F" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "#7ecfef" }}>Single Product Constraint</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Every screen must be fully contained within the display — no vertical scrolling.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Architecture */}
        <section id="architecture" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Architecture">
            <div className="space-y-12">

              <TwoCol
                left={
                  <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                    Two navigation tiers, working together.
                  </h2>
                }
                right={
                  <div className="space-y-6 text-[16px] text-white/70 leading-relaxed">
                    <p>The system needed to support deep content without overwhelming users. I designed a dual-navigation model:</p>
                    <div className="space-y-2">
                      <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-white/40">Global Navigation</p>
                      <ul className="space-y-1 text-white/60">
                        {["Overview", "Masterplan", "Clubhouse", "Port Credit", "Residences", "Gallery"].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/50 pt-1">This created a persistent mental model of the entire community.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-white/40">Contextual Navigation — within each building</p>
                      <ul className="space-y-1 text-white/60">
                        {["Location", "Features & Finishes", "Amenities", "Floorplans"].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-white/50 pt-1">This allowed buyers to explore deeply without losing orientation.</p>
                    </div>
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

        {/* Constraint */}
        <section id="constraint" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Constraint">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Designing within platform limitations.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>My original vision included an interactive masterplan where buyers could tap buildings directly on the map.</p>
                  <p>The platform couldn't support image-based interaction hotspots.</p>
                  <p>Rather than abandoning the spatial model, I restructured the experience into two coordinated parts:</p>
                  <ul className="space-y-1 text-white/60">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />A static aerial masterplan for spatial context</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />Dedicated building pages for detailed exploration</li>
                  </ul>
                  <p>The persistent global navigation became the bridge between them.</p>
                  <p>This preserved spatial clarity while working within technical limitations — and in practice, reduced visual clutter that an interactive map might have introduced.</p>
                </div>
              }
            />
          </SectionCard>
        </section>

        {/* Outcome */}
        <section id="outcome" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Outcome">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Became the centrepiece of the sales experience.
                </h2>
              }
              right={
                <div className="space-y-6 text-[16px] text-white/70 leading-relaxed">
                  <p>Following launch at the Brightwater Experience Centre:</p>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { stat: "+33%", label: "Increase in daily views" },
                      { stat: "+23%", label: "Increase in client signups" },
                    ].map((item) => (
                      <div key={item.stat} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                        <p className="text-[clamp(28px,3vw,40px)] font-bold text-white tracking-tight leading-none mb-2">{item.stat}</p>
                        <p className="text-[14px] text-white/50">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <p>Sales teams reported significantly higher buyer engagement and smoother guided conversations.</p>
                  <p>The kiosk became the primary storytelling tool within the sales centre — replacing static materials as the main way buyers explored the community.</p>
                </div>
              }
            />
          </SectionCard>
        </section>

        {/* Reflection */}
        <section id="reflection" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Reflection">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Designing systems, not just screens.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">This project reinforced that good product design isn't just about ideal solutions — it's about making strong decisions within real-world constraints. Platform limitations, physical environments, and evolving stakeholder needs all shaped the final experience. Rather than treating constraints as blockers, I learned to use them to sharpen focus and prioritize what mattered most to users.</p>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
              {[
                { num: "01", title: "Push platform validation earlier", body: "Platform limitations influenced more design decisions than expected. In future projects, I would validate technical capabilities earlier to protect key interaction models before committing to architecture decisions." },
                { num: "02", title: "Extend the experience beyond the kiosk", body: "The kiosk supported in-person exploration, but buyers ultimately make decisions at home. A post-visit layer — allowing users to save floor plans and receive follow-up materials — would extend the journey beyond the physical sales centre and support long-term decision-making." },
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

      </div>
    </div>
  );
}
