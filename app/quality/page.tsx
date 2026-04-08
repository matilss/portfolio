"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "roles", label: "Roles" },
  { id: "problem", label: "Problem" },
  { id: "insight", label: "Key Insight" },
  { id: "decision", label: "Design Decisions" },
  { id: "flow", label: "The Flow" },
  { id: "centerpiece", label: "Centerpiece" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "next", label: "What's Next" },
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
    <div className="flex flex-col md:grid w-full gap-6 md:gap-0" style={{ gridTemplateColumns: "40% 50%", columnGap: "10%" }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export default function Quality() {
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
            src="/images/veeva system/overview/veeva.png"
            alt="Vault QMS"
            className="w-full h-full object-cover object-top"
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
                  Vault QMS
                </h1>
                <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                  An investigation that teaches.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Type", value: "Concept Project" },
                  { label: "Platform", value: "Enterprise SaaS" },
                  { label: "Role", value: "Product Designer" },
                  { label: "Duration", value: "2 Weeks" },
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
                <p>Most Quality Management Systems are built for compliance. They record what happened, satisfy regulators, and close cases — but rarely help investigators learn from past failures.</p>
                <p>This project explores how structured knowledge, captured at closure, could transform every investigation into a reusable asset. Not just documentation, but infrastructure for learning — where each resolved case strengthens the next, and the system grows smarter over time.</p>
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
                  I had zero pharma experience. I gave myself one week to understand the domain well enough to design for it.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Veeva Vault QMS is the quality management backbone for over 175 pharmaceutical and biotech companies — including 6 of the top 20 global pharma manufacturers. It manages deviations, CAPA records, audits, and change control for manufacturing processes that produce life-saving drugs.</p>
                  <p>A CAPA — Corrective and Preventive Action — is the formal process a pharma company runs when something goes wrong in manufacturing. Find the root cause. Fix it. Prevent recurrence. Document everything for the FDA.</p>
                  <p>This is a concept design. I had no prior pharma experience — I researched the domain from scratch, studied the existing Vault QMS interface, and mapped the roles of everyone who touches a CAPA. Then I identified a structural problem that no current QMS solves well.</p>
                </div>
              }
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9">
              {[
                { stat: "175+", label: "pharma companies running CAPA in Vault QMS today" },
                { stat: "6", label: "of the top 20 global pharma companies on Vault QMS" },
                { stat: "7", label: "distinct roles that touch a single CAPA investigation" },
                { stat: "Faster", label: "Potential to reduce investigation time by surfacing verified precedents earlier." },
              ].map((item) => (
                <div key={item.stat} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[clamp(24px,2.5vw,36px)] font-bold text-white tracking-tight leading-none mb-2">{item.stat}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Roles */}
        <section id="roles" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Roles">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Seven roles. One investigation. Almost no feedback loops.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>A single CAPA touches seven distinct roles — each with different goals, different information needs, and different tolerances for system friction. The current QMS treats them as sequential steps in a workflow. The redesign treats them as a network that needs to share context.</p>
                </div>
              }
            />
            <div className="mt-9" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                {
                  initials: "PO",
                  role: "Production Operator",
                  context: "Manufacturing · Mobile, on the floor",
                  accentColor: "#D97706",
                  desc: "First to detect the problem. Reports the deviation on mobile, gloves on, without leaving the line. Files the report and hears nothing back — ever. The feedback loop never closes. This is the most underserved role in the current system.",
                },
                {
                  initials: "PM",
                  role: "Production Manager",
                  context: "Manufacturing · Desktop or phone",
                  accentColor: "#92710A",
                  desc: "Makes the hold or continue decision when a deviation is reported. Today this decision is made verbally — by phone, no audit trail, no timeline estimate. The design gives them a formal 3-option decision card with an audit stamp.",
                },
                {
                  initials: "QE",
                  role: "QA Engineer",
                  context: "Quality Assurance · Desktop",
                  accentColor: "#3B6FE8",
                  desc: "The primary investigator. Opens the CAPA, conducts the 5-Why analysis, confirms the root cause, assembles the action plan, captures the knowledge tags, and submits for approval. Spends the most time in the system — and gains the least from it today.",
                },
                {
                  initials: "QM",
                  role: "QA Manager",
                  context: "Quality Assurance · Desktop",
                  accentColor: "#7C5CBF",
                  desc: "Triages incoming cases, assigns severity and due dates, approves completed CAPAs with e-signature, and monitors team performance across cases. Needs a risk-stratified view — not a flat list of records to read one by one.",
                },
                {
                  initials: "LA",
                  role: "Lab Analyst",
                  context: "Quality Control · LIMS + Vault",
                  accentColor: "#2D7A4F",
                  desc: "Runs confirmatory testing when the QA Engineer's floor assessment isn't enough to confirm root cause. Today results are emailed as PDFs — manually attached to the CAPA record. Version mismatches happen. The redesign links LIMS results directly.",
                },
                {
                  initials: "RA",
                  role: "Regulatory Affairs",
                  context: "Regulatory · Desktop",
                  accentColor: "#C0392B",
                  desc: "Reviews Critical CAPAs for regulatory reporting obligations — FDA Field Alert Reports, adverse event notifications. Needs to see severity classification and a clear timeline. Today they find out about cases late, often after the reporting window has partially elapsed.",
                },
                {
                  initials: "TC",
                  role: "Training Coordinator",
                  context: "Quality / HR · Desktop",
                  accentColor: "#2D7A6A",
                  desc: "When a CAPA results in an SOP update, the Training Coordinator must identify affected staff and assign retraining. Today they find out weeks late — manually. The redesign auto-triggers training assignments when an SOP is updated from a CAPA action.",
                },
              ].map((r) => (
                <div key={r.role} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* Avatar + role */}
                  <div className="flex items-center gap-3 md:w-[40%] flex-shrink-0">
                    <div className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0 text-[12px] font-bold" style={{ background: `${r.accentColor}18`, color: r.accentColor }}>
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-white leading-tight">{r.role}</p>
                      <p className="text-[11px] text-white/30 mt-0.5">{r.context}</p>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-[14px] text-white/50 leading-relaxed md:w-[60%]">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* How they connect */}
            <div className="mt-10">
              <p className="text-[13px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-6">How they connect</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-[16px] p-6" style={{ background: "#181818", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-3">Current system</p>
                  <p className="text-[15px] font-semibold text-white mb-3">Sequential handoffs with no memory</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">Each role receives a record, completes their step, and passes it forward. No role sees the full picture. No feedback returns upstream. When the case closes, no one learns anything except the QA Manager who approved it.</p>
                </div>
                <div className="rounded-[16px] p-6" style={{ background: "#181818", border: "1px solid rgba(152,96,226,0.2)" }}>
                  <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "rgba(152,96,226,0.7)" }}>Redesign</p>
                  <p className="text-[15px] font-semibold text-white mb-3">A network where every closed case teaches all seven roles</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">The Operator gets a plain-language summary of what was found — and why their report mattered. The QA Engineer gets ranked precedents before they start. The Manager sees structured tags instead of free-text paragraphs. The Site Director gets trend data that actually compounds.</p>
                </div>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Problem */}
        <section id="problem" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Problem">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  QMS tools were built to satisfy regulators. Not to build knowledge.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Current Vault QMS captures what happened. It stores records, collects signatures, and satisfies the FDA. But it was never designed to make the people using it smarter over time. Every investigation starts from zero — regardless of how many times the same problem has been solved before.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
              {[
                { num: "01", title: "Knowledge buried in unstructured text", body: "Root causes and resolutions are written as free-text paragraphs. Machines cannot reason from them. Future investigators cannot benefit without manually searching through archives." },
                { num: "02", title: "Every investigation starts from zero", body: "No mechanism exists to surface relevant past investigations before the current one begins. An engineer investigating a weight variance has no way to know the same problem was solved last year — unless they ask the right colleague." },
                { num: "03", title: "The operator who detected it never learns", body: "The production operator who first spotted the problem files a report and hears nothing back. The feedback loop never closes. Reporting quality stays flat. Quality depends on reporting volume but gives reporters no incentive to report well." },
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

        {/* Key Insight */}
        <section id="insight" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Key Insight">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  The records are all there. The problem is they can't talk to each other — or to the next investigation.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">If every closed CAPA captured five structured pieces of knowledge — failure mode, confirmation method, resolution, leading indicator, and an operator-facing summary — the system would get smarter with every investigation. After 50 cases, the AI surfaces reliable patterns. After 200, it predicts conditions before they become deviations. Each investigation makes the next one faster. The knowledge flywheel turns.</p>
              }
            />
            <div className="mt-9 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(152,96,226,0.3)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-30" style={{ background: "#9860E2" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "#9860E2" }}>Key Insight</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  If every closed CAPA captured five structured pieces of knowledge, the system could surface patterns, suggest confirmation paths, and accelerate future investigations.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Design Decisions */}
        <section id="decision" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Design Decisions">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Every decision has a reason. Every pixel has a why.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">Five decisions that each address a specific failure of the current system — not just a visual preference.</p>
              }
            />
            <div className="mt-9 space-y-6">
              {[
                {
                  num: "01",
                  title: "Organise by quality event, not by object type",
                  body: ["Current Vault QMS groups records by type — CAPAs, Deviations, and Lab Investigations live separately. But engineers think in events: \"What happened to batch B-2024-0921?\"", "The redesign organises by batch. Each case unifies deviation, assessment, lab, CAPA, and change control into a single timeline — showing the full journey in one place."],
                  image: "/images/veeva system/design decision/process timeline.png",
                },
                {
                  num: "02",
                  title: "AI surfaces context before investigation starts — not during",
                  body: ["When a deviation is filed, the system queries the knowledge base using product, line, equipment, and issue tags. Before the QA Engineer opens the CAPA, three ranked historical cases are already available — showing confirmed causes, verification paths, and expected confirmation time.", "Suggestions remain clearly labelled as AI-generated and require human confirmation before entering the audit record."],
                  image: "/images/veeva system/design decision/historical cases.png",
                },
                {
                  num: "03",
                  title: "5-Why questions are dynamic, not pre-written",
                  body: ["Each 5-Why question builds from the previous answer, adapting to the investigation path. Questions remain editable, allowing engineers to refine wording when needed.", "The fifth Why stays empty with guiding prompts — organisational root causes are context-specific and cannot be pre-filled. The audit trail records whether each question was AI-generated or manually edited."],
                  image: "/images/veeva system/design decision/5-why.png",
                },
                {
                  num: "04",
                  title: "Root cause is a directly editable textarea — one confirm button",
                  body: ["An earlier design required multiple actions — Accept, Edit, or Dismiss — adding cognitive load before reading the result.", "The redesign uses a directly editable textarea. Engineers read, edit if needed, and confirm once. Any edits are recorded automatically, satisfying audit requirements without adding extra steps."],
                  image: "/images/veeva system/design decision/AI pre-filled.png",
                },
                {
                  num: "05",
                  title: "Five structured tags are the gate to closure",
                  body: ["Before submission, five structured tags must be confirmed: Failure Mode, Confirmation Method, Resolution, Leading Indicator, and Operator Summary.", "AI pre-fills the first four from investigation data. The operator summary must be written by the engineer and addressed to the original reporter.", "The case cannot close until all five are complete — turning compliance records into reusable knowledge."],
                  image: "/images/veeva system/design decision/5 tags.png",
                },
              ].map((c) => (
                <div key={c.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.num}</p>
                  <p className="text-[16px] font-semibold text-white mb-3">{c.title}</p>
                  <div className="space-y-3">
                    {c.body.map((para, i) => (
                      <p key={i} className="text-[14px] text-white/50 leading-relaxed">{para}</p>
                    ))}
                  </div>
                  {"image" in c && c.image && (
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-[70%] mt-6 object-contain mx-auto block"
                      style={{ borderRadius: 0 }}
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                    />
                  )}
                </div>
              ))}
              {/* Video at the end */}
              <div className="rounded-[16px] overflow-hidden" style={{ background: "#181818" }}>
                <video
                  src="/images/veeva system/design decision/veeva.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </div>
            </div>
          </SectionCard>
        </section>

        {/* The Flow */}
        <section id="flow" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="The Flow">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Four chapters. One connected story.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">To test the design, I followed a single quality event from detection to learning — showing how each role contributes at the moment they naturally interact with the system.</p>
              }
            />
            <div className="mt-9 flex flex-col gap-4">
              {[
                {
                  chapter: "Chapter 01",
                  title: "Detection",
                  hook: "The operator sees something wrong.",
                  body: "A production operator files a deviation report directly from the floor. The form captures structured inputs — product, batch, line, and observation — with no free-text narrative. The event is instantly tagged and routed to the right QA Engineer.",
                },
                {
                  chapter: "Chapter 02",
                  title: "Investigation",
                  hook: "The engineer doesn't start from zero.",
                  body: "Before opening the CAPA, the system surfaces similar past cases — matched by product, line, and issue type. Each shows confirmed root causes and verification methods. The engineer reviews precedents, runs the 5-Why with AI prompts, and confirms or edits the proposed root cause.",
                },
                {
                  chapter: "Chapter 03",
                  title: "Closure",
                  hook: "Five tags. One submit button. The knowledge enters the system.",
                  body: "Before submission, five structured tags must be confirmed: Failure Mode, Confirmation Method, Resolution, Leading Indicator, and Operator Summary. The first four are AI-suggested and engineer-verified. The case cannot close until all five are complete.",
                },
                {
                  chapter: "Chapter 04",
                  title: "Learning",
                  hook: "The flywheel turns.",
                  body: "The closed case enters the knowledge base as structured tags. Operators receive a plain-language summary explaining what was found and fixed. Dashboards update with trends, helping teams detect patterns earlier. Each resolved case makes the next investigation faster.",
                },
              ].map((c) => (
                <div key={c.chapter} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.chapter}</p>
                  <p className="text-[18px] font-bold text-white mb-1">{c.title}</p>
                  <p className="text-[14px] font-medium mb-3" style={{ color: "#9860E2" }}>{c.hook}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Centerpiece Feature */}
        <section id="centerpiece" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Centerpiece Feature">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Knowledge tags — captured here, learned forever.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">Most CAPA systems store knowledge as free text. Valuable lessons exist, but remain buried inside individual records. The turning point in this design was recognizing that closure is the only moment when knowledge is complete — and reusable.</p>
              }
            />

            {/* Sub-section: Capture Knowledge */}
            <div className="mt-10 space-y-6">
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-4">Capture Knowledge</p>
                <p className="text-[18px] font-bold text-white mb-3">The five tags</p>
                <p className="text-[14px] text-white/50 leading-relaxed mb-6">Every closed investigation must confirm five structured pieces of information before the record closes. These five tags become the queryable atoms of institutional knowledge.</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    { num: "01", tag: "Failure Mode", desc: "The specific mechanism of failure — not just the symptom." },
                    { num: "02", tag: "Confirmation Method", desc: "How the root cause was confirmed — test type, result, time taken." },
                    { num: "03", tag: "Resolution", desc: "What was changed to fix and prevent recurrence." },
                    { num: "04", tag: "Leading Indicator", desc: "The early warning signal that could catch this next time." },
                    { num: "05", tag: "Operator Summary", desc: "Plain language for the operator who first reported — by name." },
                  ].map((t) => (
                    <div key={t.num} className="rounded-[12px] p-4" style={{ background: "rgba(152,96,226,0.08)", border: "1px solid rgba(152,96,226,0.2)" }}>
                      <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(152,96,226,0.6)" }}>{t.num}</p>
                      <p className="text-[13px] font-semibold text-white mb-2">{t.tag}</p>
                      <p className="text-[12px] text-white/40 leading-relaxed">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-section: Why This Matters */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-4">Why This Matters</p>
                <div className="flex flex-col md:grid gap-6 md:gap-0" style={{ gridTemplateColumns: "45% 45%", columnGap: "10%" }}>
                  <div>
                    <p className="text-[18px] font-bold text-white mb-3">The difference between a record and knowledge</p>
                    <p className="text-[14px] text-white/50 leading-relaxed">A compliance record answers: "What did we do?" A knowledge entry answers: "What should we try next time?" The five tags are the minimum viable structure to make the latter possible. Without them, the AI has no atoms to reason from. With them, every closed case becomes a query-able precedent.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { q: "Why not free text?", a: "Language models can summarize free text — but structured tags enable exact matching, trend analysis, and reliable AI suggestion ranking. Unstructured knowledge doesn't compound." },
                      { q: "Why five specifically?", a: "Five tags capture the minimum useful information without adding enough friction to compromise adoption. Fewer and the AI suggestions are unreliable. More and engineers skip them." },
                      { q: "Why is Tag 5 uneditable by AI?", a: "The operator summary must be written by a human, for a specific human. It closes the feedback loop that motivates better reporting. Automation would undermine its purpose." },
                    ].map((item) => (
                      <div key={item.q} className="rounded-[12px] p-4" style={{ background: "#202020" }}>
                        <p className="text-[13px] font-semibold text-white mb-1">{item.q}</p>
                        <p className="text-[13px] text-white/40 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-section: Knowledge Flywheel */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-4">Knowledge Flywheel</p>
                <p className="text-[18px] font-bold text-white mb-3">The system gets smarter with every closed case</p>
                <p className="text-[14px] text-white/50 leading-relaxed">As more investigations close with structured tags, the system becomes progressively more useful. Early on, it begins surfacing relevant historical cases, reducing the need to start from scratch. Over time, patterns emerge that help teams recognize early warning signals and prevent recurring failures. When scaled across multiple sites, knowledge no longer stays local — it compounds into shared institutional intelligence.</p>
              </div>

              {/* Sub-section: Before vs. After */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-4">Before vs. After</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-[12px] p-5" style={{ background: "#202020" }}>
                    <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/30 mb-4">Current Vault QMS</p>
                    <div className="space-y-3">
                      {[
                        "Investigation closes as a free-text PDF attachment",
                        "No structured root cause — just narrative paragraphs",
                        "AI has no atoms to reason from — can't surface precedents",
                        "Operator who reported gets no feedback",
                        "Same investigation runs again 8 months later",
                        "Knowledge exists only in people — and leaves when they do",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          </div>
                          <p className="text-[13px] text-white/40 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[12px] p-5" style={{ background: "#202020", border: "1px solid rgba(152,96,226,0.15)" }}>
                    <p className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: "rgba(152,96,226,0.7)" }}>Redesigned system</p>
                    <div className="space-y-3">
                      {[
                        "Investigation closes as five confirmed structured tags",
                        "Root cause stored as a machine-queryable failure mode",
                        "AI surfaces 3 ranked precedents before the next investigation starts",
                        "Operator receives plain-language summary with their name",
                        "Next similar deviation resolved 50–70% faster",
                        "Knowledge lives in the system — not in people's heads",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "rgba(152,96,226,0.15)" }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#9860E2" }} />
                          </div>
                          <p className="text-[13px] text-white/60 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Tradeoffs */}
        <section id="tradeoffs" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Tradeoffs">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Every constraint forced a real choice.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">Designing for a regulated industry means compliance and usability pull in opposite directions. These are the three I made explicitly.</p>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  title: "Mandatory tags vs. engineer autonomy",
                  body: "Five tags are required before the case can close — no workaround. This creates friction for engineers who just want to submit. But the knowledge flywheel only works if every closure is structured. One untagged investigation creates a gap. Optionality would compromise the system gradually, then suddenly.",
                },
                {
                  num: "02",
                  title: "AI suggests vs. AI decides",
                  body: "The AI could pre-fill the root cause and auto-confirm tags — saving time. But in a regulated environment every documented conclusion requires a named human to own it. AI suggestions are visually distinct, require explicit confirmation, and record who confirmed them. Speed was traded for auditability.",
                },
                {
                  num: "03",
                  title: "Event-based navigation vs. familiar object-type navigation",
                  body: "Organising by batch case is more intuitive for investigators — but QA Engineers trained on current Vault QMS know where to find \"all CAPAs\" in a flat list. Changing that mental model is a real adoption cost. The new model has to be obviously better within the first session, or it won't stick.",
                },
              ].map((t) => (
                <div key={t.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{t.num}</p>
                  <p className="text-[15px] font-semibold text-white mb-3">{t.title}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{t.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* What's Next */}
        <section id="next" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="What's Next">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Three screens still to design.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">This case study covers Chapter 2 in depth. These are the screens that complete the story.</p>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  chapter: "Chapter 1",
                  title: "Mobile floor report",
                  body: "The operator's mobile experience — scan batch barcode, photograph the defect, tap issue type, submit in 60 seconds without leaving the line. This is where the first structured tags enter the system.",
                },
                {
                  chapter: "Chapter 3",
                  title: "QA Manager approval view",
                  body: "Risk-stratified queue showing cases by severity and SLA status. AI-generated root cause quality score. Three-click approval for strong investigations. Inline send-back for weak ones.",
                },
                {
                  chapter: "Chapter 4",
                  title: "Operator feedback card",
                  body: "The plain-language notification sent to J. Rodriguez when the case closes. What you reported → what caused it → what was fixed → what to tell QA next time. Thirty seconds to read. The loop closes.",
                },
              ].map((c) => (
                <div key={c.chapter} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "#9860E2" }}>{c.chapter}</p>
                  <p className="text-[15px] font-semibold text-white mb-3">{c.title}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
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
                  What this project taught me.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">Naming the gaps isn't weakness — it's how senior designers think about unfinished work.</p>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  title: "Five is a hypothesis, not a conclusion",
                  body: "Five tags is the minimum I believe would make the AI useful without adding enough friction to compromise adoption. Fewer and the pattern matching is unreliable. More and engineers skip the step. The right number should be validated with real engineers — it may be four, it may be six.",
                },
                {
                  num: "02",
                  title: "Enterprise design is systems design",
                  body: "Early on I focused on the QA Engineer's screen. Mapping all seven roles showed that the real problem was how work moves across people — not how any single screen works. The investigation screen only matters because the operator, the lab, the manager, and the training coordinator are all connected to it.",
                },
              ].map((r) => (
                <div key={r.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{r.num}</p>
                  <p className="text-[15px] font-semibold text-white mb-3">{r.title}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

      </div>
    </div>
  );
}
