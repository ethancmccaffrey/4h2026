/* ============================================================
   AVENMARK DIGITAL — STRUCTURED HERO SYSTEM (STABLE)
============================================================ */

/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Lovelo", "Montserrat", sans-serif;
    background: #E8DCC5;
    color: #103159;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* PAGE WRAPPER */
.page-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* ============================================================
   HEADER (UNCHANGED STRUCTURE, STABLE)
============================================================ */

.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #E8DCC5;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 12px 16px;
    z-index: 1000;
}

.header-left {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    align-items: center;
}

.header-logo {
    height: clamp(45px, 6vw, 75px);
}

.title-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.name,
.slogan {
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    white-space: nowrap;
    color: #103159;
}

.name {
    font-size: clamp(14px, 2.2vw, 26px);
}

.slogan {
    font-size: clamp(12px, 1.5vw, 18px);
    opacity: 0.9;
}

.header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
}

.nav-item {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: #103159;
    font-size: clamp(12px, 2vw, 20px);
}

.nav-item:hover {
    opacity: 0.7;
}

/* ============================================================
   HERO — CONTROLLED GRID ARCHITECTURE (FIXED)
============================================================ */

.hero {
    position: relative;
    width: 100%;
    min-height: 100vh;

    padding-top: 110px;
    padding-bottom: 60px;

    display: grid;
    grid-template-rows: auto auto auto;
    justify-items: center;
    align-items: center;

    background: #E8DCC5;
    overflow: hidden;
}

/* GRID BACKDROP */
.hero-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(16,49,89,0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,49,89,0.12) 1px, transparent 1px);

    background-size: 34px 34px;

    opacity: 0.5;
    pointer-events: none;
}

/* IMAGES — NO ANGLE, CLEAN PREMIUM */
.hero-image {
    position: absolute;
    width: clamp(240px, 32vw, 520px);
    height: auto;

    border-radius: 0;
    box-shadow: 0 20px 50px rgba(0,0,0,0.25);
    object-fit: cover;
}

.hero-image-top {
    top: 140px;
    left: 40px;
}

.hero-image-bottom {
    bottom: 80px;
    right: 40px;
}

/* ============================================================
   MANIFESTO (CENTER ZONE)
============================================================ */

.hero-manifesto {
    z-index: 2;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 14px;
}

.manifesto-line {
    font-size: clamp(28px, 4vw, 64px);
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: 1.2;
    color: #103159;
}

/* ============================================================
   LOWER SECTION (VISIBLE + SAFE OUTSIDE GRID COLLAPSE)
============================================================ */

.hero-lower {
    width: 100%;
    max-width: 1100px;

    margin-top: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    z-index: 3;
}

.welcome-text {
    font-style: italic;
    font-size: clamp(20px, 2.5vw, 32px);
    color: #103159;
}

/* BUTTON ROW */
.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
}

/* BUTTONS — RED CORE + BLUE GLOW */
.hero-button {
    padding: 12px 26px;
    border-radius: 999px;

    background: #8A3B32;
    color: #E8DCC5;

    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    border: 1px solid rgba(16,49,89,0.25);

    transition: 0.25s ease;
}

.hero-button:hover {
    transform: translateY(-3px);
    box-shadow:
        0 0 18px rgba(16,49,89,0.55),
        0 12px 26px rgba(0,0,0,0.25);
}

/* ============================================================
   FOOTER
============================================================ */

.main-footer {
    padding: 34px 18px;
    background: #E8DCC5;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    text-align: center;
}

.footer-name {
    font-size: clamp(30px, 5vw, 60px);
    font-weight: 700;
    text-transform: uppercase;
}

.footer-tagline {
    font-size: clamp(12px, 1.4vw, 16px);
    opacity: 0.85;
    font-weight: 700;
    text-transform: uppercase;
}

.footer-owner,
.footer-weather-line,
.footer-time,
.footer-copyright {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
}

.footer-owner {
    text-decoration: none;
}

.footer-owner:hover {
    opacity: 0.7;
}

.footer-weather-line,
.footer-copyright {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
}

.footer-divider {
    opacity: 0.6;
}
