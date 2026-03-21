"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [active, setActive] = useState<"work" | "about">("work");

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Nav />
      <main className="flex-1 overflow-hidden">
        {active === "work" ? <WorkSection /> : <AboutSection />}
      </main>
      <BottomNav active={active} onChange={setActive} />
    </div>
  );
}
