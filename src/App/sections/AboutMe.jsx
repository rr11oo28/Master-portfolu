import { 
  FiDownload, 
  FiCode, 
  FiServer, 
  FiCpu, 
  FiGithub, 
  FiLinkedin 
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import myPhoto from "../../img/photo_2026-06-23_16-49-19.jpg";

const skills = [
  { label: "React / Next.js", pct: 92, icon: <FiCode /> },
  { label: "Node.js / Express", pct: 85, icon: <FiServer /> },
  { label: "TypeScript", pct: 88, icon: <FiCpu /> },
];

const socials = [
  { icon: <FiGithub />, href: "https://github.com" },
  { icon: <FiLinkedin />, href: "https://linkedin.com" },
  { icon: <FaTelegram />, href: "https://t.me" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: "1000px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT - PHOTO */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            className="photo-card"
            style={{
              width: "100%",
              height: "380px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              background: "#f9fafb",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src={myPhoto}
              alt="Odiljon Burhanov"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* SOCIAL ICONS */}
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4b5563",
                  fontSize: "1.1rem",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#111827";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#111827";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.color = "#4b5563";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div
          className="about-info"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#6b7280",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Men haqimda
          </span>

          <h2
            style={{
              fontSize: "2.4rem",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 16px 0",
              lineHeight: 1.2,
            }}
          >
            Full Stack Developer
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "1rem",
              margin: "0 0 32px 0",
              lineHeight: "1.7",
            }}
          >
            Men <strong style={{ color: "#111827" }}>Odiljon Burhanov</strong> — Full Stack dasturchiman. 
            React, Node.js va TypeScript texnologiyalari yordamida zamonaviy, tezkor va xavfsiz web loyihalar barpo etaman.
          </p>

          {/* SKILLS */}
          <div
            style={{
              width: "100%",
              marginBottom: "36px",
            }}
          >
            {skills.map((sk) => (
              <div key={sk.label} style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.9rem",
                    color: "#111827",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "#4b5563", fontSize: "1rem" }}>{sk.icon}</span>
                    {sk.label}
                  </span>
                  <span style={{ color: "#6b7280" }}>{sk.pct}%</span>
                </div>

                <div
                  style={{
                    height: "6px",
                    background: "#f3f4f6",
                    borderRadius: "99px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${sk.pct}%`,
                      height: "100%",
                      background: "#111827",
                      borderRadius: "99px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <a
            href="/CV.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#111827",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "0.9rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#374151";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111827";
            }}
          >
            <span>CV Yuklab olish</span>
            <FiDownload style={{ fontSize: "1rem" }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .about-info {
            align-items: center !important;
            text-align: center !important;
          }

          .photo-card {
            max-width: 280px !important;
            height: 340px !important;
          }
        }
      `}</style>
    </section>
  );
}