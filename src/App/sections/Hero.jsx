import heroImg from "../../img/man.png";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
export default function Hero() {
    return (
        <section
            id="home"
            style={{
                paddingTop: "68px",
                background:
                    "linear-gradient(135deg, #f8f8ff 0%, #ede9fe 40%, #f0fdf4 100%)",
                minHeight: "100px",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background circles */}
            <div
                style={{
                    position: "absolute",
                    top: "-80px",
                    right: "-80px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "rgba(79,70,229,0.08)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: "-60px",
                    left: "-60px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(124,58,237,0.07)",
                }}
            />

            <div
                data-hero-grid
                style={{
                    maxWidth: "1160px",
                    margin: "0 auto",
                    padding: "80px 24px",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "60px",
                    alignItems: "center",
                    width: "100%",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* LEFT */}
                <div>


                    <h1
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4rem)",
                            fontWeight: "800",
                            color: "#1a1a2e",
                            lineHeight: "1.1",
                            marginBottom: "20px",
                        }}
                    >
                        Full Stack <br />
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg,#4f46e5,#7c3aed)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Developer
                        </span>
                    </h1>

                    <p
                        style={{
                            color: "#666",
                            lineHeight: "1.8",
                            marginBottom: "35px",
                            maxWidth: "500px",
                        }}
                    >
                        Men zamonaviy va tezkor web ilovalar yaratuvchi
                        dasturchiman. React, Node.js, JavaScript va
                        zamonaviy texnologiyalar bilan ishlayman.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="#home"
                            style={{
                                background:
                                    "linear-gradient(135deg,#4f46e5,#7c3aed)",
                                color: "#fff",
                                padding: "14px 28px",
                                borderRadius: "12px",
                                textDecoration: "none",
                                fontWeight: "600",
                                transition: "0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-3px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "none";
                            }}
                        >
                            Download CV
                        </a>

                        <a
                            href="#contact"
                            style={{
                                border: "2px solid #4f46e5",
                                color: "#4f46e5",
                                padding: "12px 28px",
                                borderRadius: "12px",
                                textDecoration: "none",
                                fontWeight: "600",
                                transition: "0.3s",
                                background: "#fff",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                    "#4f46e5";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                    "#fff";
                                e.currentTarget.style.color =
                                    "#4f46e5";
                            }}
                        >
                            Contact Me
                        </a>
                    </div>


                </div>

                {/* RIGHT */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: "420px",
                            height: "420px",
                            borderRadius: "50%",
                            overflow: "hidden",
                            background: "linear-gradient(135deg,#ddd6fe,#c7d2fe)",
                        }}
                    >
                        <img
                            src={heroImg}
                            alt="Hero"
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
                            position: "absolute",
                            right: "-40px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                        }}
                    >
                        {[
                            { icon: <FiGithub size={20} />, link: "https://github.com/rr11oo28" },
                            { icon: <FaTelegramPlane size={20} />, link: "https://t.me/burhanov123" },
                            { icon: <FiInstagram size={20} />, link: "https://www.instagram.com/burxanovzz/" },
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "14px",
                                    background: "#fff",
                                    color: "#4f46e5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                                    transition: "0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#4f46e5";
                                    e.currentTarget.style.color = "#fff";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "#4f46e5";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
  @media (max-width: 768px) {
    [data-hero-grid] {
      grid-template-columns: 1fr !important;
      text-align: center;
      gap: 40px !important;
      padding: 60px 20px !important;
    }

    /* TEXT CENTER FIX */
    [data-hero-grid] > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    [data-hero-grid] p {
      max-width: 100% !important;
    }

    /* IMAGE FIX */
    [data-hero-grid] > div:last-child > div:first-child {
      width: 300px !important;
      height: 300px !important;
    }

    /* SOCIAL ICONS FIX */
    [data-hero-grid] > div:last-child > div:last-child {
      right: 0 !important;
      top: auto !important;
      bottom: -70px !important;
      flex-direction: row !important;
      transform: none !important;
      justify-content: center;
      width: 100%;
    }

    /* BACKGROUND CIRCLES HIDE (clean mobile) */
    section#home > div {
      display: none !important;
    }
  }

  @media (max-width: 480px) {
    [data-hero-grid] > div:last-child > div:first-child {
      width: 240px !important;
      height: 240px !important;
    }

    [data-hero-grid] h1 {
      font-size: 2.2rem !important;
    }
  }
`}</style>
        </section>
    );
}