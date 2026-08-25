import { useState } from "react";
import { FiGithub, FiExternalLink, FiBriefcase } from "react-icons/fi";

const tabs = ["All", "Frontend", "Fullstack", "Backend"];

const items = [
  {
    title: "ShopFlow",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · Stripe · Tailwind",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
  {
    title: "ChatSync",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop&auto=format",
    tag: "React · Socket.io · Express",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
  {
    title: "DataViz Dashboard",
    cat: "Frontend",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    tag: "React · GraphQL · Chart.js",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
  {
    title: "TaskMaster Pro",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · Firebase · Redux",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
  {
    title: "High-Load API Gateway",
    cat: "Backend",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
    tag: "Node.js · Redis · PostgreSQL",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
  {
    title: "Portfolio AI Assistant",
    cat: "Frontend",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · OpenAI API · Framer",
    demo: "#",
    github: "https://github.com/rr11oo28",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? items
      : items.filter((it) => it.cat === active);

  return (
    <section
      id="portfolio"
      style={{
        padding: "100px 0",
        background: "#ffffff",
        color: "#111827",
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
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            <FiBriefcase style={{ color: "#111827" }} /> Portfolio
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
            Mening Loyihalarim
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
            Oxirgi vaqtda ishlab chiqilgan eng sara frontend, backend va fullstack dasturlarim.
          </p>
        </div>

        {/* Tabs Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "52px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => {
            const isActive = active === t;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "12px",
                  border: "1px solid",
                  borderColor: isActive ? "#111827" : "#e5e7eb",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                  transition: "all 0.25s ease",
                  background: isActive ? "#111827" : "#ffffff",
                  color: isActive ? "#ffffff" : "#4b5563",
                  boxShadow: isActive
                    ? "0 10px 20px rgba(17, 24, 39, 0.12)"
                    : "none",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.title}
              className="portfolio-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image Container with Hover Overlay */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  overflow: "hidden",
                  backgroundColor: "#f3f4f6",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="portfolio-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Dark Overlay */}
                <div
                  className="portfolio-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(17, 24, 39, 0.65)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    opacity: 0,
                    transition: "all 0.3s ease",
                  }}
                >
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#ffffff",
                      color: "#111827",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#111827",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.2)",
                      padding: "10px 18px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <FiGithub size={16} /> Code
                  </a>
                </div>
              </div>

              {/* Card Details */}
              <div
                style={{
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
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
                    {item.cat}
                  </span>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      color: "#111827",
                      margin: "4px 0 8px 0",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "500",
                    color: "#4b5563",
                    margin: 0,
                    backgroundColor: "#f9fafb",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #f3f4f6",
                    display: "inline-block",
                    width: "fit-content",
                  }}
                >
                  {item.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES & HOVER ANIMATIONS */}
      <style>{`
        /* Card & Image Animations */
        .portfolio-card:hover {
          transform: translateY(-8px);
          border-color: #111827 !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.08);
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        /* Mobile Adjustments */
        @media (max-width: 640px) {
          #portfolio {
            padding: 60px 0 !important;
          }
        }

        /* Mobile Touch fallback (Overlay hamma vaqt ko'rinadi) */
        @media (hover: none) {
          .portfolio-overlay {
            opacity: 1 !important;
            background: linear-gradient(
              to top,
              rgba(17, 24, 39, 0.85) 0%,
              transparent 100%
            ) !important;
            align-items: flex-end !important;
            padding-bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}