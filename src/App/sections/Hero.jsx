import React from "react";
import heroImg from "../../img/man.png";
import {
  FiGithub,
  FiInstagram,
  FiMapPin,
  FiCode,
  FiCheckCircle,
  FiStar,
  FiAward,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px 40px",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-container"
      >
        {/* CHAP TOMON: MA'LUMOTLAR */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "20px",
              backgroundColor: "#f3f4f6",
              fontSize: "0.875rem",
              fontWeight: "500",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <FiMapPin style={{ fontSize: "1rem" }} /> Samarkand, Uzbekistan
          </div>

          {/* Sarlavha */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              margin: "0 0 16px 0",
              letterSpacing: "-0.02em",
            }}
          >
            Full Stack <br /> Developer
          </h1>

          {/* Qisqacha ta'rif */}
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.6",
              color: "#4b5563",
              margin: "0 0 24px 0",
              maxWidth: "480px",
            }}
          >
            Men zamonaviy, tezkor va foydalanuvchilar uchun qulay bo'lgan web
            ilovalar yarataman. Sifatli kod va toza dizayn — asosiy tamoyilim.
          </p>

          {/* Texnologiyalar ro'yxati */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            {[
              "React.js",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "Tailwind",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Tugmalar */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <a
              href="/CV.pdf"
              download
              style={{
                backgroundColor: "#111827",
                color: "#ffffff",
                padding: "12px 26px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#111827")
              }
            >
              Download CV
            </a>

            <a
              href="#contact"
              style={{
                backgroundColor: "#ffffff",
                color: "#111827",
                border: "1px solid #d1d5db",
                padding: "12px 26px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
                e.currentTarget.style.borderColor = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.borderColor = "#d1d5db";
              }}
            >
              Contact Me
            </a>
          </div>

          {/* Statistik ko'rsatkichlar */}
          <div
            style={{
              display: "flex",
              gap: "36px",
              paddingTop: "20px",
              borderTop: "1px solid #f3f4f6",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>2+</div>
              <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                Yillik tajriba
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>15+</div>
              <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                Bajarilgan loyihalar
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>100%</div>
              <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>Natija</div>
            </div>
          </div>
        </div>

        {/* O'NG TOMON: RASM, FLOATING CARDS VA IJTIMOIY TARMOQLAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: "420px",
          }}
        >
          {/* Orqa fondagi bezak halqasi (Aylanuvchi ko'rinish) */}
          <div
            style={{
              position: "absolute",
              width: "390px",
              height: "390px",
              borderRadius: "50%",
              border: "1px dashed #e5e7eb",
              zIndex: 0,
            }}
          />

          {/* Rasm atrofi */}
          <div
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "#f3f4f6",
              border: "3px solid #e5e7eb",
              position: "relative",
              zIndex: 1,
            }}
            className="hero-image-wrapper"
          >
            <img
              src={heroImg}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* O'NG TEPADA: Bajarilgan loyihalar kartasi */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "-10px",
              backgroundColor: "#ffffff",
              padding: "10px 16px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 2,
            }}
            className="floating-card-top"
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiCheckCircle style={{ color: "#111827", fontSize: "1.1rem" }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                15+ Loyihalar
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#6b7280",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <FiStar style={{ color: "#111827" }} /> 5.0 Reyting
              </div>
            </div>
          </div>

          {/* CHAP PASTDA: Clean Code kartasi */}
          <div
            style={{
              position: "absolute",
              bottom: "15px",
              left: "-15px",
              backgroundColor: "#ffffff",
              padding: "10px 16px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 2,
            }}
            className="floating-card-bottom"
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                backgroundColor: "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiCode style={{ fontSize: "1.1rem" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "#6b7280" }}>
                Yo'nalish
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                Clean Code
              </div>
            </div>
          </div>

          {/* O'NG PASTDA: Tajriba kartasi */}
          <div
            style={{
              position: "absolute",
              bottom: "-10px",
              right: "40px",
              backgroundColor: "#ffffff",
              padding: "8px 14px",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              border: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 2,
            }}
            className="floating-card-exp"
          >
            <FiAward style={{ fontSize: "1.1rem", color: "#111827" }} />
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              2+ Yil Tajriba
            </span>
          </div>

          {/* IJTIMOIY TARMOQLAR TUGMALARI */}
          <div
            style={{
              position: "absolute",
              right: "-40px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              zIndex: 2,
            }}
            className="hero-socials"
          >
            {[
              {
                icon: <FiGithub size={18} />,
                url: "https://github.com/rr11oo28",
              },
              {
                icon: <FaTelegramPlane size={18} />,
                url: "https://t.me/burhanov123",
              },
              {
                icon: <FiInstagram size={18} />,
                url: "https://www.instagram.com/burxanovzz/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#111827";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Telefon va planshetlar uchun moslashuvchanlik */}
      <style>{`
        @media (max-width: 868px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-container > div:first-child {
            align-items: center !important;
          }
          .hero-socials {
            position: static !important;
            flex-direction: row !important;
            margin-top: 20px;
          }
          .floating-card-top, .floating-card-bottom, .floating-card-exp {
            display: none !important;
          }
          .hero-image-wrapper {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}