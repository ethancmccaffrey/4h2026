function fitAllText() {
    const elements = document.querySelectorAll(".fit-text");

    elements.forEach(el => {
        let parentWidth = el.parentElement.offsetWidth;

        let fontSize = parseFloat(window.getComputedStyle(el).fontSize);

        // Reset first
        el.style.transform = "scaleX(1)";
        el.style.fontSize = fontSize + "px";

        // Shrink loop if needed
        while (el.scrollWidth > parentWidth && fontSize > 8) {
            fontSize -= 0.5;
            el.style.fontSize = fontSize + "px";
        }

        // If still too big, compress horizontally slightly
        if (el.scrollWidth > parentWidth) {
            let scale = parentWidth / el.scrollWidth;
            el.style.transform = `scaleX(${scale})`;
            el.style.transformOrigin = "left";
        }
    });
}

window.addEventListener("load", fitAllText);
window.addEventListener("resize", fitAllText);
