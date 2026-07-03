/* ============================================================
   AVENMARK DIGITAL — FULL INTERACTION SCRIPT
   Spider‑web grid • Suspended images • Monumental manifesto
   ============================================================ */


/* ------------------------------------------------------------
   LIVE CLOCK
   ------------------------------------------------------------ */
function updateDateTime() {
    const el = document.getElementById("datetime");
    if (!el) return;

    const now = new Date();

    const time = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const date = now.toLocaleDateString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    el.textContent = `${date} • ${time}`;
}


/* ------------------------------------------------------------
   WEATHER — OPEN METEO (Clemson, SC)
   ------------------------------------------------------------ */
async function updateWeather() {
    const el = document.getElementById("weather");
    if (!el) return;

    try {
        const url =
            "https://api.open-meteo.com/v1/forecast" +
            "?latitude=34.6834" +
            "&longitude=-82.8374" +
            "&current_weather=true" +
            "&temperature_unit=fahrenheit";

        const res = await fetch(url);
        if (!res.ok) throw new Error("Weather fetch failed");

        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;

        el.textContent = `${temp}ºF • ${weatherCodeToText(code)}`;
    } catch (err) {
        el.textContent = "Weather unavailable";
    }
}


/* ------------------------------------------------------------
   WEATHER CODE → TEXT
   ------------------------------------------------------------ */
function weatherCodeToText(code) {
    if (code === 0) return "Clear";
    if (code <= 2) return "Partly Cloudy";
    if (code <= 3) return "Cloudy";
    if (code <= 48) return "Foggy";
    if (code <= 67) return "Rain";
    if (code <= 77) return "Snow";
    if (code <= 82) return "Showers";
    if (code <= 86) return "Snow Showers";
    if (code >= 95) return "Thunderstorm";
    return "Unknown";
}


/* ============================================================
   SPIDER‑WEB GRID PARALLAX
   ============================================================ */

function initGridParallax() {
    const grid = document.querySelector(".hero-grid");
    if (!grid) return;

    window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        grid.style.transform = `translate(${x}px, ${y}px)`;
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY * 0.1;
        grid.style.transform = `translateY(${scrollY}px)`;
    });
}


/* ============================================================
   SUSPENDED IMAGE FLOATING
   ============================================================ */

function initImageFloat() {
    const topImg = document.querySelector(".hero-image-top");
    const bottomImg = document.querySelector(".hero-image-bottom");

    if (!topImg || !bottomImg) return;

    window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;

        topImg.style.transform = `translate(${x}px, ${y}px) rotate(-2deg)`;
        bottomImg.style.transform = `translate(${-x}px, ${-y}px) rotate(2deg)`;
    });
}


/* ============================================================
   MANIFESTO TEXT REVEAL
   ============================================================ */

function initManifestoReveal() {
    const lines = document.querySelectorAll(".manifesto-line");
    if (!lines.length) return;

    const reveal = () => {
        lines.forEach((line, i) => {
            setTimeout(() => {
                line.style.opacity = "1";
                line.style.transform = "translateY(0)";
            }, i * 250);
        });
    };

    lines.forEach((line) => {
        line.style.opacity = "0";
        line.style.transform = "translateY(40px)";
        line.style.transition = "all 0.8s ease";
    });

    window.addEventListener("load", reveal);
}


/* ============================================================
   BUTTON FOUNDATION EASING
   ============================================================ */

function initButtonFoundation() {
    const lower = document.querySelector(".hero-lower");
    if (!lower) return;

    lower.style.opacity = "0";
    lower.style.transform = "translateY(40px)";
    lower.style.transition = "all 0.8s ease";

    const revealLower = () => {
        lower.style.opacity = "1";
        lower.style.transform = "translateY(0)";
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight * 0.3) {
            revealLower();
        }
    });
}


/* ============================================================
   INITIALIZATION
   ============================================================ */

function initAvenmark() {
    updateDateTime();
    updateWeather();

    setInterval(updateDateTime, 1000);
    setInterval(updateWeather, 600000);

    initGridParallax();
    initImageFloat();
    initManifestoReveal();
    initButtonFoundation();
}


/* ------------------------------------------------------------
   BOOTSTRAP
   ------------------------------------------------------------ */
window.addEventListener("load", initAvenmark);
