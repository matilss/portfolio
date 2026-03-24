"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "research", label: "Research" },
  { id: "market-gap", label: "Market Gap" },
  { id: "hypothesis", label: "Hypothesis" },
  { id: "model", label: "System Architecture" },
  { id: "onboarding", label: "Onboarding" },
  { id: "checkout", label: "Checkout" },
  { id: "design-decision", label: "Design Decision" },
  { id: "integrity", label: "Business Model" },
  { id: "design-tradeoff", label: "Design Tradeoff" },
  { id: "measuring-success", label: "Measuring Success" },
  { id: "reflection", label: "Reflection" },
];

export default function CardPilot() {
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

      {/* Hero image — with bottom gradient fade */}
      <div className="w-full px-4 md:px-[12vw] pt-20 md:pt-32 pb-0">
        <div className="w-full relative overflow-hidden rounded-t-[24px]" style={{ aspectRatio: "16/10.37", background: "#0a0a0a" }}>
          <img
            src="/images/homepage/cardpilot.png"
            alt="CardPilot"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />
          {/* Bottom gradient fade to black */}
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
                  CardPilot
                </h1>
                <p className="text-[18px] lg:text-[20px] font-semibold text-white">
                  A checkout intelligence engine for multi-card users.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Project", value: "Solo Personal Product Concept" },
                  { label: "Status", value: "Concept design complete · 2026" },
                  { label: "Domain", value: "Fintech · Mobile" },
                  { label: "Role", value: "Product Design · Strategy" },
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
                <p>Most people carry multiple credit cards. Very few use the right one at checkout.</p>
                <p>CardPilot is a checkout intelligence engine that evaluates every card in your wallet and recommends the best one for each purchase.</p>
                <p>The system computes the optimal card in real time and explains the reasoning — in the two seconds before you tap.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Context */}
        <section id="context" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Context">
            <TwoCol
              left={
                <div className="flex flex-col gap-6 items-center">
                  <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                    Multi-card ownership increases opportunity — and complexity.
                  </h2>
                  <img
                    src="/images/Cardpilot/context/credit-cards.png"
                    alt="Stacked credit cards"
                    className="w-[80%] object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                  />
                </div>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The average Canadian credit card holder carries 2.2 cards. Among users who actively optimize rewards, that number rises to 4 or more — each with different earn rates, bonus thresholds, and billing cycles.</p>
                  <p>Each card has different reward structures, bonus thresholds, due dates, and utilization impact. But issuer apps operate independently. There is no shared state or cross-card intelligence.</p>
                  <p>The friction happens in seconds at checkout — but the cost compounds over time through missed bonuses, suboptimal rewards, and unnoticed credit utilization.</p>
                </div>
              }
            />
          </SectionCard>
        </section>

        {/* Research */}
        <section id="research" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Research">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Three patterns emerged across both expert and casual users.
                </h2>
              }
              right={
                <div className="space-y-3 text-[16px] text-white/70 leading-relaxed">
                  <p>I conducted 6 informal interviews with Canadian multi-card holders — 3 power users managing 4+ cards with spreadsheet-tracked bonuses, and 3 casual holders who rarely optimized — and reviewed 200+ threads across r/PersonalFinanceCanada and r/CreditCards.</p>
                  <p>Despite different levels of engagement, users shared the same outcome at checkout:</p>
                  <p className="text-white/70">Experts lack time to calculate.<br />Casual users don't realize a decision exists.</p>
                  <p className="text-white/70 font-medium">CardPilot must serve both.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6 w-full">
              {[
                { num: "01", title: "Category Awareness Without Recall", body: "5 of 6 participants could name which card earned best on groceries — but not the actual percentage. At checkout, that gap defaults to habit, not math." },
                { num: "02", title: "Manual Bonus Tracking", body: "4 of 6 participants tracked welcome bonuses in Apple Notes or a spreadsheet. None were confident in their current progress at the time of the interview." },
                { num: "03", title: "Invisible Value Loss", body: "When shown a rough calculation of their annual reward gap, 4 of 6 participants expressed surprise. None had estimated it on their own before." },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num}</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-snug">{c.title}</h3>
                    <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Market Gap */}
        <section id="market-gap" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Market Gap">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Every fintech app shows you what you spent. None help you decide what to spend with.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Financial tools today are built for reflection — balances, transactions, and spending history.</p>
                  <p>But checkout is the actual decision moment. No product evaluates multiple cards in real time and recommends the best one at the point of payment. The gap isn't a missing feature — it's a missing category.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                {
                  num: "01",
                  icon: <img src="/images/Cardpilot/market-gap/amex.png" alt="Amex" className="w-14 h-14 object-contain rounded-[14px]" />,
                  title: "Banking apps\noptimize for account visibility",
                  body: "Balances, transactions, and due dates — but only within a single issuer.",
                },
                {
                  num: "02",
                  icon: <img src="/images/Cardpilot/market-gap/wallet-og.png" alt="Wallet" className="w-14 h-14 object-contain rounded-[14px]" />,
                  title: "Wallet apps\noptimize for payment speed",
                  body: "Fast checkout, but no evaluation of rewards, bonuses, or credit impact.",
                },
                {
                  num: "03",
                  icon: <img src="/images/Cardpilot/market-gap/rocket-money.png" alt="Rocket Money" className="w-14 h-14 object-contain rounded-[14px]" />,
                  title: "Budgeting apps\noptimize for spending reflection",
                  body: "Analysis happens after the purchase, not during it.",
                },
              ].map((c) => (
                <div key={c.num} className="rounded-[20px] p-7 flex flex-col justify-between gap-8 w-full" style={{ background: "#131313", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-white/25 uppercase">{c.num.replace(".", "")}</span>
                  <div className="flex flex-col items-center text-center gap-4">
                    {c.icon}
                    <div>
                      <h3 className="text-[15px] font-semibold text-white mb-2 whitespace-pre-line leading-snug">{c.title}</h3>
                      <p className="text-[16px] text-white/40 leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Focus question banner */}
            <div className="mt-4 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(200,255,87,0.15)" }}>
              {/* Subtle glow */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#c8ff57" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(200,255,87,0.6)" }}>The project focuses on a narrow question</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  If a user carries multiple credit cards, how can the system help them confidently choose the best one at checkout?
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Hypothesis */}
        <section id="hypothesis" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Hypothesis">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  This is not a rewards problem. It's a decision problem.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Users don't default to habit because they lack data. They default because four variables must be evaluated simultaneously — reward rate, bonus progress, utilization impact, and payment timing.</p>
                  <p>Existing tools expose the data. None compute the decision.</p>
                </div>
              }
            />
            {/* Hypothesis image */}
            <img
              src="/images/Cardpilot/hypothesis/model.png"
              alt="Hypothesis model"
              className="w-full md:w-1/2 object-contain mx-auto block"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />

            {/* Hypothesis banner */}
            <div className="mt-4 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(200,255,87,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#c8ff57" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(200,255,87,0.6)" }}>The core assumption being tested</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  If the cognitive load of multi-card selection is reduced from evaluating 4 variables to receiving 1 recommendation, users will follow the optimal card more often at checkout.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Model */}
        <section id="model" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="System Architecture">
            {/* Layer 1 */}
            <TwoCol
              left={
                <h2 className="text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-tight">
                  Layer 1 - Card Management Foundation
                </h2>
              }
              right={
                <div className="space-y-3 text-[16px] text-white/70 leading-relaxed">
                  <p>CardPilot aggregates structured data for each card:</p>
                  <ul className="space-y-1">
                    {["statement balance", "credit limit", "utilization", "payment due date", "welcome bonus progress", "annual fee lifecycle"].map((i) => (
                      <li key={i} className="flex items-center gap-2 text-white/45">
                        <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                  <p>This creates a unified card state across issuers. Without this layer, recommendations would rely on guesswork.</p>
                </div>
              }
            />
            {/* Layer 2 */}
            <div className="mt-10">
              <TwoCol
                left={
                  <h2 className="text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-tight">
                    Layer 2 - Checkout Intelligence Engine
                  </h2>
                }
                right={
                  <div className="space-y-3 text-[16px] text-white/70 leading-relaxed">
                    <p>At checkout, each card is evaluated across four signals:</p>
                    <ul className="space-y-1">
                      {["reward rate", "bonus progress", "utilization impact", "due-date proximity"].map((i) => (
                        <li key={i} className="flex items-center gap-2 text-white/45">
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />{i}
                        </li>
                      ))}
                    </ul>
                    <p>The engine balances reward upside with financial health, and the highest-scoring card becomes the recommendation.</p>
                  </div>
                }
              />
            </div>
            {/* Architecture diagram */}
            <div className="mt-10">
              <h3 className="text-[16px] font-bold text-white mb-5">CardPilot Decision System</h3>
              <img
                src="/images/Cardpilot/system architecture/architecture.png"
                alt="CardPilot Decision System"
                className="w-full object-contain rounded-[16px]"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
              />
            </div>
          </SectionCard>
        </section>

        {/* Onboarding */}
        <section id="onboarding" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Onboarding">
            <TwoCol
              left={
                <div className="flex flex-col gap-6 items-center">
                  <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight w-full">
                    Trust before intelligence.
                  </h2>
                  <video
                    src="/images/Cardpilot/onboarding/onboarding.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[75%] object-cover rounded-[20px]"
                  />
                </div>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>CardPilot depends on accurate card data, which requires users to grant financial access during onboarding. Because permission introduces friction, the flow prioritizes clarity before access — explaining value, defining what data can and cannot be read, and making consent reversible.</p>
                  <p>Card data is synchronized through secure financial integrations, allowing recommendations to update automatically as merchant context changes.</p>
                </div>
              }
            />
          </SectionCard>
        </section>

        {/* Checkout */}
        <section id="checkout" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Checkout">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  One recommendation. Two signals. A decision in two seconds.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>When a merchant is detected, the engine ranks every card simultaneously. Instead of showing a comparison table, CardPilot surfaces one recommendation with two supporting signals.</p>
                  <p>The model evaluates four dimensions internally — but exposing all four would recreate the same cognitive overload the product is designed to remove.</p>
                  <p>Two signals provide enough transparency to trust the recommendation, and enough context to override it. If two cards score identically, CardPilot defaults to the user's primary card.</p>
                </div>
              }
            />
            {/* Checkout flow image */}
            <img
              src="/images/Cardpilot/checkout/checkout-flow.png"
              alt="Checkout user flow"
              className="w-full object-contain mt-8 rounded-[16px]"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />

            {/* Gas Station Checkout */}
            <div className="mt-20">
              <TwoCol
                left={
                  <div className="flex flex-col gap-6 items-center">
                    <h3 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight w-full">
                      Gas Station Checkout Example
                    </h3>
                    <img
                      src="/images/Cardpilot/checkout/payment 1.png"
                      alt="Gas station checkout"
                      className="w-[75%] object-contain rounded-[16px]"
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                    />
                  </div>
                }
                right={
                  <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                    <p>At checkout, CardPilot surfaces one recommendation supported by the two most decision-relevant signals.</p>
                    <p>In this case:</p>
                    <ul className="space-y-1">
                      {["Highest reward rate on gas (3× points)", "Progress toward welcome bonus (42 days remaining)"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/70">
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>These signals explain why this card is recommended — without exposing the full scoring model.</p>
                  </div>
                }
              />
            </div>
          </SectionCard>
        </section>

        {/* Design Decision */}
        <section id="design-decision" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Design Decision">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Every screen is the result of a decision, not a preference.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>CardPilot intentionally avoids the visual language of traditional banking apps. Most fintech interfaces rely on blue and white palettes designed to signal safety.</p>
                  <p>CardPilot is a decision tool, not a banking interface. The design language emphasizes precision and clarity — deep black surfaces, high-contrast typography, neon yellow-green for primary actions.</p>
                </div>
              }
            />

            {/* Visual design full width */}
            <div className="mt-10 flex justify-center">
              <div className="w-[90%] rounded-[20px] overflow-hidden">
                <img
                  src="/images/Cardpilot/design-decision/visual-design.png"
                  alt="CardPilot visual design"
                  className="w-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                />
              </div>
            </div>

            {/* The Pay Flow */}
            <div className="mt-10 flex flex-col md:grid w-full gap-6 md:gap-0" style={{ gridTemplateColumns: "14.5% 25.5% 10% 50%" }}>
              <div className="hidden md:block" />
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-[18px] font-bold leading-snug tracking-tight text-white">The Pay Flow</h3>
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The card stack home screen surfaces alerts directly on the card — "Payment due in 3 days" appears on the card it belongs to, not buried in notifications.</p>
                  <p>The pay flow closes the loop. The success screen shows exactly what the transaction earned and how it moved the welcome bonus target.</p>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="flex justify-center">
                <div className="w-[75%] md:w-[75%] rounded-[20px] overflow-hidden mx-auto">
                  <video
                    src="/images/Cardpilot/design-decision/payment-flow.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card Detail */}
            <div className="mt-10 flex flex-col md:grid w-full gap-6 md:gap-0" style={{ gridTemplateColumns: "14.5% 25.5% 10% 50%" }}>
              <div className="hidden md:block" />
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-[18px] font-bold leading-snug tracking-tight text-white">Card detail — distinguishing monitoring data from reference data</h3>
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Each card screen separates information by urgency.</p>
                  <p>Current balance, due date, and utilization are <span className="text-white/70">monitoring data</span> — surfaced prominently.</p>
                  <p>Annual fee and renewal date are <span className="text-white/70">reference data</span> — visible but visually quieter.</p>
                  <p>Welcome bonus progress appears only when a bonus is active, keeping the interface uncluttered for cards without one.</p>
                </div>
              </div>
              <div className="hidden md:block" />
              <div className="flex justify-center">
                <div className="w-[75%] md:w-[75%] rounded-[20px] overflow-hidden mx-auto">
                  <video
                    src="/images/Cardpilot/design-decision/card-detail.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

          </SectionCard>
        </section>

        {/* Business Model */}
        <section id="integrity" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Business Model">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Revenue exists outside the decision.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>CardPilot generates revenue without interfering with the recommendation engine.</p>
                  <p>Monetization happens around the system — not inside it.</p>
                </div>
              }
            />

            {/* Partner Offers */}
            <div className="mt-12">
              <TwoCol
                left={
                  <div className="flex flex-col gap-6 items-center">
                    <h3 className="text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-tight w-full">
                      Partner Offers
                    </h3>
                    <img
                      src="/images/Cardpilot/integrity/offer.png"
                      alt="Offer screen"
                      className="w-[75%] object-contain rounded-[16px]"
                      onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                    />
                  </div>
                }
                right={
                  <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                    <p>Financial institutions can surface optional offers in the Offers tab.</p>
                    <p>Examples include:</p>
                    <ul className="space-y-1">
                      {["New credit card applications", "Upgrade opportunities", "Limited-time welcome bonuses"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/70">
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>Partners pay CardPilot in two ways:</p>
                    <ul className="space-y-1">
                      {["Referral fees when users apply for a card", "Sponsored placement fees to feature offers within the Offers tab"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-white/70">
                          <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-[10px]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p>These placements remain separate from checkout recommendations.</p>
                    <p>Recommendations are never influenced by commercial incentives.</p>
                  </div>
                }
              />
            </div>

            {/* Transaction Partnerships */}
            <div className="mt-12">
              <TwoCol
                left={
                  <h3 className="text-[clamp(18px,1.8vw,24px)] font-bold leading-snug tracking-tight">
                    Transaction Partnerships
                  </h3>
                }
                right={
                  <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                    <p>At scale, CardPilot may participate in transaction-level partnerships with issuing banks.</p>
                    <p>Under this model, the system receives a small percentage of supported transactions.</p>
                    <p>This represents long-term infrastructure revenue — not an early dependency.</p>
                  </div>
                }
              />
            </div>

            {/* Product Principle banner */}
            <div className="mt-12 rounded-[20px] p-6 md:p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", border: "1px solid rgba(200,255,87,0.15)" }}>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full blur-3xl opacity-20" style={{ background: "#c8ff57" }} />
              <div className="relative text-center">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-5" style={{ color: "rgba(200,255,87,0.6)" }}>Product Principle</p>
                <p className="text-[20px] lg:text-[24px] font-semibold text-white leading-snug tracking-tight max-w-[640px] mx-auto">
                  Trust is architectural. If users believe recommendations are influenced by commercial incentives, the product loses credibility — and the recommendation engine becomes meaningless.
                </p>
              </div>
            </div>
          </SectionCard>
        </section>

        {/* Design Tradeoff */}
        <section id="design-tradeoff" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Design Tradeoff">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Balancing transparency with decision clarity.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>Early concepts surfaced the full scoring model — all four signals. While technically transparent, this recreated the same cognitive load the product was designed to remove.</p>
                  <p>I showed both versions to 3 participants. All 3 said the four-signal version felt like "more homework." The two-signal version felt "faster to trust."</p>
                  <p>The final design simplified to one recommendation supported by two signals — the most decision-relevant ones for that specific transaction. The system evaluates all four internally. Users only see what they need to act.</p>
                  <p>The tradeoff: reduced transparency for increased usability. The bet is that consistent, accurate recommendations build more trust over time than a visible scoring model.</p>
                </div>
              }
            />
          </SectionCard>
        </section>

        {/* Measuring Success */}
        <section id="measuring-success" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Measuring Success">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  Evaluating whether the system improves decision confidence.
                </h2>
              }
              right={
                <p className="text-[16px] text-white/70 leading-relaxed">
                  If CardPilot were launched, success would be measured through behavioral signals in the first 90 days — with a north star of reducing the gap between the card users choose and the card they should have chosen.
                </p>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "Recommendation adoption rate", body: "Target: >65% within 90 days of onboarding. Estimated baseline: 20–30% (typical fintech feature adoption). The gap between adopted and ignored recommendations is the signal — high ignore rate suggests the model doesn't match user context." },
                { num: "02", title: "Decision time at checkout", body: "Target: median under 4 seconds from recommendation appearance to payment confirmation. Estimated current baseline for a deliberate multi-card user: 8–12 seconds. Time reduction without regret is the goal." },
                { num: "03", title: "Reward capture rate", body: "Target: 15–20% increase in estimated annual reward value versus pre-CardPilot baseline. Measured by comparing the card chosen to the optimal card for that transaction category and spend amount." },
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

        {/* Reflection */}
        <section id="reflection" className="py-10 md:py-20 scroll-mt-20">
          <SectionCard label="Reflection">
            <TwoCol
              left={
                <h2 className="text-[clamp(20px,2vw,28px)] font-bold leading-snug tracking-tight">
                  What I'd do differently — and what's still unresolved.
                </h2>
              }
              right={
                <div className="space-y-4 text-[16px] text-white/70 leading-relaxed">
                  <p>The hardest design decision in CardPilot wasn't the visual language or the checkout flow — it was deciding when the system should stay silent.</p>
                  <p>A recommendation engine that always recommends can create its own kind of noise. I didn't fully solve that problem, and I'd make it a first-order constraint in the next iteration.</p>
                </div>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6">
              {[
                { num: "01", title: "I'd test silence as a feature", body: "What happens when no card is meaningfully better than another? The current design defaults to the primary card — but there may be more value in saying 'they're equal' explicitly. That's a trust moment I didn't design for." },
                { num: "02", title: "The two-signal approach needs real validation", body: "I simplified to two signals based on intuition and 3 informal conversations. A proper A/B test comparing 2 vs 4 signals would be the first thing I'd run with a real product team and user base." },
                { num: "03", title: "Onboarding is underdesigned", body: "CardPilot's value depends entirely on accurate, up-to-date card data. I didn't fully solve how users add and maintain that data without it becoming a chore — which is probably the product's biggest adoption risk." },
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
