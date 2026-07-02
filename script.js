/* ==========================================================
   AVENMARK DIGITAL — CLEAN SYSTEM SCRIPT
   SAFE, SCALABLE, FUTURE-PROOF
========================================================== */


/* ===========================
   LIVE CLOCK
=========================== */

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


/* ===========================
   WEATHER (OPEN-METEO)
   Clemson, SC
=========================== */

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

        el.textContent = `${temp}°F • ${weatherCodeToText(code)}`;

    } catch (err) {

        el.textContent = "Weather unavailable";

    }
}


/* ===========================
   WEATHER TEXT MAP
=========================== */

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


/* ===========================
   INITIALIZATION
=========================== */

function initAvenmark() {

    // run immediately
    updateDateTime();
    updateWeather();

    // update clock every second
    setInterval(updateDateTime, 1000);

    // refresh weather every 10 minutes
    setInterval(updateWeather, 600000);
}


/* ===========================
   BOOTSTRAP
=========================== */

window.addEventListener("load", initAvenmark);
