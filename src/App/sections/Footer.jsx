import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a1a2e",
        color: "#fff",
        padding: "48px 0 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  O
                </span>
              </div>

              <span
                style={{
                  fontWeight: "700",
                  fontSize: "1.2rem",
                }}
              >
                Odiljon.dev
              </span>
            </div>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                lineHeight: "1.8",
                maxWidth: "300px",
              }}
            >
              Full Stack Developer. Kodni san'at kabi yozaman va har bir
              loyihaga butun yuragim bilan kirishaman.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#footer"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#4f46e5";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)";
                      e.currentTarget.style.color = "#9ca3af";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                fontSize: "1rem",
              }}
            >
              Havolalar
            </h4>

            {["Home", "About", "Portfolio", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{
                  display: "block",
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  marginBottom: "10px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a5b4fc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                fontSize: "1rem",
              }}
            >
              Xizmatlar
            </h4>

            {[
              "Frontend Dev",
              "Backend Dev",
              "Full Stack App",
              "Cloud & DevOps",
            ].map((s) => (
              <a
                key={s}
                href="#services"
                style={{
                  display: "block",
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  marginBottom: "10px",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a5b4fc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              fontSize: "0.8rem",
            }}
          >
            © 2026 Odiljon burhanovv. Barcha huquqlar himoyalangan.
          </p>

          <p
            style={{
              color: "#6b7280",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Made with <FiHeart size={12} color="#ef4444" /> in Samarqand
          </p>
        </div>
      </div>

      <style>{`
  @media (max-width: 768px) {
    footer > div > div {
      grid-template-columns: 1fr !important;
      gap: 30px !important;
      text-align: center;
    }

    footer a {
      text-align: center;
    }

    footer > div > div:last-child {
      flex-direction: column !important;
      justify-content: center !important;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    footer {
      padding: 40px 0 20px !important;
    }

    footer p {
      font-size: 0.75rem !important;
    }

    footer h4 {
      font-size: 0.95rem !important;
    }
  }
`}</style>
    </footer>
  );
}