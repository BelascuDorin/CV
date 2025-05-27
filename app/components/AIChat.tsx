"use client";

import React, { useState } from "react";
import { processQuery } from "../utils/chatLogic";

export default function AIChat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handlePromptSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);

    // Simulate API call delay for better UX
    setTimeout(() => {
      const aiResponse = processQuery(prompt);
      setResponse(aiResponse);
      setIsLoading(false);
      setPrompt("");
    }, 800);
  }

  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          Ask About My Experience
        </h3>
        <p className="text-slate-600 dark:text-slate-300">
          Have questions about my background? Ask away! I can tell you about my
          skills, projects, and professional experience.
        </p>
      </div>

      <form onSubmit={handlePromptSubmit} className="mb-6">
        <div className="flex gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., What technologies do you work with?"
            className="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-medium rounded-lg transition-colors duration-200"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Ask"
            )}
          </button>
        </div>
      </form>

      {response && (
        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="text-slate-700 dark:text-slate-200 whitespace-pre-line">
              {response}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
