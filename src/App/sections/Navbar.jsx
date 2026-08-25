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
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "#ffffff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid #f3f4f6",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.03)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
        }}
      >
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ color: "#fff", fontWeight: "700", fontSize: "1.05rem" }}>O</span>
          </div>

          <span style={{ fontWeight: "700", fontSize: "1.1rem", color: "#111827", letterSpacing: "-0.01em" }}>
            Odiljon
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden-mobile" style={{ display: "flex", gap: "32px" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleScroll(e, l.toLowerCase())}
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#4b5563",
                textDecoration: "none",
                transition: "all 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="hidden-mobile"
          style={{
            background: "#111827",
            color: "#fff",
            padding: "9px 20px",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "0.875rem",
            textDecoration: "none",
            transition: "all 0.2s ease",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#374151";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#111827";
          }}
        >
          Bog'lanish
        </a>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "#f3f4f6",
            border: "none",
            borderRadius: "8px",
            width: "38px",
            height: "38px",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            color: "#111827",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => handleScroll(e, l.toLowerCase())}
              style={{
                display: "block",
                padding: "12px 0",
                color: "#374151",
                fontWeight: "500",
                fontSize: "0.95rem",
                textDecoration: "none",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {l}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            style={{
              display: "block",
              marginTop: "16px",
              textAlign: "center",
              background: "#111827",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Bog'lanish
          </a>
        </div>
      )}

      <style>{`
  @media (max-width: 768px) {
    .hidden-mobile {
      display: none !important;
    }

    .show-mobile {
      display: flex !important;
    }

    /* MOBILE MENU STYLING */
    .mobile-menu {
      background: #ffffff;
      border-bottom: 1px solid #e5e7eb;
      padding: 12px 24px 20px 24px;
      animation: slideDown 0.2s ease-out;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    }

    nav > div {
      padding: 0 16px !important;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
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