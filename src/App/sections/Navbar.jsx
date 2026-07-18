import { useState, useEffect } from "react";

const links = ["Home", "About", "Services", "Portfolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // SMOOTH SCROLL FUNCTION
  const handleScroll = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "0 1px 0 #eee",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1160px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#121213,#7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "700" }}>O</span>
          </div>

          <span style={{ fontWeight: "700", fontSize: "1.15rem", color: "#0d0d0e" }}>
            Odiljon
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden-mobile" style={{ display: "flex", gap: "36px" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleScroll(e, l.toLowerCase())}   // ✅ FIX
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#444",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4f46e5")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")} // ✅ FIX
          className="hidden-mobile"
          style={{
            background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          Bog'lanish
        </a>

        {/* MOBILE */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: "1.4rem",
            cursor: "pointer",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "16px 24px" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleScroll(e, l.toLowerCase())} // ✅ FIX
              style={{
                display: "block",
                padding: "10px 0",
                color: "#444",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
  @media (max-width: 768px) {
    .hidden-mobile {
      display: none !important;
    }

    .show-mobile {
      display: block !important;
    }

    /* MOBILE MENU FIX */
    .mobile-menu {
      background: #fff;
      border-top: 1px solid #eee;
      padding: 20px 24px;
      animation: fadeIn 0.2s ease;
    }

    .mobile-menu a {
      display: block;
      padding: 12px 0;
      font-size: 0.95rem;
      color: #444;
    }

    /* NAVBAR padding fix */
    nav > div {
      padding: 0 16px !important;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
    </nav>
  );
}