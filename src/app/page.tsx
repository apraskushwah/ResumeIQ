import ResumeUpload from "@/components/ResumeUpload";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <CursorGlow />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-10 bg-[#070B14] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-bold text-lg">ResumeIQ</h1>
          <a
            href="#analyze"
            className="px-4 py-2 rounded-lg bg-white text-black font-semibold"
          >
            Analyze Resume
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-28 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-up">
          Turn Your Resume Into a
          <span className="block text-indigo-400 typing">
            Recruiter-Winning Profile
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto animate-fade-up">
          Analyze your resume, check ATS score, and get role suggestions
          before recruiters ever see it.
        </p>
      </section>

      {/* TRUST / VALUE SECTION */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <h3 className="text-center text-3xl font-bold mb-4">
          What This Tool Gives You
        </h3>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Before you upload your resume, here’s exactly what our AI analyzes
          and how it helps you increase your interview chances.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div
            className="
              bg-white/5 border border-white/10 rounded-2xl p-6
              transition-all duration-300
              hover:-translate-y-2 hover:bg-white/10
            "
          >
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-lg font-semibold mb-2">
              ATS Compatibility Score
            </h4>
            <p className="text-sm text-gray-400">
              We simulate modern Applicant Tracking Systems to show how well
              your resume performs before reaching a human recruiter.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-white/5 border border-white/10 rounded-2xl p-6
              transition-all duration-300
              hover:-translate-y-2 hover:bg-white/10
            "
          >
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="text-lg font-semibold mb-2">
              Skill Gap Detection
            </h4>
            <p className="text-sm text-gray-400">
              Identify missing skills, keywords, and technologies that
              recruiters expect for your target job roles.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-white/5 border border-white/10 rounded-2xl p-6
              transition-all duration-300
              hover:-translate-y-2 hover:bg-white/10
            "
          >
            <div className="text-3xl mb-4">🎯</div>
            <h4 className="text-lg font-semibold mb-2">
              Role Recommendations
            </h4>
            <p className="text-sm text-gray-400">
              Get job role suggestions that truly match your resume instead
              of generic or random career advice.
            </p>
          </div>
        </div>

        {/* TRUST BADGE */}
        <p className="mt-16 text-center text-sm text-gray-500">
          🔒 No login required • Your resume is processed securely • Demo mode enabled
        </p>
      </section>

      {/* ANALYZE */}
      <section
        id="analyze"
        className="max-w-3xl mx-auto px-6 pb-32 animate-reveal"
      >
        <ResumeUpload />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-500">
        Built with ❤️ Next.js & AI • Demo Mode
      </footer>
    </main>
  );
}
