// import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import myPhoto from "../../img/photo_2026-06-23_16-49-19.jpg";
const skills = [
  { label: "React / Next.js", pct: 92, color: "#4f46e5" },
  { label: "Node.js / Express", pct: 85, color: "#7c3aed" },
  { label: "TypeScript", pct: 88, color: "#f59e0b" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "360px",
              height: "440px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
            }}

          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "-15px",
                background: "#fff",
                padding: "10px 15px",
                borderRadius: "999px",
                boxShadow: "0 10px 25px rgba(40, 30, 192, 0.938)",
                fontWeight: "600",
              }}
            >
              Available for Work 100%
            </div>
            <img
              src={myPhoto} alt="About"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "-14px",
              width: "360px",
              height: "440px",
              borderRadius: "24px",
              border: "3px solid #4f46e5",
              opacity: 0.25,
              zIndex: -1,
            }}
          />

          <div
            style={{
              position: "absolute",
              right: "-30px",
              top: "70%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {[

            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "#fff",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4f46e5",
                  transition: "0.25s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#4f46e5";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = "#4f46e5";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              fontWeight: "700",
              color: "#4f46e5",
              marginBottom: "0px",
            }}
          >
            About Me
          </p>

          <h2
            style={{
              fontSize: "2.3rem",
              fontWeight: "800",
              color: "#111",
            }}
          >
            Full Stack Developer
          </h2>

          <p
            style={{
              color: "#666",
              marginTop: "0px",
              lineHeight: "1.7",
              maxWidth: "500px",
            }}
          >
            Men Odiljon Burhanov — Full Stack dasturchiman. React, Node.js va
            TypeScript bilan ishlayman.
          </p>

          {/* SKILLS */}
          <div
            style={{
              marginTop: "0px",
              width: "100%",
              maxWidth: "500px",
              textAlign: "left",
            }}
          >
            {skills.map((sk) => (
              <div key={sk.label} style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{sk.label}</span>
                  <span style={{ color: sk.color }}>{sk.pct}%</span>
                </div>

                <div
                  style={{
                    height: "6px",
                    background: "#eee",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      width: `${sk.pct}%`,
                      height: "100%",
                      background: sk.color,
                      borderRadius: "20px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="/CV.pdf"
            style={{
              display: "inline-block",
              marginTop: "25px",
              background: "#4f46e5",
              color: "#fff",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            ⬇ CV Yuklab olish
          </a>
        </div>
      </div>

      <style>{`
  @media (max-width: 768px) {
    #about > div {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
    }

    #about {
      padding: 60px 15px !important;
    }

    /* LEFT side fix */
    #about > div > div:first-child {
      display: flex !important;
      justify-content: center !important;
    }

    /* IMAGE SIZE MOBILE */
    #about img {
      width: 280px !important;
      height: 360px !important;
      object-fit: cover;
    }

    /* RIGHT side center */
    #about > div > div:last-child {
      align-items: center !important;
      text-align: center !important;
    }

    #about p {
      max-width: 100% !important;
    }
  }

  @media (max-width: 480px) {
    #about img {
      width: 240px !important;
      height: 320px !important;
    }
  }
`}</style>
    </section>
  );
}