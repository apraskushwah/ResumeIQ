"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";
import { ResumeResult } from "@/types/resume";

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ResumeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const validateFile = (file: File) => {
    if (file.type !== "application/pdf") return "Only PDF resumes are supported";
    if (file.size > 2 * 1024 * 1024) return "File size must be under 2MB";
    return null;
  };

  const handleFileSelect = (file: File) => {
    const err = validateFile(file);
    if (err) {
      setError(err);
      setFile(null);
      return;
    }
    setError(null);
    setFile(file);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Upload a resume to continue");
      return;
    }

    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch {
      setError("AI analysis failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-xl
        border border-white/10
        rounded-3xl p-10
        shadow-[0_0_80px_rgba(255,255,255,0.08)]
        transition-all duration-500
        hover:shadow-[0_0_120px_rgba(99,102,241,0.25)]
        hover:-translate-y-1
      "
    >
      {/* Glow accent */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      {/* Heading */}
      <h2 className="text-white text-3xl font-bold tracking-tight">
        Get Your Resume
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {" "}ATS-Ready
        </span>
      </h2>

      <p className="text-gray-400 text-sm mt-3 max-w-sm">
        Upload your resume and let AI analyze it like modern hiring systems do.
      </p>

      {/* Upload Zone */}
      <label
        onDragEnter={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const dropped = e.dataTransfer.files?.[0];
          if (dropped) handleFileSelect(dropped);
        }}
        className={`
          mt-8 flex flex-col items-center justify-center
          w-full h-40
          rounded-2xl cursor-pointer
          border-2 border-dashed
          transition-all duration-300
          ${
            isDragging
              ? "border-indigo-400 bg-indigo-500/10 scale-[1.02]"
              : "border-white/20 hover:border-white/40 hover:bg-white/5"
          }
        `}
      >
        <input
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) =>
            e.target.files && handleFileSelect(e.target.files[0])
          }
        />

        <div className="text-center space-y-3 pointer-events-none">
          <div className="text-4xl">📄</div>

          <p className="text-sm font-medium text-gray-200">
            {file ? file.name : "Drop your resume here or click to upload"}
          </p>

          <p className="text-xs text-gray-500">
            PDF only • Max 2MB • Secure processing
          </p>
        </div>
      </label>

      {/* Error */}
      {error && (
        <p className="mt-4 text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
          mt-8 w-full py-4 rounded-xl font-semibold
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white
          transition-all duration-300
          hover:scale-[1.03]
          hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]
          active:scale-95
          disabled:opacity-60
        "
      >
        {loading ? "Analyzing with AI…" : "Analyze My Resume"}
      </button>

      {loading && (
        <p className="mt-3 text-xs text-gray-400 text-center animate-pulse">
          Running ATS + skill gap analysis…
        </p>
      )}

      {result && <ResultCard {...result} />}
    </div>
  );
}
