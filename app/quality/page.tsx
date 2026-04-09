"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "roles", label: "Roles" },
  { id: "problem", label: "Problem" },
  { id: "insight", label: "Key Insight" },
  { id: "decision", label: "Design Decision" },
  { id: "flow", label: "Lifecycle" },
  { id: "centerpiece", label: "Tagging" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "next", label: "Full Lifecycle" },
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
                  <p>Veeva Vault QMS supports the workflows that ensure manufacturing quality, traceability, and regulatory compliance. At the center of this system is CAPA — the structured process used to investigate failures, confirm root causes, and prevent recurrence.</p>
                  <p>Since I had no prior experience in pharma, I started by studying how investigations actually move through the system — from the operator reporting an issue to the engineers and managers responsible for resolving it. Mapping this lifecycle revealed how many roles contribute to a single CAPA, and how knowledge moves — or fails to move — across them.</p>
                  <p>That process mapping led me to a structural question: if every investigation produces valuable knowledge, why does each new investigation still start from zero?</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
              {[
                { stat: "175+", label: "pharma companies running CAPA in Vault QMS today" },
                { stat: "6", label: "of the top 20 global pharma companies on Vault QMS" },
                { stat: "7", label: "distinct roles that touch a single CAPA investigation" },
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
                  <p>A single CAPA investigation involves seven roles, each responsible for a different part of the process. Work moves from one role to another — across shifts, departments, and sometimes locations.</p>
                  <p>To understand how investigations actually unfold, I mapped what each role does today, focusing on how work moves in practice rather than how the workflow is documented.</p>
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
                  desc: "First to detect the problem on the manufacturing line. Reports the deviation, often using a mobile device while continuing production work. Once the report is filed, their involvement usually ends.",
                },
                {
                  initials: "PM",
                  role: "Production Manager",
                  context: "Manufacturing · Desktop or phone",
                  accentColor: "#92710A",
                  desc: "Decides whether production should continue or be paused after a deviation is reported. Communicates decisions to the team and coordinates with quality personnel.",
                },
                {
                  initials: "QE",
                  role: "QA Engineer",
                  context: "Quality Assurance · Desktop",
                  accentColor: "#3B6FE8",
                  desc: "Leads the investigation. Reviews the deviation, performs root cause analysis, documents findings, and prepares corrective and preventive actions.",
                },
                {
                  initials: "QM",
                  role: "QA Manager",
                  context: "Quality Assurance · Desktop",
                  accentColor: "#7C5CBF",
                  desc: "Reviews incoming investigations, assigns priority and deadlines, approves completed CAPAs, and monitors progress across multiple cases.",
                },
                {
                  initials: "LA",
                  role: "Lab Analyst",
                  context: "Quality Control · LIMS + Vault",
                  accentColor: "#2D7A4F",
                  desc: "Performs laboratory testing to confirm suspected root causes when additional evidence is required. Test results are documented and attached to the investigation.",
                },
                {
                  initials: "RA",
                  role: "Regulatory Affairs",
                  context: "Regulatory · Desktop",
                  accentColor: "#C0392B",
                  desc: "Reviews high-risk CAPAs to ensure regulatory reporting requirements are met. Tracks timelines and ensures required documentation is complete.",
                },
                {
                  initials: "TC",
                  role: "Training Coordinator",
                  context: "Quality / HR · Desktop",
                  accentColor: "#2D7A6A",
                  desc: "Updates training records when procedures change as a result of a CAPA. Ensures affected staff are retrained on updated processes.",
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
                  <p>Current QMS tools are designed to document what happened — capturing records, collecting signatures, and meeting regulatory requirements. But across investigations, knowledge remains difficult to reuse. Similar problems are often solved multiple times, even when prior cases exist.</p>
                  <p>Repeated investigations delay production, increase downtime, and create compliance risk. When knowledge remains buried in narrative text, teams spend time rediscovering solutions instead of preventing failures.</p>
                  <p>As a result, investigations often begin as isolated efforts — dependent on personal memory rather than shared knowledge — even in systems that store years of historical data.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-9">
              {[
                { num: "01", title: "Knowledge buried in unstructured text", body: "Root causes and resolutions are documented as long-form text fields. Similar past investigations exist, but locating them depends on manual search and personal memory rather than structured retrieval." },
                { num: "02", title: "Every investigation starts from zero", body: "Each investigation begins as an independent case. Investigators rely on prior experience or colleague input to recognize patterns from earlier incidents, rather than seeing related cases surfaced automatically." },
                { num: "03", title: "The operator who detected it never learns", body: "Operators who report deviations submit the initial record, but follow-up outcomes are often handled by downstream roles. Visibility into final resolution varies, leaving limited feedback to the original reporter." },
              ].map((c) => (
                <div key={c.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.num}</p>
                  <p className="text-[15px] font-semibold text-white mb-2">{c.title}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
            <img src="/images/veeva system/problem/veeva QMS.png" alt="Veeva QMS" className="w-full mt-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
          </SectionCard>
        </section>

        {/* Key Insight */}
        <section id="insight" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Key Insight">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  The records exist. The learning does not.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Across investigations, the same types of failures recur — but the way they are documented makes them difficult to compare.</p>
                  <p>Most CAPA records store conclusions as narrative text, which captures compliance but limits reuse. Without consistent structure, patterns remain hidden across cases, even when similar problems have already been solved.</p>
                  <p>Operators are not expected to understand the full investigation. Instead, they receive short, plain-language summaries that explain what changed and how it affects their daily work.</p>
                </div>
              }
            />
            <div className="mt-9 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(152,96,226,0.3)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-30" style={{ background: "#9860E2" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "#9860E2" }}>Key Insight</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  If every closed CAPA captured the same core elements, investigations could be compared — not just recorded. Patterns would become visible across cases, instead of remaining buried inside individual reports.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
              <img src="/images/veeva system/key insight/workflow.png" alt="Workflow" className="w-full md:w-[40%] flex-shrink-0 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
              <p className="text-[16px] text-white/60 leading-relaxed md:w-[40%] md:text-left">This model does not expand operator responsibilities — it improves clarity. Operators are not involved in root cause analysis, but they do benefit from understanding what changed after a case closes. Instead of generic retraining, they receive short summaries that connect real incidents to updated procedures, reinforcing correct behavior without adding cognitive burden.</p>
            </div>
          </SectionCard>
        </section>

        {/* Design Decisions */}
        <section id="decision" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Design Decision">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Every decision has a reason. Every pixel has a why.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">Five decisions shaped by how investigations actually unfold — not by visual preference alone. Each reflects a constraint observed in real CAPA workflows.</p>
              }
            />
            <div className="mt-9 space-y-6">
              {[
                {
                  num: "01",
                  title: "Organise by quality event, not by object type",
                  body: ["Current QMS records are organised by document type — CAPA, Deviation, Lab — each living in separate spaces. But investigations unfold as a sequence of events.", "Cases are organised around a single quality event. Deviation, assessment, lab testing, CAPA actions, change control, and training appear in one shared timeline — showing the full journey in context."],
                  image: "/images/veeva system/design decision/process timeline.png",
                  imageWidth: "56%",
                },
                {
                  num: "02",
                  title: "AI surfaces context before investigation starts — not during",
                  body: ["When a deviation is reported, the system searches historical cases using product, line, equipment, and symptom tags. Before the QA Engineer opens the CAPA, relevant past investigations are already visible.", "Each suggestion includes confirmed causes, verification methods, and expected investigation paths. Suggestions remain clearly labelled as AI-generated and require human confirmation before entering the audit record."],
                  image: "/images/veeva system/design decision/historical cases.png",
                },
                {
                  num: "03",
                  title: "5-Why questions are dynamic, not pre-written",
                  body: ["Each Why builds from the previous answer, adapting to the investigation path rather than following a fixed template. Engineers can edit wording at any step.", "The fifth Why remains open-ended — organisational causes depend on local process decisions. The system records whether each entry was suggested or manually written, preserving traceability."],
                  image: "/images/veeva system/design decision/5-why.png",
                },
                {
                  num: "04",
                  title: "Root cause is a directly editable textarea — one confirm button",
                  body: ["Root cause suggestions appear directly inside an editable field. Engineers review the suggestion, adjust wording if needed, and confirm once.", "All edits are automatically recorded in the audit trail, preserving traceability without introducing extra steps."],
                  image: "/images/veeva system/design decision/AI pre-filled.png",
                },
                {
                  num: "05",
                  title: "Five structured tags are the gate to closure",
                  body: ["Before closure, five structured knowledge fields must be confirmed: Failure Mode, Confirmation Method, Resolution, Leading Indicator, and Operator Summary.", "The first four are suggested from investigation data. The final summary is written in plain language for the original reporter. A case cannot close until all five are complete — turning each investigation into reusable knowledge."],
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
                      className="mt-8 object-contain mx-auto block"
                      style={{ width: "imageWidth" in c && c.imageWidth ? c.imageWidth : "84%" }}
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                    />
                  )}
                </div>
              ))}
              {/* Video at the end */}
              <video src="/images/veeva system/design decision/veeva system 2.mp4" autoPlay loop muted playsInline className="w-full rounded-[16px]" />
            </div>
          </SectionCard>
        </section>

        {/* Lifecycle */}
        <section id="flow" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Lifecycle">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Four stages. One connected story.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">To test the design, I followed a single quality event from detection to learning — showing how each role contributes at the moment they naturally interact with the case.</p>
              }
            />
            <div className="mt-9 flex flex-col gap-4">
              {[
                {
                  stage: "Stage 01",
                  title: "Detection",
                  hook: "The operator sees something wrong.",
                  body: "A production operator notices an issue on the line and files a deviation directly from the floor. The form captures structured details — product, batch, line, and observation — so the event can be routed immediately to the right investigator.",
                },
                {
                  stage: "Stage 02",
                  title: "Investigation",
                  hook: "The engineer doesn't start from zero.",
                  body: "Before opening the CAPA, the system surfaces similar past cases matched by product, line, and issue type. Each shows confirmed causes and verification methods. The QA engineer reviews precedents, runs the 5-Why analysis, and confirms or refines the root cause.",
                },
                {
                  stage: "Stage 03",
                  title: "Closure",
                  hook: "Five tags. One submission. The investigation becomes knowledge.",
                  body: "Before closing the case, five structured fields must be confirmed: Failure Mode, Confirmation Method, Resolution, Leading Indicator, and Operator Summary. The case cannot close until all five are complete — turning the investigation into reusable knowledge.",
                },
                {
                  stage: "Stage 04",
                  title: "Learning",
                  hook: "The next investigation starts smarter.",
                  body: "The closed case enters the knowledge base as structured tags. Operators receive a plain-language summary explaining what was found and what changed. Dashboards update with emerging trends. Each resolved case makes the next investigation faster and more informed.",
                },
              ].map((c) => (
                <div key={c.stage} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{c.stage}</p>
                  <p className="text-[18px] font-bold text-white mb-1">{c.title}</p>
                  <p className="text-[14px] font-medium mb-3" style={{ color: "#9860E2" }}>{c.hook}</p>
                  <p className="text-[14px] text-white/50 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Tagging */}
        <section id="centerpiece" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Tagging">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Structured information — captured early, confirmed at closure.
                </h2>
              }
              right={
                <div className="space-y-3 text-[16px] text-white/70 leading-relaxed">
                  <p>Most CAPA systems store investigations as long documents. The details are there, but they are buried inside paragraphs that are difficult to search, compare, or reuse.</p>
                  <p>In this system, information is structured as tags from the very beginning — not just at closure.</p>
                  <p>Some tags appear immediately when a case is created — product, batch, line, equipment, and severity. These early tags define where the issue happened.</p>
                  <p>As the investigation progresses, additional tags are confirmed — what failed, how it was verified, and what actions were taken. These later tags define what was learned.</p>
                  <p>Together, these tags turn individual investigations into structured data that improves future investigations.</p>
                </div>
              }
            />

            <div className="mt-10 space-y-6">

              {/* Sub-section 1: Two types of tags */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-2">Two types of tags</p>
                <p className="text-[14px] text-white/50 leading-relaxed mb-6">Not all tags serve the same purpose. This system separates context tags from knowledge tags.</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      title: "Context tags",
                      hook: "Captured at case creation",
                      body: "These tags describe the environment of the issue — product, batch, line, equipment, and severity. They allow the system to immediately group similar cases and surface relevant historical patterns. Without context tags, each investigation starts without direction.",
                      image: "/images/veeva system/tagging/context tags.png",
                    },
                    {
                      title: "Knowledge tags",
                      hook: "Confirmed at closure",
                      body: "These tags capture the results of the investigation — the confirmed failure mode, how the cause was proven, what was fixed, and what signals should be monitored next time. This is the moment when observations become reusable knowledge.",
                    },
                  ].map((c) => (
                    <div key={c.title} className="rounded-[12px] p-5" style={{ background: "#202020" }}>
                      <p className="text-[14px] font-semibold text-white mb-1">{c.title}</p>
                      <p className="text-[12px] font-medium mb-3" style={{ color: "#9860E2" }}>{c.hook}</p>
                      <p className="text-[13px] text-white/50 leading-relaxed">{c.body}</p>
                      {"image" in c && c.image && (
                        <img src={c.image} alt={c.title} className="w-[90%] mt-8 object-contain mx-auto block" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-section 2: The five knowledge tags */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-2">The five knowledge tags</p>
                <p className="text-[14px] text-white/50 leading-relaxed mb-6">Each closed case produces five structured knowledge tags. Together, they form a reusable reference for future investigations.</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {[
                    { num: "01", title: "Failure Mode", body: "What actually failed — not just what was observed. This makes similar failures searchable across products and batches." },
                    { num: "02", title: "Confirmation Method", body: "How the root cause was verified. This helps future investigators confirm the same issue with confidence." },
                    { num: "03", title: "Resolution", body: "What was changed to fix the issue and prevent recurrence. This becomes the reference action for handling similar cases." },
                    { num: "04", title: "Leading Indicator", body: "The early signal that appears before failure occurs. This helps teams detect the issue sooner next time." },
                    { num: "05", title: "Operator Summary", body: "A plain-language explanation shared with the operator who reported the issue. This closes the feedback loop and reinforces better reporting." },
                  ].map((t) => (
                    <div key={t.num} className="rounded-[12px] p-4" style={{ background: "rgba(152,96,226,0.08)", border: "1px solid rgba(152,96,226,0.2)" }}>
                      <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(152,96,226,0.6)" }}>{t.num}</p>
                      <p className="text-[13px] font-semibold text-white mb-2">{t.title}</p>
                      <p className="text-[12px] text-white/40 leading-relaxed">{t.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-section 3: The system improves with every closed case */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-2">The system improves with every closed case</p>
                <div className="space-y-3 text-[14px] text-white/50 leading-relaxed">
                  <p>A record answers: <span className="font-semibold text-white/80">What happened?</span></p>
                  <p>Tagging answers: <span className="font-semibold text-white/80">What should we do next time?</span></p>
                  <p>Each confirmed tag turns an investigation into structured knowledge — something future teams can search, recognize, and reuse.</p>
                  <p>As more cases close with structured tags, the system becomes progressively more useful. Instead of starting from scratch, investigators see relevant historical precedents early, helping them resolve issues with greater speed and confidence.</p>
                  <p>Over time, recurring patterns become easier to detect. What once depended on individual memory becomes shared knowledge across teams — and eventually across sites.</p>
                  <p>Knowledge no longer leaves with people. It stays in the system and improves with every case.</p>
                </div>
              </div>

              {/* Sub-section 4: Before vs. After */}
              <div className="rounded-[16px] p-6 md:p-8" style={{ background: "#181818" }}>
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-6">Before vs. After</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <img src="/images/veeva system/tagging/before vs after.png" alt="Before vs After" className="w-full md:w-[60%] flex-shrink-0 object-contain mt-2" onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }} />
                  <div className="space-y-4 md:w-[40%] text-[14px] text-white/50 leading-relaxed">
                    <p>Before structured tagging, investigations closed as documents — complete, compliant, but difficult to reuse. Similar issues often required teams to start from scratch, relying on memory and manual search to locate relevant past cases.</p>
                    <p>After structured tagging, each closed investigation produces reusable knowledge. Root causes become searchable, patterns become visible across cases, and future investigations begin with context instead of uncertainty — reducing repeated work and improving resolution speed.</p>
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
                  Every constraint required a decision.
                </h2>
              }
              right={
                <div className="space-y-3 text-[16px] text-white/70 leading-relaxed">
                  <p>Designing for a regulated environment means compliance and usability often pull in opposite directions. These are the three tradeoffs I made deliberately.</p>
                  <p>Each tradeoff favors long-term reliability over short-term convenience.</p>
                </div>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  title: "Mandatory tags vs. engineer autonomy",
                  body: "Five tags are required before a case can close — no workaround. This introduces friction for engineers who want to submit quickly. But structured closure only works when every case contributes usable knowledge. One untagged investigation creates a gap. Making tags optional would gradually weaken the system — until it stops being reliable.",
                },
                {
                  num: "02",
                  title: "AI suggests vs. AI decides",
                  body: "The AI could automatically confirm root causes and pre-fill tags — saving time. But in a regulated environment, every documented conclusion must be owned by a named person. AI suggestions remain visually distinct, require explicit confirmation, and record who approved them. Speed was intentionally traded for traceability.",
                },
                {
                  num: "03",
                  title: "Event-based navigation vs. familiar object-type navigation",
                  body: "Organizing cases by investigation flow is more intuitive for new users. But QA engineers trained on existing systems expect to find cases in flat lists. Changing that mental model introduces adoption risk. The new structure must feel immediately clearer during the first session — or users will revert to old habits.",
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

        {/* Full Lifecycle */}
        <section id="next" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Full Lifecycle">
            <TwoCol
              left={
                <h2 className="text-[clamp(24px,2.5vw,36px)] font-bold leading-snug tracking-tight">
                  Three stages that complete the lifecycle.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">This case study focused on the investigation stage in depth. These remaining stages complete the lifecycle — from initial report to final feedback. And each stage plays a role in turning a single report into reusable knowledge.</p>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  stage: "Stage 1",
                  title: "Mobile floor report",
                  body: "The lifecycle begins on the production floor. Operators scan a batch barcode, photograph the defect, and select the issue type — submitting a report in under 60 seconds without leaving the line. This is where the first structured tags enter the system.",
                },
                {
                  stage: "Stage 3",
                  title: "QA Manager approval view",
                  body: "Before closure, QA Managers review each investigation in a risk-stratified queue. AI highlights confidence levels and supporting evidence, enabling fast approval of strong cases and targeted feedback on weak ones. This is where accountability is formally recorded.",
                },
                {
                  stage: "Stage 4",
                  title: "Operator feedback card",
                  body: "When the case closes, the operator receives a plain-language summary of what happened — what caused the issue, what was fixed, and what to report next time. This closes the loop between reporting and learning.",
                },
              ].map((c) => (
                <div key={c.stage} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: "#9860E2" }}>{c.stage}</p>
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
                  What changed how I think.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">This project revealed gaps that shaped how I now approach enterprise design.</p>
              }
            />
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  title: "Five is a hypothesis, not a conclusion",
                  hook: null,
                  body: "Five tags felt like the minimum that would make pattern matching useful without slowing engineers down. Fewer created unreliable signals. More added friction. But the right number shouldn't be assumed — it should be tested with real engineers. The final answer may be four, or it may be six.",
                },
                {
                  num: "02",
                  title: "The real problem wasn't UI — it was workflow.",
                  hook: null,
                  body: "Early on, I focused on improving the investigation screen. Mapping all seven roles showed that the real problem wasn't a single interface — it was how work moved across people. The investigation screen only works because operators, labs, managers, and trainers are connected to it. Designing the system mattered more than refining individual screens.",
                },
              ].map((r) => (
                <div key={r.num} className="rounded-[16px] p-6" style={{ background: "#181818" }}>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3">{r.num}</p>
                  <p className="text-[15px] font-semibold text-white mb-2">{r.title}</p>
                  {r.hook && <p className="text-[14px] font-medium mb-3" style={{ color: "#9860E2" }}>{r.hook}</p>}
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
