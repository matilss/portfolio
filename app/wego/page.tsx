"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "constraint", label: "Constraint" },
  { id: "research", label: "Research" },
  { id: "decision", label: "Decision" },
  { id: "scope", label: "Scope" },
  { id: "final-product", label: "Final Product" },
  { id: "reflection", label: "Reflection" },
];

export default function WeGo() {
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
      <div className="fixed top-16 z-50" style={{ left: "12vw" }}>
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
      <div className="w-full px-[12vw] pt-32 pb-0">
        <div className="w-full relative overflow-hidden rounded-t-[24px]" style={{ aspectRatio: "16/10.37", background: "#0a0a0a" }}>
          <img
            src="/images/homepage/wego.png"
            alt="WeGo"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #000 100%)" }} />
        </div>
      </div>

      {/* Main content */}
      <div className="px-[12vw] pb-32">

        {/* Title block + Overview */}
        <section id="overview" className="pt-4 pb-16 scroll-mt-20">
          <div className="grid grid-cols-1 w-full" style={{ gridTemplateColumns: "40% 50%", gap: "0 10%" }}>

            {/* Left: title + meta */}
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h1 className="text-[clamp(48px,6vw,80px)] font-bold tracking-[-0.03em] leading-none mb-4">
                  WeGo
                </h1>
                <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                  A group trip planning app that treats the trip as a shared object.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Project", value: "UX Scene Designathon 2022" },
                  { label: "Result", value: "Best in Design · 38 teams" },
                  { label: "Timeline", value: "48 hours" },
                  { label: "Domain", value: "Mobile · Travel" },
                  { label: "Role", value: "Lead UX Designer · Lead UI Designer · Researcher" },
                  { label: "Team", value: "Matilda Luo, Laura Pedraza, Sandy Zhang" },
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
              <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                <p>WeGo is a mobile app for group travel planning. It replaces scattered tools like WhatsApp, Google Docs, Splitwise, and Google Maps with a single shared trip object — one place where the group makes decisions together, tracks expenses in real time, and stays aligned from planning to post-trip.</p>
                <p>Most teams at the designathon focused on designing a single feature. The real problem wasn't a missing feature — it was that no existing tool treated the trip as something the group owned together. Solving that required designing a system.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Context */}
        <section id="context" className="py-20 scroll-mt-20">
          <SectionCard label="Context">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  38 teams. Same brief. Most designed a feature. I designed a system.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>UX Scene Designathon gave every team the same challenge: design a complete solution in 48 hours.</p>
                  <p>The biggest risk wasn't lack of ideas — it was losing time to unfocused research, endless ideation, or slow handoffs between wireframes and visual design. Before research began, I structured the sprint into four phases with clear outputs and exit criteria. This kept the team aligned and prevented drift when the pressure was highest.</p>
                </div>
              }
            />
            <div className="mt-8 rounded-[20px] overflow-hidden">
              <img
                src="/images/WeGo/context/Sprint Timeline.png"
                alt="Sprint timeline"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>
          </SectionCard>
        </section>

        {/* Constraint */}
        <section id="constraint" className="py-20 scroll-mt-20">
          <SectionCard label="Constraint">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  We lost a team member before research even started. That shaped everything.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>Four hours in, one of our four team members dropped out. We went from four designers to three with 44 hours left.</p>
                  <p>My immediate decision was to re-scope the product, not redistribute the same workload. We held a 15-minute alignment session to define what was essential, what was optional, and what had to go entirely.</p>
                  <p>Those boundaries shaped every decision that followed — the research we ran, the features we built, and the cuts we made.</p>
                </div>
              }
            />
            {/* Key insight banner */}
            <div className="mt-9 rounded-[20px] p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(255,140,50,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#ff8c32" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(255,140,50,0.6)" }}>Key Insight</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Constraint didn't limit the product. It focused it.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Research */}
        <section id="research" className="py-20 scroll-mt-20">
          <SectionCard label="Research">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Users weren't missing tools. They were missing a shared source of truth.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>We ran five interviews with experienced group travelers and conducted a competitive audit of TripIt, Wanderlog, and Splitwise. Given the 48-hour constraint, I prioritized depth over breadth.</p>
                  <p>Four patterns emerged:</p>
                  <ul className="space-y-1">
                    {["planning was fragmented across 3–5 apps", "decision-making created the most friction", "expense anxiety existed throughout the trip, not just at settlement", "no tool treated the trip as a shared object owned by the group"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/55">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>Affinity mapping surfaced three design priorities:</p>
                  <ol className="space-y-1 list-none">
                    {["real-time visibility into group decisions", "low-friction input from every member", "continuously visible financial data"].map((item, i) => (
                      <li key={item} className="flex items-start gap-2 text-white/55">
                        <span className="text-white/30 flex-shrink-0">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                  <p>These priorities guided every major design decision that followed.</p>
                </div>
              }
            />

            {/* Affinity map */}
            <div className="mt-8 rounded-[20px] overflow-hidden" style={{ maxWidth: "80%", margin: "32px auto 0" }}>
              <img
                src="/images/WeGo/research/affirnity map.jpg"
                alt="Affinity map"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            {/* Second sub-section */}
            <div className="mt-12">
              <TwoCol
                left={
                  <h2 className="text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-tight">
                    No single tool treats the trip as a shared object.
                  </h2>
                }
                right={
                  <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                    <p>Trip planning is scattered across WhatsApp, Google Docs, Splitwise, and Google Maps. None share state. Each tool solves a piece of the problem but none support the trip as a shared object.</p>
                    <p>Thus:</p>
                    <ul className="space-y-1">
                      {["coordination falls to the most organized person", "decisions happen by default rather than by choice", "expenses create anxiety because totals are invisible"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/55">
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>The group loses momentum every time someone switches apps to find basic information.</p>
                  </div>
                }
              />
            </div>

            {/* Apps image */}
            <div className="mt-8 rounded-[20px] overflow-hidden" style={{ maxWidth: "80%", margin: "32px auto 0" }}>
              <img
                src="/images/WeGo/research/apps.png"
                alt="Fragmented travel apps"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>

            {/* Key insight banner */}
            <div className="mt-9 rounded-[20px] p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(255,140,50,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#ff8c32" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(255,140,50,0.6)" }}>How Might We</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Design a single, coherent experience that helps a group make decision together, stay aligned throughout a trip, and reduce the cognitive overhead of coordination at every stage?
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Decision */}
        <section id="decision" className="py-20 scroll-mt-20">
          <SectionCard label="Decision">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  The interesting problems were structural, not visual.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>Three system-level challenges shaped every major design decision in the product.</p>
                </div>
              }
            />
            <div className="mt-6 rounded-[20px] overflow-hidden">
              <img
                src="/images/WeGo/decision/three system-level.png"
                alt="Three system-level design challenges"
                className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>
          </SectionCard>
        </section>

        {/* Scope */}
        <section id="scope" className="py-20 scroll-mt-20">
          <SectionCard label="Scope">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  What we cut made the product stronger.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>Three features were intentionally removed — not because of time, but because including them would have changed the product.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "In-app Text Chat", body: "The problem wasn't missing chat — it was the absence of a shared source of truth beside it. Adding another message thread would only increase fragmentation. Audio chat was kept because it enables conversation without creating persistent threads." },
                { num: "02", title: "Map Exploration", body: "Users didn't struggle to find options. They struggled to decide together. Discovery wasn't the bottleneck — decision-making was." },
                { num: "03", title: "Social Trip Sharing", body: "This would shift WeGo from a coordination tool to a social platform — requiring a fundamentally different product to build and maintain." },
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

        {/* Final Product */}
        <section id="final-product" className="py-20 scroll-mt-20">
          <SectionCard label="Final Product">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Four features. One product. No context switching.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>WeGo organizes planning, decisions, spending, and memories around a single shared trip object. The challenge wasn't designing each feature individually — it was making them feel like parts of the same system.</p>
                  <p>The judges later cited the coherence of this multi-feature experience — a direct result of the structural decisions made in the first hour.</p>
                </div>
              }
            />
            <div className="grid grid-cols-3 gap-6 mt-6" style={{ maxWidth: "59.5%", margin: "24px auto 0" }}>
              {[
                { num: "01", title: "Overview", body: "The trip overview acts as the group's shared control panel. Members, destination, dates, accommodation, and transportation live in one place, so every traveler sees the same plan.", video: "/images/WeGo/final product /overview.mp4" },
                { num: "02", title: "Audio Chat", body: "Audio chat lets the group discuss options without leaving the planning space. The call lives inside the trip and ends cleanly once the decision is made — no persistent threads to scroll through.", video: "/images/WeGo/final product /audio chat.mp4" },
                { num: "03", title: "Itinerary", body: "Activities are organized by day using a date-tab layout. Each entry links to navigation and details, making the plan easy to scan — which day, which activity, how to get there.", video: "/images/WeGo/final product /itinerary.mp4" },
                { num: "04", title: "Poll", body: "Polls allow any member to propose options and the group to vote in real time. Once a decision is made, the result flows directly into the itinerary.", video: "/images/WeGo/final product /poll.mp4" },
                { num: "05", title: "Bills", body: "Expenses are recorded as they happen — who paid and how the cost is split. The running balance stays visible throughout the trip, so there are no surprises at settlement.", video: "/images/WeGo/final product /bills.mp4" },
                { num: "06", title: "Photos", body: "Photos live inside the same trip space used for planning, keeping memories tied to the shared trip rather than scattered across messaging apps.", video: "/images/WeGo/final product /photos.mp4" },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] overflow-hidden" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <video
                    src={c.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                    <h3 className="text-[14px] font-semibold text-white mt-2 mb-1 leading-snug">{c.title}</h3>
                    <p className="text-[13px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Reflection */}
        <section id="reflection" className="py-20 scroll-mt-20">
          <SectionCard label="Reflection">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  What the judges saw was a direct output of every decision above.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/55 leading-relaxed">
                  <p>WeGo won Best in Design out of 38 teams. Judges highlighted the coherence of the multi-feature experience, information hierarchy, and visual polish. Those outcomes weren't accidental — they were the result of early framing decisions and disciplined scope management.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-6">
              {[
                { num: "01", title: "Time structure is a design decision", body: "Mapping the 48-hour sprint into four phases with clear exit conditions kept the team focused under pressure. Structure isn't overhead — it's what makes speed possible." },
                { num: "02", title: "Scope discipline is a leadership skill", body: "Re-scoping the product instead of redistributing work kept the experience coherent. Knowing what to remove is often more important than knowing what to add." },
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

function SectionCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[24px] pt-16 px-10 pb-10" style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }}>
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
    <div className="grid grid-cols-1 w-full" style={{ gridTemplateColumns: "40% 50%", gap: "0 10%" }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
