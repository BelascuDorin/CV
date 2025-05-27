import dynamic from "next/dynamic";

// Dynamically import CVGenerator with SSR disabled to prevent hydration issues
const CVGenerator = dynamic(() => import("./CVGenerator"), {
  ssr: false,
  loading: () => (
    <button
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold opacity-50 cursor-not-allowed"
      disabled
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Loading...
    </button>
  ),
});

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Dorin Belascu
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Senior Frontend Engineer with 7+ years of experience. Specialized in
        React.js, Next.js, and building scalable applications for 1M+ users.
        Former CTO/Co-Founder with entrepreneurial experience.
      </p>
      <CVGenerator className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" />
    </section>
  );
}
