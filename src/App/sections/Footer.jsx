import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiHeart,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#090d16",
        color: "#ffffff",
        padding: "64px 0 28px",
        borderTop: "1px solid #1f2937",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top Section */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "52px",
          }}
        >
          {/* Brand & Info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#090d16",
                    fontWeight: "800",
                    fontSize: "1.1rem",
                  }}
                >
                  O
                </span>
              </div>

              <span
                style={{
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                }}
              >
                Odiljon.dev
              </span>
            </div>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.9rem",
                lineHeight: "1.7",
                maxWidth: "320px",
                marginBottom: "24px",
              }}
            >
              Full Stack Developer. Yuqori sifatli, tezkor va zamonaviy raqamli
              yechimlarni ishlab chiqaman.
            </p>

            {/* Social Icons */}
            <div
              className="social-links"
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {[
                { Icon: FiGithub, link: "https://github.com" },
                { Icon: FiLinkedin, link: "https://linkedin.com" },
                { Icon: FiTwitter, link: "https://twitter.com" },
                { Icon: FiInstagram, link: "https://instagram.com" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                fontSize: "0.95rem",
                color: "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Navigatsiya
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Home", "About", "Portfolio", "Contact"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="footer-link"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                fontSize: "0.95rem",
                color: "#ffffff",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Xizmatlar
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Frontend Dev",
                "Backend Dev",
                "Full Stack App",
                "Cloud & DevOps",
              ].map((s) => (
                <a
                  key={s}
                  href="#contact"
                  className="footer-link"
                  style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  {s} <FiArrowUpRight size={13} style={{ opacity: 0.6 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid #1f2937",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              fontSize: "0.85rem",
              margin: 0,
            }}
          >
            © 2026 Odiljon Burhanov. Barcha huquqlar himoyalangan.
          </p>

          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              margin: 0,
            }}
          >
            Made with <FiHeart size={14} color="#ef4444" fill="#ef4444" /> in Samarqand
          </p>
        </div>
      </div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #111827;
          border: 1px solid #1f2937;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          background: #ffffff;
          color: #090d16;
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }

          .footer-grid > div {
            display: flex;
            flexDirection: column;
            align-items: center;
            text-align: center;
          }

          .footer-grid p {
            max-width: 100% !important;
          }

          .footer-link:hover {
            transform: translateY(-2px);
          }

          .footer-bottom {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          footer {
            padding: 48px 0 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}