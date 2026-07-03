function updateDateTime() {
    const el = document.getElementById("datetime");
    if (!el) return;

    const now = new Date();
    el.textContent = now.toLocaleString();
}

async function updateWeather() {
    const el = document.getElementById("weather");
    if (!el) return;

    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=34.6834&longitude=-82.8374&current_weather=true&temperature_unit=fahrenheit");
        const data = await res.json();

        const temp = Math.round(data.current_weather.temperature);
        el.textContent = `${temp}°F`;
    } catch {
        el.textContent = "Weather unavailable";
    }
}

window.addEventListener("load", () => {
    updateDateTime();
    updateWeather();

    setInterval(updateDateTime, 1000);
    setInterval(updateWeather, 600000);
});
