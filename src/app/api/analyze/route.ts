import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("resume");

    if (!file) {
      return NextResponse.json(
        { error: "Resume not uploaded" },
        { status: 400 }
      );
    }

    // 🔥 TEMP resume text (safe, no pdf parsing)
    const resumeText = `
Frontend Developer skilled in React, Next.js, Tailwind CSS.
Built responsive UIs, ATS-friendly resumes, and API integrations.
`;

    const prompt = `
You are an ATS resume analyzer.

Analyze the resume below and return ONLY valid JSON in this exact format:
{
  "atsScore": number,
  "missingSkills": string[],
  "suggestedRoles": string[],
  "improvementTips": string[]
}

Resume:
${resumeText}
`;

    const aiRes = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          // 🔥 OpenRouter requires these (VERY IMPORTANT)
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "ResumeIQ",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-70b-instruct",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.2,
        }),
      }
    );

    const aiData = await aiRes.json();
    console.log("OPENROUTER RAW:", aiData);

    // 🛑 SAFETY GUARD
    if (!aiData.choices || !aiData.choices.length) {
      throw new Error("Invalid AI response");
    }

    const content = aiData.choices[0].message.content;

    // 🛑 Extract JSON safely
    const start = content.indexOf("{");
    const end = content.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("AI did not return JSON");
    }

    const parsed = JSON.parse(content.slice(start, end + 1));

    return NextResponse.json(parsed);
  } catch (err) {
    console.error("OPENROUTER AI ERROR:", err);

    // 🔁 FALLBACK (never break UI)
    return NextResponse.json({
      atsScore: 68,
      missingSkills: ["TypeScript", "System Design"],
      suggestedRoles: ["Frontend Developer", "Junior Full Stack"],
      improvementTips: [
        "Add quantified achievements",
        "Include more ATS keywords",
      ],
      mode: "fallback",
    });
  }
}
