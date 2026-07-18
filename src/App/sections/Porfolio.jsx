import { useState } from "react";

const tabs = ["All", "Frontend", "Fullstack", "Backend"];

const items = [
  {
    title: "ShopFlow",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · Stripe",
  },
  {
    title: "ChatSync",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop&auto=format",
    tag: "React · Socket.io",
  },
  {
    title: "DataViz",
    cat: "Frontend",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    tag: "React · GraphQL",
  },
  {
    title: "TaskMaster Pro",
    cat: "Fullstack",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · Firebase",
  },
  {
    title: "API Gateway",
    cat: "Backend",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
    tag: "Node.js · Redis",
  },
  {
    title: "Portfolio AI",
    cat: "Frontend",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format",
    tag: "Next.js · GPT-4",
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
        padding: "96px 0",
        background: "#fff",
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
        <div
          style={{
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#4f46e5",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Portfolio
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              fontWeight: "800",
              color: "#1a1a2e",
            }}
          >
            Mening Loyihalarim
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              style={{
                padding: "9px 22px",
                borderRadius: "99px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.875rem",
                transition: "0.3s",
                background:
                  active === t
                    ? "linear-gradient(135deg,#4f46e5,#7c3aed)"
                    : "#f3f4f6",
                color: active === t ? "#fff" : "#555",
                boxShadow:
                  active === t
                    ? "0 4px 14px rgba(79,70,229,0.3)"
                    : "none",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(300px,1fr))",
            gap: "28px",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#fff",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 48px rgba(79,70,229,0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "200px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />

                <div
                  className="portfolio-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom,transparent 50%,rgba(79,70,229,0.85))",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px",
                    opacity: 0,
                    transition: "0.3s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        background: "#fff",
                        color: "#4f46e5",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        fontSize: "0.75rem",
                        textDecoration: "none",
                      }}
                    >
                      Demo
                    </a>

                    <a
                      href="#"
                      style={{
                        background:
                          "rgba(255,255,255,0.2)",
                        color: "#fff",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        fontSize: "0.75rem",
                        textDecoration: "none",
                        border:
                          "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "700",
                    fontSize: "1rem",
                    color: "#1a1a2e",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#888",
                  }}
                >
                  {item.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
  @media (max-width: 768px) {
    #portfolio {
      padding: 70px 0 !important;
    }

    /* GRID FIX */
    #portfolio div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }

    /* CARD FIX */
    #portfolio img {
      height: 180px !important;
    }
  }

  /* MOBILE TOUCH FIX (hover yo‘q bo‘lgani uchun) */
  @media (hover: none) {
    .portfolio-overlay {
      opacity: 1 !important;
      background: linear-gradient(
        to bottom,
        transparent 30%,
        rgba(79,70,229,0.85)
      ) !important;
    }
  }

  @media (max-width: 480px) {
    #portfolio img {
      height: 160px !important;
    }

    #portfolio h2 {
      font-size: 1.6rem !important;
    }
  }
`}</style>
    </section>
  );
}