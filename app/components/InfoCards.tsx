export default function InfoCards() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
          Professional
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Years of experience in software development and technical leadership.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-purple-600 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
          Innovative
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Always exploring new technologies and creative solutions to complex
          problems.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
          Collaborative
        </h4>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          Strong team player with excellent communication and leadership skills.
        </p>
      </div>
    </section>
  );
}
