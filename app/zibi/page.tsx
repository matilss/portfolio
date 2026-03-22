"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "business-context", label: "Business Context" },
  { id: "research", label: "Research" },
  { id: "product-strategy", label: "Product Strategy" },
  { id: "information-architecture", label: "Information Architecture" },
  { id: "execution", label: "Execution" },
  { id: "outcome", label: "Outcome" },
  { id: "reflection", label: "Reflection" },
];

export default function Zibi() {
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
            src="/images/homepage/zibi.jpg"
            alt="Zibi"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #000 100%)" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 md:px-[12vw] pb-32">

        {/* Title block + Overview */}
        <section id="overview" className="pt-4 pb-16 scroll-mt-20">
          <div className="flex flex-col md:grid w-full gap-10 md:gap-0" style={{ gridTemplateColumns: "40% 50%", columnGap: "10%" }}>

            {/* Left: title + meta */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="text-[clamp(48px,6vw,80px)] font-bold tracking-[-0.03em] leading-none mb-4">
                  Zibi
                </h1>
                <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                  A unified platform for a waterfront community.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Project", value: "Client Work" },
                  { label: "Status", value: "Phase 1 Live · Phase 2 In Progress" },
                  { label: "Timeline", value: "4 months" },
                  { label: "Domain", value: "Real Estate · Web" },
                  { label: "Role", value: "Product & Web Designer" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-1">{item.label}</p>
                    <p className="text-[14px] text-white/70">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: overview content */}
            <div className="flex flex-col justify-end">
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-5">Overview</p>
              <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                <p>Zibi is a large waterfront community spanning Ottawa and Gatineau — combining residential buildings, public spaces, and commercial areas into one neighbourhood.</p>
                <p>Consolidated three fragmented websites into a single scalable platform, reducing operational overhead and enabling unified customer journeys across the Zibi community.</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">Phase 1 — Complete</p>
                  <ul className="space-y-2">
                    {["zibi.ca community platform launched on schedule", "IA and navigation fully restructured", "Modular building template ready for Phase 2"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] text-white/70">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">Phase 2 — In Progress</p>
                  <ul className="space-y-2">
                    {["Building pages replacing aaltosuites.ca + vodaliving.ca", "Campaign traffic consolidation", "Cross-building discovery + full attribution"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] text-white/70">
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Business Context */}
        <section id="business-context" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Business Context">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Three websites for one community. It was costing the business money.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>As the Zibi development grew, each building launched its own marketing site alongside the main community website. Over time, the digital ecosystem expanded to three independent sites — each with its own CMS, navigation, and content structure:</p>
                  <ul className="space-y-2">
                    {["Zibi.ca — community platform", "AaltoSuites.ca — 2 residential buildings", "VodaLiving.ca — 1 residential building"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/60">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>While this allowed each building to promote itself independently, it fragmented the user journey and created significant operational overhead for the marketing team.</p>
                </div>
              }
            />
            {/* Business context image */}
            <div className="mt-8 rounded-[20px] overflow-hidden">
              <img
                src="/images/zibi/business-context/business-context.png"
                alt="Three fragmented Zibi websites"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Limited Discovery", body: "Visitors rarely discovered multiple buildings within Zibi. Someone who found Aalto often had no idea Voda existed — even though both belonged to the same community. Cross-building discovery was nearly impossible." },
                { num: "02", title: "Marketing Inefficiency", body: "Campaign traffic landed on isolated microsites, breaking attribution. A visitor who explored Zibi.ca and later converted on AaltoSuites.ca appeared as two separate users in analytics. Cross-site journeys were invisible." },
                { num: "03", title: "Operational Overhead", body: "Every content update had to be duplicated across three separate sites. Events, contact information, and marketing content were repeatedly updated — consuming hours of manual work each week." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Research */}
        <section id="research" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Research">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  The business case and the user case were pointing at the same fix.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>To understand how the ecosystem was actually used, I analyzed analytics across all three domains, spoke with the marketing and sales teams, and interviewed prospective residents.</p>
                  <p>Three patterns emerged across the data and conversations:</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Buildings felt disconnected", body: "Prospective residents often didn't realize the buildings were part of the same community. One user said directly: \"I didn't know Zibi and Aalto were related.\" The digital structure reinforced separation rather than community." },
                { num: "02", title: "Users weren't exploring", body: "Over 60% of sessions were single-page visits across all three sites, suggesting users were landing and leaving without discovering what else the community offered." },
                { num: "03", title: "Search behaviour told a different story", body: "Most organic search traffic used community-level terms like \"Zibi apartments\" — suggesting users thought of Zibi as one place, even when the digital experience treated it as three." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Key insight banner */}
            <div className="mt-9 rounded-[20px] p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1520 0%, #0a1020 100%)", border: "1px solid rgba(100,160,255,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#4a9eff" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(100,160,255,0.6)" }}>Key Insight</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Visitors explored Zibi as one community, but the digital ecosystem treated each building as a separate product. This fragmentation created not just operational inefficiency, but a breakdown of user trust.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Product Strategy */}
        <section id="product-strategy" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Product Strategy">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  The challenge was not redesigning three websites — it was redefining the ecosystem.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>When I joined the project, the initial direction was to improve each site individually. I challenged this approach and reframed the problem as a platform-level issue — redesigning individual sites would not solve the underlying fragmentation, duplicated effort, or broken attribution.</p>
                  <p>The real solution was consolidation. Instead of parallel sites, the platform would operate as one domain, one CMS, and one marketing destination. Residential buildings would exist as connected experiences within the Zibi platform, with the community site as the primary entry point.</p>
                  <p>This structure reflects how visitors actually explore Zibi: first understand the community → then compare residential options. It also creates a scalable foundation where future buildings integrate into the same platform instead of launching new standalone sites.</p>
                </div>
              }
            />

            {/* Strategy evaluation image */}
            <div className="mt-8 rounded-[20px] overflow-hidden">
              <img
                src="/images/zibi/product-strategy/strategy-table.png"
                alt="Platform strategy evaluation"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            {/* Tradeoff banner */}
            <div className="mt-9 rounded-[20px] p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1520 0%, #0a1020 100%)", border: "1px solid rgba(100,160,255,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#4a9eff" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(100,160,255,0.6)" }}>The trade-off I had to resolve</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Consolidating into one platform risked weakening individual building brands. The dual-navigation concept became the design solution that made consolidation possible.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Information Architecture */}
        <section id="information-architecture" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Information Architecture">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Zibi and its buildings aren't competing products. They're nested brands.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Combining three independently built websites meant reconciling three different content hierarchies. Each site had its own navigation logic and assumptions about user behaviour.</p>
                  <p>The challenge was creating a unified structure that surfaced the right content without introducing unnecessary complexity.</p>
                </div>
              }
            />
            <h3 className="text-[18px] font-bold text-white mt-8 mb-0">Three structural principles drove every decision:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Unified Residential Section", body: "All residential offerings now live under a single Residential section on Zibi.ca. Visitors can explore and compare buildings side-by-side — something the previous structure made impossible. Each building follows a consistent content framework for scalability." },
                { num: "02", title: "Simplified Navigation", body: "Navigation was rebuilt around how visitors explore the community: Learn about Zibi → explore residential options → discover neighbourhood experiences. This removed the competing structures across the three sites." },
                { num: "03", title: "Dual Navigation System", body: "The biggest challenge was balancing community navigation with building-level identity. A persistent Zibi global menu, with contextual building navigation appearing within building pages — preserving brand identity while keeping users oriented within the platform." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Sitemap image */}
            <h3 className="text-[18px] font-bold text-white mt-8 mb-4">Redesigned sitemap</h3>
            <div className="rounded-[20px] overflow-hidden">
              <img
                src="/images/zibi/information-architecture/sitemap.png"
                alt="Redesigned sitemap"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            {/* Dual nav video */}
            <h3 className="text-[18px] font-bold text-white mt-8 mb-4">Dual Navigation System</h3>
            <div className="rounded-[20px] overflow-hidden">
              <video
                src="/images/zibi/information-architecture/dual-nav.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover"
              />
            </div>
          </SectionCard>
        </section>

        {/* Execution */}
        <section id="execution" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Execution">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Sole designer. End-to-end ownership from architecture to launch.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>As the only designer on the project, I owned every layer — from information architecture and UX design to stakeholder alignment, developer handoff, and QA.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Design Leadership", body: "I translated executive direction into product decisions and aligned three building teams with competing brand priorities. The dual-navigation prototype became the artifact that moved stakeholders from debate to alignment." },
                { num: "02", title: "Developer Collaboration", body: "I partnered closely with the external development agency throughout the build — delivering specifications, supporting handoff, and resolving implementation questions. Component documentation helped reduce back-and-forth during development." },
                { num: "03", title: "Phased Delivery", body: "Because the CMS restructure couldn't run alongside the existing building sites, I proposed a phased rollout. Phase 1 launched the community platform; Phase 2 integrates building pages and floorplan inventory." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Outcome */}
        <section id="outcome" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Outcome">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Phase 1 established the foundation for a unified Zibi platform.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>This project fundamentally changed how Zibi manages its digital ecosystem — shifting from fragmented marketing sites to a unified product experience. Phase 2 transitions the platform from a structural improvement to a measurable business driver.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Platform foundation established", body: "Zibi.ca launched as a unified platform, replacing fragmented structures with a scalable architecture ready to support all current and future residential buildings." },
                { num: "02", title: "Cross-team alignment achieved", body: "Aligned multiple building teams with competing priorities on a single platform strategy, enabling consolidation that was previously blocked by brand-level resistance." },
                { num: "03", title: "Scalable system validated", body: "Designed a system that supports new building integrations without requiring redesign, significantly reducing future design and development effort." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Phase 2 metrics */}
            <div className="mt-9 rounded-[20px] p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f1520 0%, #0a1020 100%)", border: "1px solid rgba(100,160,255,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#4a9eff" }} />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5 text-center" style={{ color: "rgba(100,160,255,0.6)" }}>Phase 2 — What success looks like when building pages go live</p>
                <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto">
                  {[
                    { label: "Campaign attribution", body: "Full-funnel journeys tracked through a single domain" },
                    { label: "Cross-building discovery", body: "Users navigating between community content and residential listings" },
                    { label: "Operational efficiency", body: "Content updated once instead of across three sites" },
                    { label: "Lead generation", body: "Tour bookings and inquiries clearly attributed to community discovery" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="text-[13px] font-semibold text-white mb-1">{m.label}</p>
                      <p className="text-[13px] text-white/40 leading-relaxed">{m.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Reflection */}
        <section id="reflection" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Reflection">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Many design problems are structural, not visual.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>This project began as a request to redesign several websites. The key decision was reframing the problem: improving three separate sites would have left the underlying fragmentation intact.</p>
                  <p>By treating it as a platform architecture challenge, we created a solution that scales with the growth of the Zibi community — reducing operational complexity and creating a foundation for long-term product scalability.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Reframe before you redesign", body: "The biggest leverage point was identifying that the problem wasn't visual — it was structural. Accepting the original brief would have produced a better-looking version of the same broken system." },
                { num: "02", title: "The prototype was the argument", body: "Stakeholder alignment didn't come from a strategy deck — it came from showing the dual-navigation concept. Making the solution tangible moved the conversation from debate to decision." },
                { num: "03", title: "Design for the next building, not just this one", body: "Every architecture decision was evaluated against a simple question: does this scale when the next building launches? That constraint shaped the entire IA and component system." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

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
    <div className="flex flex-col md:grid w-full gap-6 md:gap-0" style={{ gridTemplateColumns: "40% 50%", columnGap: "10%" }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
