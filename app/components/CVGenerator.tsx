"use client";

import React, { useRef, useState, useEffect } from "react";
import experienceData from "../data/experience.json";

interface CVGeneratorProps {
  className?: string;
}

export default function CVGenerator({ className }: CVGeneratorProps) {
  const cvRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const data = experienceData.experience;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const generatePDF = async () => {
    if (!cvRef.current) return;

    setIsGenerating(true);

    try {
      // Dynamic imports to avoid SSR issues
      const html2canvas = (await import("html2canvas")).default;
      const jsPDF = (await import("jspdf")).default;

      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Dorin_Belascu_CV.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isMounted) {
    return (
      <button className={className} disabled>
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        Loading...
      </button>
    );
  }

  return (
    <>
      {/* Download Button */}
      <button
        onClick={generatePDF}
        className={className}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Generating...
          </>
        ) : (
          <>
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
            Download My CV
          </>
        )}
      </button>

      {/* Hidden CV Layout for PDF Generation - Using inline styles to avoid Tailwind conflicts */}
      <div
        ref={cvRef}
        style={{
          position: "fixed",
          left: "-9999px",
          width: "210mm",
          minHeight: "297mm",
          backgroundColor: "#ffffff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#2D3748",
          fontSize: "13px",
          lineHeight: "1.5",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "32px",
            marginBottom: "0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              marginBottom: "8px",
              margin: "0 0 8px 0",
              letterSpacing: "-0.5px",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Dorin Belascu
          </h1>
          <div
            style={{
              fontSize: "22px",
              marginBottom: "20px",
              fontWeight: "400",
              opacity: "0.95",
            }}
          >
            Senior Frontend Engineer
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "24px",
              fontSize: "14px",
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "16px 24px",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              📧 dorin.belascu@gmail.com
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              📍 Cluj-Napoca, Romania
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              🔗 github.com/BelascuDorin
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              💼 linkedin.com/in/belascu-dorin-73403a96
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            padding: "32px",
            backgroundColor: "#f8fafc",
            minHeight: "calc(297mm - 140px)",
          }}
        >
          {/* Left Column */}
          <div style={{ flex: "1", paddingRight: "12px" }}>
            {/* Professional Summary */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Professional Summary
              </h2>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p style={{ margin: "0 0 12px 0", lineHeight: "1.6" }}>
                  Experienced Senior Frontend Engineer with{" "}
                  {data.totalExperience} in software development, specializing
                  in React.js ecosystem and large-scale applications serving 1M+
                  users.
                </p>
                <p style={{ margin: "0 0 12px 0", lineHeight: "1.6" }}>
                  Successfully transitioned from embedded automotive systems to
                  modern web development, demonstrating strong adaptability and
                  continuous learning mindset.
                </p>
                <p style={{ margin: "0", lineHeight: "1.6" }}>
                  Former CTO/Co-Founder with proven leadership experience
                  managing teams up to 6 developers and driving full product
                  development cycles from MVP to production.
                </p>
              </div>
            </div>

            {/* Current Role */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Current Role
              </h2>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #e2e8f0",
                  borderLeft: "4px solid #667eea",
                }}
              >
                <div
                  style={{
                    fontWeight: "600",
                    color: "#1A202C",
                    fontSize: "16px",
                    marginBottom: "6px",
                  }}
                >
                  {data.currentRole.title}
                </div>
                <div
                  style={{
                    color: "#667eea",
                    fontSize: "14px",
                    marginBottom: "12px",
                    fontWeight: "600",
                  }}
                >
                  {data.currentRole.company}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#718096",
                    marginBottom: "12px",
                    backgroundColor: "#f7fafc",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    display: "inline-block",
                  }}
                >
                  {data.currentRole.duration}
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <strong style={{ color: "#2D3748" }}>Focus:</strong>{" "}
                  <span style={{ color: "#4A5568" }}>
                    {data.currentRole.focus}
                  </span>
                </div>
                <div>
                  <strong
                    style={{
                      color: "#2D3748",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    Key Responsibilities:
                  </strong>
                  <ul
                    style={{
                      margin: "0",
                      paddingLeft: "16px",
                      color: "#4A5568",
                    }}
                  >
                    {data.currentRole.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        style={{ marginBottom: "4px", fontSize: "12px" }}
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Professional Experience
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {data.roles.slice(0, 6).map((role, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "16px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                      border: "1px solid #e2e8f0",
                      borderLeft: "3px solid #a0aec0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ flex: "1", paddingRight: "12px" }}>
                        <div
                          style={{
                            fontWeight: "600",
                            color: "#1A202C",
                            fontSize: "14px",
                            marginBottom: "3px",
                            lineHeight: "1.2",
                          }}
                        >
                          {role.title}
                        </div>
                        <div
                          style={{
                            color: "#667eea",
                            fontSize: "13px",
                            fontWeight: "500",
                            marginBottom: "4px",
                          }}
                        >
                          {role.company}
                        </div>
                        {role.location && (
                          <div style={{ fontSize: "11px", color: "#718096" }}>
                            📍 {role.location}
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#4A5568",
                          backgroundColor: "#f7fafc",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          fontWeight: "600",
                          textAlign: "center",
                          minWidth: "85px",
                          border: "1px solid #e2e8f0",
                          lineHeight: "1.3",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {role.duration
                          .replace(" - ", "\n")
                          .replace(" (", "\n(")}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#4A5568",
                        lineHeight: "1.4",
                      }}
                    >
                      • {role.responsibilities.slice(0, 3).join(" • ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: "0.8", paddingLeft: "12px" }}>
            {/* Technical Skills */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Technical Skills
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      marginBottom: "8px",
                      fontSize: "13px",
                      color: "#667eea",
                    }}
                  >
                    Frontend Development
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      lineHeight: "1.4",
                    }}
                  >
                    {data.skills.frontend.join(" • ")}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#667eea",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    Backend & Database
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      lineHeight: "1.4",
                    }}
                  >
                    {data.skills.backend
                      .concat(data.skills.databases)
                      .join(" • ")}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#667eea",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    Tools & Technologies
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      lineHeight: "1.4",
                    }}
                  >
                    {data.skills.tools.join(" • ")}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#667eea",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    Methodologies & Leadership
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      lineHeight: "1.4",
                    }}
                  >
                    {data.skills.methodologies
                      .concat(["Mentoring"])
                      .join(" • ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Entrepreneurial Projects */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Entrepreneurial Experience
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {data.entrepreneurialExperience.map((project, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "16px",
                      borderRadius: "10px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid #48bb78",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ flex: "1", paddingRight: "12px" }}>
                        <div
                          style={{
                            fontWeight: "600",
                            color: "#1A202C",
                            fontSize: "13px",
                            marginBottom: "3px",
                            lineHeight: "1.2",
                          }}
                        >
                          {project.name}
                        </div>
                        <div
                          style={{
                            color: "#48bb78",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          {project.role}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#2D3748",
                          backgroundColor: "#f0fff4",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          fontWeight: "600",
                          textAlign: "center",
                          minWidth: "85px",
                          border: "1px solid #c6f6d5",
                          lineHeight: "1.3",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {(project.duration || "Ongoing").replace(" - ", "\n")}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#4A5568",
                        marginBottom: "8px",
                        lineHeight: "1.4",
                      }}
                    >
                      {project.description}
                    </div>
                    {project.technologies && (
                      <div style={{ fontSize: "10px", color: "#718096" }}>
                        <strong>Tech:</strong> {project.technologies.join(", ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div style={{ marginBottom: "28px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Key Achievements
              </h2>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                    border: "1px solid #e2e8f0",
                    borderLeft: "3px solid #ed8936",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    🚀 Scale Impact
                  </div>
                  <div style={{ color: "#4A5568", fontSize: "11px" }}>
                    Built features for 1M+ user platforms
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                    border: "1px solid #e2e8f0",
                    borderLeft: "3px solid #9f7aea",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    🔄 Career Transition
                  </div>
                  <div style={{ color: "#4A5568", fontSize: "11px" }}>
                    Embedded C → Modern Web Development
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                    border: "1px solid #e2e8f0",
                    borderLeft: "3px solid #48bb78",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    👥 Leadership
                  </div>
                  <div style={{ color: "#4A5568", fontSize: "11px" }}>
                    Led teams up to 6 developers for embedded projects
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                    border: "1px solid #e2e8f0",
                    borderLeft: "3px solid #4299e1",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    💼 Experience
                  </div>
                  <div style={{ color: "#4A5568", fontSize: "11px" }}>
                    {data.totalExperience} in software development
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#1A202C",
                  marginBottom: "12px",
                  borderBottom: "3px solid #667eea",
                  paddingBottom: "6px",
                  margin: "0 0 12px 0",
                }}
              >
                Professional Development
              </h2>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    🎓 Self-Directed Career Transition
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      marginTop: "4px",
                    }}
                  >
                    {data.careerTransition.period} -{" "}
                    {data.careerTransition.description}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      color: "#2D3748",
                      fontSize: "12px",
                    }}
                  >
                    🔗 Portfolio & Projects
                  </div>
                  <div
                    style={{
                      color: "#4A5568",
                      fontSize: "11px",
                      marginTop: "4px",
                    }}
                  >
                    Active GitHub profile with training projects and
                    professional work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
