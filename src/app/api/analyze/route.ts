import { NextResponse } from "next/server";

function generateDemoAnalysis() {
  const atsScore = Math.floor(Math.random() * 15) + 65; // 65–80

  return {
    atsScore,
    missingSkills: [
      "TypeScript",
      "Testing",
      "System Design",
      "Performance Optimization",
    ].slice(0, Math.floor(Math.random() * 3) + 2),

    suggestedRoles: [
      "Frontend Developer",
      "React Developer",
      "UI Engineer",
      "Full Stack Developer",
    ].slice(0, 2),

    improvementTips: [
      "Add measurable impact to projects",
      "Improve ATS keyword density",
      "Highlight leadership or collaboration experience",
      "Keep resume formatting simple and ATS-friendly",
    ].slice(0, 3),

    mode: "demo",
  };
}

export async function POST() {
  // ⏳ Artificial delay (feels like real AI)
  await new Promise((res) => setTimeout(res, 1200));

  return NextResponse.json(generateDemoAnalysis());
}
