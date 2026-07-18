  import { useState } from "react";
  import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from "react-icons/fi";


  export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const [status, setStatus] = useState("idle");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("loading");
      // Simulate server call (replace with real endpoint like EmailJS, Resend, etc.)
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
      <section id="contact" style={{ padding: "96px 0", background: "#f8f9ff" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#4f46e5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Bog'lanish</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#1a1a2e" }}>Keling, Gaplashaylik</h2>
            <p style={{ color: "#888", marginTop: 10 }}>24 soat ichida javob beraman </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 48, alignItems: "start" }}>
            {/* Left — info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <FiMail size={22} />, title: "Email", val: "burhanovv@dev.uz", color: "#4f46e5", bg: "#ede9fe" },
                { icon: <FiPhone size={22} />, title: "Telefon", val: "+998 77 344 52 59", color: "#7c3aed", bg: "#f3e8ff" },
                { icon: <FiMapPin size={22} />, title: "Manzil", val: "Samarqand, O'zbekiston", color: "#059669", bg: "#d1fae5" },
              ].map((c) => (
                <div key={c.title}
                  style={{ background: "#fff", borderRadius: 18, padding: "22px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 18, border: "1px solid #f0f0f0" }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", color: c.color, flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.title}</div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a1a2e", marginTop: 2 }}>{c.val}</div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div style={{ borderRadius: 18, overflow: "hidden", height: 180, background: "#e8e9f0", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e8e9f0", position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop&auto=format"
                  alt="Tashkent map"
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.6) brightness(0.95)" }}
                />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ background: "#fff", borderRadius: 12, padding: "8px 16px", fontWeight: 700, fontSize: "0.85rem", color: "#4f46e5", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                    Samarqand Uz
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{  marginTop: "0px", background: "#fff", borderRadius: 24,  padding: "40px 39px", boxShadow: "0 8px 40px rgba(79,70,229,0.1)", border: "1px solid #f0f0f0" }}>
              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 360, textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <FiCheck size={32} color="#059669" />
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 10 }}>Xabar Yuborildi!</h3>
                  <p style={{ color: "#888", lineHeight: 1.7 }}>Tez orada siz bilan bog'lanaman. Vaqtingiz uchun rahmat</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Ismingiz *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Odiljon burhanov"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e8e9f0", outline: "none", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s", background: "#fafafa", boxSizing: "border-box" }}
                        onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                        onBlur={(e) => (e.target.style.borderColor = "#e8e9f0")} />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="burhanovv@domain.com"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e8e9f0", outline: "none", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s", background: "#fafafa", boxSizing: "border-box" }}
                        onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                        onBlur={(e) => (e.target.style.borderColor = "#e8e9f0")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Mavzu</label>
                    <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Loyiha haqida..."
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e8e9f0", outline: "none", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s", background: "#fafafa", boxSizing: "border-box" }}
                      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                      onBlur={(e) => (e.target.style.borderColor = "#e8e9f0")} />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#555", display: "block", marginBottom: 6 }}>Xabar *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Loyiha tafsilotlari, byudjet va muddatini yozing..."
                      style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1.5px solid #e8e9f0", outline: "none", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif", transition: "border-color 0.2s", background: "#fafafa", resize: "none", boxSizing: "border-box" }}
                      onFocus={(e) => (e.target.style.borderColor = "#4f46e5")}
                      onBlur={(e) => (e.target.style.borderColor = "#e8e9f0")} />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", background: "#fef2f2", padding: "10px 14px", borderRadius: 8 }}>
                      Xatolik yuz berdi. Iltimos qayta urinib ko'ring.
                    </p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: status === "loading" ? "#a5b4fc" : "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", border: "none", borderRadius: 12, padding: "14px 28px", fontWeight: 700, fontSize: "0.95rem", cursor: status === "loading" ? "not-allowed" : "pointer", fontFamily: "'Poppins', sans-serif", boxShadow: "0 6px 20px rgba(79,70,229,0.35)", transition: "all 0.2s" }}>
                    {status === "loading" ? (
                      <>
                        <span style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                        Yuborilmoqda...
                      </>
                    ) : (
                      <><FiSend size={16} /> Xabar Yuborish</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
    @keyframes spin { 
      to { transform: rotate(360deg); } 
    }

    /* TABLET + MOBILE */
    @media (max-width: 768px) {
      #contact > div > div {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
      }

      /* LEFT SIDE */
      #contact > div > div > div:first-child {
        align-items: center !important;
      }

      /* CARD CENTER */
      #contact > div > div > div:first-child > div {
        width: 100% !important;
      }

      /* FORM SIDE */
      #contact form {
        padding: 24px !important;
      }
    }

    /* SMALL MOBILE */
    @media (max-width: 480px) {
      #contact {
        padding: 70px 0 !important;
      }

      #contact h2 {
        font-size: 1.6rem !important;
      }

      #contact form {
        padding: 18px !important;
      }
    }
  `}</style>
      </section>
    );
  }
