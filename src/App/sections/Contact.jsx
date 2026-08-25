import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await new Promise((res) => setTimeout(res, 1400));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            <FiMessageSquare style={{ color: "#111827" }} /> Bog'lanish
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "800",
              color: "#111827",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Keling, Gaplashaylik
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
            Loyiha, hamkorlik yoki takliflar bo'yicha 24 soat ichida javob beraman.
          </p>
        </div>

        {/* Content Layout */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left Side: Info Cards & Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: <FiMail size={20} />, title: "Email", val: "burhanovv@dev.uz" },
              { icon: <FiPhone size={20} />, title: "Telefon", val: "+998 77 344 52 59" },
              { icon: <FiMapPin size={20} />, title: "Manzil", val: "Samarqand, O'zbekiston" },
            ].map((c) => (
              <div
                key={c.title}
                className="contact-card"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "12px",
                    background: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#111827",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      color: "#111827",
                      marginTop: "2px",
                    }}
                  >
                    {c.val}
                  </div>
                </div>
              </div>
            ))}

            {/* Map Box */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "190px",
                background: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #e5e7eb",
                position: "relative",
                marginTop: "8px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop&auto=format"
                alt="Samarqand xaritasi"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%) brightness(0.9)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(17, 24, 39, 0.15)",
                }}
              >
                <div
                  style={{
                    background: "#111827",
                    color: "#ffffff",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <FiMapPin size={14} /> Samarqand, UZ
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
            }}
          >
            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "360px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    border: "1px solid #111827",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <FiCheck size={28} color="#111827" />
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#111827",
                    marginBottom: "8px",
                  }}
                >
                  Xabar Yuborildi!
                </h3>
                <p style={{ color: "#6b7280", lineHeight: "1.6", maxWidth: "300px" }}>
                  Murojaatingiz qabul qilindi. Tez orada siz bilan bog'lanaman.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>
                      Ismingiz *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Odiljon Burhanov"
                      className="custom-input"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="burhanovv@domain.com"
                      className="custom-input"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>
                    Mavzu
                  </label>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Loyiha haqida..."
                    className="custom-input"
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>
                    Xabar *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Loyiha tafsilotlari, byudjet va muddatini yozing..."
                    className="custom-input"
                    style={{ resize: "none" }}
                  />
                </div>

                {status === "error" && (
                  <p
                    style={{
                      color: "#dc2626",
                      fontSize: "0.85rem",
                      background: "#fef2f2",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid #fee2e2",
                    }}
                  >
                    Xatolik yuz berdi. Iltimos qayta urinib ko'ring.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "#111827",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "12px",
                    padding: "14px 28px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    boxShadow: "0 10px 20px rgba(17, 24, 39, 0.12)",
                    transition: "all 0.25s ease",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") e.currentTarget.style.backgroundColor = "#1f2937";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "loading") e.currentTarget.style.backgroundColor = "#111827";
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span
                        style={{
                          width: "18px",
                          height: "18px",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "#ffffff",
                          borderRadius: "50%",
                          animation: "spin 0.7s linear infinite",
                          display: "inline-block",
                        }}
                      />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Xabar Yuborish
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* STYLES & ANIMATIONS */}
      <style>{`
        @keyframes spin { 
          to { transform: rotate(360deg); } 
        }

        .custom-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          outline: none;
          font-size: 0.9rem;
          color: #111827;
          background: #f9fafb;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .custom-input:focus {
          border-color: #111827;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(17, 24, 39, 0.05);
        }

        .contact-card:hover {
          border-color: #111827;
          transform: translateY(-2px);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          #contact {
            padding: 60px 0 !important;
          }
          #contact form {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}