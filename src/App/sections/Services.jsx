import { useState } from "react";
import {
  FaReact,
  FaServer,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: <FaReact />,
    title: "Frontend Dev",
    desc: "React, Next.js va TypeScript bilan zamonaviy, tezkor va responsiv UI yarataman. 100foiz ishonchli",
    details:
      "React, Next.js va TypeScript yordamida zamonaviy web ilovalar yarataman. Landing Page, Dashboard, Admin Panel, Portfolio va E-commerce loyihalarini professional darajada ishlab chiqaman.",
    color: "#4f46e5",
    bg: "#ede9fe",
  },
  {
    icon: <FaServer />,
    title: "Backend Dev",
    desc: "Node.js, Express va PostgreSQL bilan ishonchli REST va GraphQL APIlar quraman.",
    details:
      "Node.js, Express, PostgreSQL va MongoDB bilan xavfsiz va tezkor backend tizimlar yarataman. REST API, Authentication, Database va Server optimizatsiyasini amalga oshiraman.",
    color: "#7c3aed",
    bg: "#f3e8ff",
  },
  {
    icon: <FaMobileAlt />,
    title: "Full Stack App",
    desc: "Boshdan oxirigacha — dizayndan deploy gacha butun ilovani yetkazib beraman.",
    details:
      "Frontend va Backend qismlarini birlashtirib to'liq ishlaydigan web ilovalar yarataman. Loyihani dizayndan boshlab serverga joylashgacha tayyorlab beraman.",
    color: "#059669",
    bg: "#d1fae5",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    desc: "AWS, Docker va CI/CD bilan ilovangizni bulutga chiqaraman va avtomatlashtiraman.",
    details:
      "Docker, AWS, Vercel va CI/CD texnologiyalari yordamida ilovalarni serverga joylashtirish, monitoring qilish va avtomatlashtirish xizmatlarini ko'rsataman.",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="services"
        style={{
          padding: "96px 0",
          background: "#f8f9ff",
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
              marginBottom: "60px",
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
              Xizmatlar
            </p>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: "800",
                color: "#1a1a2e",
              }}
            >
              Mening Xizmatlarim
            </h2>

            <p
              style={{
                color: "#888",
                marginTop: "12px",
                maxWidth: "480px",
                marginInline: "auto",
              }}
            >
              Sizning loyihangizni haqiqatga aylantirish uchun kerakli
              hamma narsa
            </p>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                  transition: "0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 48px rgba(79,70,229,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(0,0,0,0.06)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    color: s.color,
                    marginBottom: "20px",
                  }}
                >
                  {s.icon}
                </div>

                <h3
                  style={{
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    color: "#1a1a2e",
                    marginBottom: "10px",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#777",
                    lineHeight: "1.75",
                  }}
                >
                  {s.desc}
                </p>

                <div
                  onClick={() => setSelected(s)}
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: s.color,
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  Batafsil <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            animation: "fadeBg .3s ease",
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "550px",
              background: "#fff",
              borderRadius: "24px",
              padding: "35px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "18px",
                background: selected.bg,
                color: selected.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                marginBottom: "20px",
              }}
            >
              {selected.icon}
            </div>

            <h2
              style={{
                color: "#1a1a2e",
                marginBottom: "15px",
              }}
            >
              {selected.title}
            </h2>

            <p
              style={{
                color: "#666",
                lineHeight: "1.8",
              }}
            >
              {selected.details}
            </p>

            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: "25px",
                border: "none",
                background: selected.color,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Yopish
            </button>
            <style>{`
  /* MOBILE FIX */
  @media (max-width: 768px) {
    #services {
      padding: 70px 0 !important;
    }

    /* GRID FIX */
    #services div[style*="grid-template-columns"] {
      grid-template-columns: 1fr !important;
      gap: 18px !important;
    }

    /* CARD FIX */
    #services h3 {
      font-size: 1rem !important;
    }

    #services p {
      font-size: 0.85rem !important;
    }
  }

  /* TOUCH DEVICE (hover yo‘q) */
  @media (hover: none) {
    #services div[style*="box-shadow"] {
      transform: none !important;
    }
  }

  /* MODAL FIX */
  @media (max-width: 480px) {
    #services + div > div {
      padding: 22px !important;
      max-width: 92% !important;
      border-radius: 18px !important;
    }

    #services + div h2 {
      font-size: 1.4rem !important;
    }

    #services + div p {
      font-size: 0.9rem !important;
    }
  }
`}</style>
          </div>
        </div>
      )}
    </>
  );
}