import Header from "@/components/Header";
import ResumeUpload from "@/components/ResumeUpload";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B14] text-white">
       <Header />

      {/* ================= AURORA BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[160px]" />
        <div className="absolute top-[30%] left-[-140px] h-[440px] w-[440px] rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute bottom-[-260px] right-[15%] h-[560px] w-[560px] rounded-full bg-fuchsia-500/20 blur-[180px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Premium breathing space */}
          <div className="h-[18vh]" />

          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            🚀 AI-Powered Career Toolkit
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Turn Your Resume Into a
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Recruiter-Winning Profile
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Analyze your resume like top ATS systems, uncover hidden skill gaps,
            and get role recommendations tailored to your career path.
          </p>

          {/* Trust badges */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap text-sm">
            {[
              "⚡ Instant AI Analysis",
              "📄 ATS-Focused Scoring",
              "🔒 Privacy-First Design",
            ].map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ================= CORE PRODUCT ================= */}
      <section
        id="analyze"
        className="relative z-10 max-w-3xl mx-auto px-6 py-24"
      >
        <ResumeUpload />
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          What You’ll Get
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📊",
              title: "ATS Compatibility Score",
              desc: "See how your resume performs against real applicant tracking systems used by recruiters.",
            },
            {
              icon: "🧠",
              title: "Skill Gap Insights",
              desc: "Identify missing skills that reduce your chances of landing interviews.",
            },
            {
              icon: "🎯",
              title: "Role Recommendations",
              desc: "Discover job roles aligned with your experience and current market demand.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group bg-white/5 border border-white/10
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]
              "
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-gray-500">
        Built with ❤️ using Next.js, TypeScript & AI • Demo Mode Enabled
      </footer>
    </main>
  );
}
