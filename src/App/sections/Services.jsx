import { useState } from "react";
import {
  FaReact,
  FaServer,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiX,
  FiCheckCircle,
  FiCheck,
  FiSend,
} from "react-icons/fi";

const services = [
  {
    icon: <FaReact />,
    title: "Frontend Dev",
    desc: "React, Next.js va TypeScript bilan zamonaviy, tezkor va responsiv UI yarataman.",
    details:
      "React, Next.js va TypeScript yordamida zamonaviy web ilovalar yarataman. Landing Page, Dashboard, Admin Panel, Portfolio va E-commerce loyihalarini professional darajada ishlab chiqaman.",
    tag: "UI / UX Focus",
    features: [
      "Pixel-Perfect & Responsive Dizayn",
      "SEO & Tezlik optimizatsiyasi (90+ PageSpeed)",
      "State Management (Redux / Zustand)",
      "Animation & Smooth Transitions",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend Dev",
    desc: "Node.js, Express va PostgreSQL bilan ishonchli REST va GraphQL APIlar quraman.",
    details:
      "Node.js, Express, PostgreSQL va MongoDB bilan xavfsiz va tezkor backend tizimlar yarataman. REST API, Authentication, Database va Server optimizatsiyasini amalga oshiraman.",
    tag: "High Security",
    features: [
      "Xavfsiz JWT & OAuth Autentifikatsiya",
      "Database Optimizatsiyasi (PostgreSQL/MongoDB)",
      "RESTful API & GraphQL Integratsiya",
      "Clean Architecture & Microservices",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Full Stack App",
    desc: "Boshdan oxirigacha — dizayndan deploy gacha butun ilovani yetkazib beraman.",
    details:
      "Frontend va Backend qismlarini birlashtirib to'liq ishlaydigan web ilovalar yarataman. Loyihani dizayndan boshlab serverga joylashgacha tayyorlab beraman.",
    tag: "End-to-End",
    features: [
      "To'liq arxitektura va loyihalash",
      "Frontend va Backend uzviy integratsiyasi",
      "Admin Panel & Foydalanuvchi kabineti",
      "Serverga joylash (Production Deployment)",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "AWS, Docker va CI/CD bilan ilovangizni bulutga chiqaraman va avtomatlashtiraman.",
    details:
      "Docker, AWS, Vercel va CI/CD texnologiyalari yordamida ilovalarni serverga joylashtirish, monitoring qilish va avtomatlashtirish xizmatlarini ko'rsataman.",
    tag: "Automation",
    features: [
      "Dockerization & Containerization",
      "CI/CD Pipeline avtomatlashtirish",
      "AWS / Vercel Cloud Server sozlamalari",
      "Nginx & SSL Sertifikat integratsiyasi",
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="services"
        style={{
          padding: "100px 0",
          background: "#ffffff",
          color: "#111827",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "20px",
                backgroundColor: "#f3f4f6",
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "#374151",
                marginBottom: "16px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <FiCheckCircle style={{ color: "#111827" }} /> Xizmatlarim
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "800",
                color: "#111827",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              Nimalarni taklif qilaman?
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "1.05rem",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              G'oyalaringizni yuqori unumdorlik va mukammal dizaynga ega raqamli
              mahsulotga aylantiraman.
            </p>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="service-card"
                onClick={() => setSelected(s)}
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "36px 28px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      className="service-icon"
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background: "#111827",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.6rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {s.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background: "#f3f4f6",
                        color: "#374151",
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "1.25rem",
                      color: "#111827",
                      marginBottom: "12px",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#6b7280",
                      lineHeight: "1.7",
                      marginBottom: "24px",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>

                <div
                  className="card-action"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    color: "#111827",
                  }}
                >
                  Batafsil ma'lumot <FiArrowRight className="arrow-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL WINDOW */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(17, 24, 39, 0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            padding: "20px",
            animation: "modalOverlayFade 0.25s ease-out forwards",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "560px",
              background: "#ffffff",
              borderRadius: "28px",
              padding: "36px",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              position: "relative",
              overflow: "hidden",
              animation: "modalContentZoom 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#f3f4f6",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#111827",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#111827";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
                e.currentTarget.style.color = "#111827";
              }}
            >
              <FiX size={20} />
            </button>

            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "18px",
                  background: "#111827",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  flexShrink: 0,
                }}
              >
                {selected.icon}
              </div>

              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {selected.tag}
                </span>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "#111827",
                    margin: "2px 0 0 0",
                  }}
                >
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <p
              style={{
                color: "#4b5563",
                lineHeight: "1.65",
                fontSize: "0.95rem",
                marginBottom: "24px",
              }}
            >
              {selected.details}
            </p>

            {/* Features List */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid #f3f4f6",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#111827",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                }}
              >
                Imkoniyatlar va Afzalliklar:
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {selected.features?.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.88rem",
                      color: "#374151",
                    }}
                  >
                    <div
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        backgroundColor: "#111827",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        flexShrink: 0,
                      }}
                    >
                      <FiCheck />
                    </div>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.3fr",
                gap: "12px",
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  border: "1px solid #d1d5db",
                  background: "#ffffff",
                  color: "#374151",
                  padding: "12px 20px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
              >
                Yopish
              </button>

              <a
                href="#contact"
                onClick={() => setSelected(null)}
                style={{
                  background: "#111827",
                  color: "#ffffff",
                  padding: "12px 20px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#374151";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                }}
              >
                <FiSend size={15} /> Buyurtma berish
              </a>
            </div>
          </div>
        </div>
      )}

      {/* STYLES & ANIMATIONS */}
      <style>{`
        /* Service Cards Hover */
        .service-card:hover {
          transform: translateY(-8px);
          border-color: #111827 !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
        }

        .service-card:hover .service-icon {
          transform: scale(1.06) rotate(-2deg);
        }

        .service-card:hover .arrow-icon {
          transform: translateX(6px);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        /* Modal Keyframes */
        @keyframes modalOverlayFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalContentZoom {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Mobile Adaptability */
        @media (max-width: 540px) {
          #services {
            padding: 60px 0 !important;
          }
          div[style*="max-width: 560px"] {
            padding: 24px !important;
          }
          div[style*="grid-template-columns: 1fr 1.3fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}