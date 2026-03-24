"use client";
import { useState } from "react";

type Tab = "work" | "about";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

export default function BottomNav({ active, onChange }: Props) {
  const [hovered, setHovered] = useState<Tab | null>(null);

  // The pill follows hover if hovering inactive tab, else follows active
  const pillOn = hovered && hovered !== active ? hovered : active;
  const isHoverPreview = hovered !== null && hovered !== active;

  return (
    <div className="flex justify-center pb-2 md:pb-[40px] pt-3 flex-shrink-0">
      <div className="relative flex bg-[#1a1a1a] rounded-full p-1">
        {/* Sliding pill */}
        <div
          className="absolute top-1 bottom-1 rounded-full transition-all duration-250 ease-in-out"
          style={{
            width: "calc(50% - 4px)",
            left: pillOn === "work" ? "4px" : "calc(50%)",
            background: "white",
            transition: "left 250ms ease",
          }}
        />

        {(["work", "about"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            onMouseEnter={() => setHovered(tab)}
            onMouseLeave={() => setHovered(null)}
            className="relative z-10 px-[33px] py-3 rounded-full text-[16px] font-medium capitalize transition-colors duration-200"
            style={{
              color: pillOn === tab ? "black" : "#707070",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
