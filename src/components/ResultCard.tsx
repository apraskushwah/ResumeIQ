import { useEffect, useState } from "react";
import { ResumeResult } from "@/types/resume";

export default function ResultCard({
  atsScore,
  missingSkills = [],
  suggestedRoles = [],
  improvementTips = [],
}: ResumeResult) {
  return (
    <div className="mt-8 space-y-8 text-white">
      
      {/* ATS SCORE */}
      <div>
        <div className="flex justify-between mb-2 text-sm text-gray-400">
          <span>ATS Score</span>
          <span className="text-white font-semibold">
            {atsScore}/100
          </span>
        </div>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
  <div
    className="h-2 bg-green-500 rounded-full transition-all duration-700 ease-out"
    style={{ width: `${Math.min(atsScore ?? 0, 100)}%` }}
  />
</div>
      </div>

      <Section title="Missing Skills" items={missingSkills} />
      <Section title="Suggested Roles" items={suggestedRoles} />
      <Section title="Improvement Tips" items={improvementTips} />
    </div>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
        {title}
      </h3>

      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
