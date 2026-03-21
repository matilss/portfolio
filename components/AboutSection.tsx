"use client";

export default function AboutSection() {
  const sections = [
    {
      emoji: "🧡",
      title: "INFP - The Idealist",
      body: "I'm naturally curious about people and emotions, which shapes how I approach design. I believe thoughtful products can make everyday experiences feel more human.",
    },
    {
      emoji: "☕",
      title: "Founder of Bittersweet",
      body: "I started a small coffee catering brand called Bittersweet — where bitter coffee meets sweet cakes. Creating moments of joy for people is what inspires both my baking and my design.",
    },
    {
      emoji: "🌐",
      title: "Designer Between Cultures",
      body: "As an ESL designer, I'm especially sensitive to clarity and accessibility. I care deeply about designing experiences that feel intuitive for people from different backgrounds.",
    },
    {
      emoji: "🎨",
      title: "Designer Who Loves Details",
      body: "I enjoy crafting thoughtful visual details — from UI layouts to typography. Small design choices can shape how people feel when they use a product.",
    },
  ];

  const bakingPhotos = [
    "/images/about/IMG_0429.jpeg",
    "/images/about/IMG_1359.jpeg",
    "/images/about/IMG_1446.JPG",
    "/images/about/IMG_2828.jpeg",
    "/images/about/IMG_4627.jpeg",
    "/images/about/IMG_4645.jpeg",
    "/images/about/IMG_5423.JPG",
    "/images/about/IMG_5593.jpeg",
    "/images/about/IMG_6756.jpeg",
    "/images/about/IMG_7580.jpeg",
    "/images/about/IMG_7711.jpeg",
    "/images/about/IMG_8402.jpeg",
  ];

  return (
    <div className="h-full overflow-y-auto" style={{ scrollbarWidth: "none" }}>

      {/* Section 1: Info + portrait */}
      <div className="flex flex-col lg:flex-row px-[7vw] pt-0 pb-6 lg:pb-14 gap-8 lg:gap-16">

        {/* Left: emoji sections */}
        <div className="w-full lg:w-[32%] flex-shrink-0">
          {sections.map((s, i) => (
            <div key={s.title}>
              <div className="py-2 lg:py-4">
                <h3 className="text-white font-semibold text-[15px] lg:text-[20px] mb-2 lg:mb-3 flex items-center gap-2 lg:gap-3">
                  <span className="text-[16px] lg:text-[22px]">{s.emoji}</span>
                  {s.title}
                </h3>
                <p className="text-[#707070] text-[13px] lg:text-[16px] leading-relaxed">
                  {s.body}
                </p>
              </div>
              {i < sections.length - 1 && (
                <div className="border-t border-white/8" />
              )}
            </div>
          ))}
        </div>

        {/* Right: portrait */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end items-start lg:items-center">
          <div className="w-full aspect-[4/5] rounded-[20px] lg:rounded-[32px] overflow-hidden bg-[#111] border border-white/8" style={{ maxWidth: "clamp(260px, 70%, 480px)" }}>
            <img
              src="/images/about/IMG_0587.jpg"
              alt="Matilda Luo"
              className="w-full h-full object-cover object-top"
              onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
            />
          </div>
        </div>
      </div>

      {/* Section 2: Baking */}
      <div className="flex flex-col lg:flex-row px-[7vw] pt-8 lg:pt-32 pb-10 lg:pb-20 gap-8 lg:gap-16">

        {/* Left: baking text */}
        <div className="w-full lg:w-[32%] flex-shrink-0 lg:sticky lg:top-12 lg:self-start">
          <p className="text-[#555] text-[10px] lg:text-[11px] font-semibold tracking-[0.12em] uppercase mb-2 lg:mb-4">
            Beyond design
          </p>
          <h3 className="text-white font-semibold text-[18px] lg:text-[26px] leading-snug tracking-tight mb-2 lg:mb-4 flex items-start gap-2 lg:gap-3">
            <span className="text-[20px] lg:text-[28px] mt-0.5">🧁</span>
            Baking Makes Me Happy
          </h3>
          <p className="text-[#707070] text-[13px] lg:text-[16px] leading-relaxed">
            I started baking during COVID and discovered how much joy it brings to others.
            Seeing people smile when they taste something I made reminds me why I love creating things.
          </p>
        </div>

        {/* Right: photo grid */}
        <div className="w-full lg:flex-1">
          <div className="grid grid-cols-3 gap-2 lg:gap-4">
            {bakingPhotos.map((src, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg lg:rounded-2xl overflow-hidden bg-[#111] border border-white/5"
              >
                <img
                  src={src}
                  alt={`Baking ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-10 lg:h-20" />
    </div>
  );
}
