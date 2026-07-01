function fitAllText() {
    const elements = document.querySelectorAll(".fit-text");

    elements.forEach(el => {
        let parentWidth = el.parentElement.offsetWidth;
        let fontSize = parseFloat(window.getComputedStyle(el).fontSize);

        el.style.transform = "scaleX(1)";
        el.style.fontSize = fontSize + "px";

        while (el.scrollWidth > parentWidth && fontSize > 8) {
            fontSize -= 0.5;
            el.style.fontSize = fontSize + "px";
        }

        if (el.scrollWidth > parentWidth) {
            let scale = parentWidth / el.scrollWidth;
            el.style.transform = `scaleX(${scale})`;
            el.style.transformOrigin = "left";
        }
    });
}

/* LIVE CLOCK (SECONDS INCLUDED) */
function updateDateTime() {
    const now = new Date();

    const timeString = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const dateString = now.toLocaleDateString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    document.getElementById("datetime").textContent =
        `${dateString} • ${timeString}`;
}

/* INIT */
window.addEventListener("load", () => {
    fitAllText();
    updateDateTime();

    setInterval(updateDateTime, 1000); // ⬅️ now updates every second
});

window.addEventListener("resize", fitAllText);
