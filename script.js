 /* ==========================================================
   ETHAN MCCAFFREY WEBSITE
   FINAL SCRIPT
========================================================== */


/* ==========================================================
   LIVE DATE + TIME
========================================================== */


function updateDateTime() {


    const now = new Date();



    const timeString = now.toLocaleTimeString(undefined, {

        hour: "2-digit",

        minute: "2-digit",

        second: "2-digit"

    });



    const dateString = now.toLocaleDateString(undefined, {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    });



    const element = document.getElementById("datetime");



    if (element) {

        element.textContent = `${dateString} • ${timeString}`;

    }


}



/* ==========================================================
   AUTOMATIC COPYRIGHT YEAR
========================================================== */


function updateYear() {


    const yearElement = document.getElementById("year");



    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


}



/* ==========================================================
   WEATHER
   CLEMSON, SC
   OPEN-METEO API
========================================================== */


async function updateWeather() {


    try {


        const response = await fetch(

            "https://api.open-meteo.com/v1/forecast" +

            "?latitude=34.6834" +

            "&longitude=-82.8374" +

            "&current_weather=true" +

            "&temperature_unit=fahrenheit"

        );



        const data = await response.json();



        const temperature = Math.round(

            data.current_weather.temperature

        );



        const weatherCode = data.current_weather.weathercode;



        const weatherElement = document.getElementById("weather");



        if (weatherElement) {


            weatherElement.textContent =

                `${temperature}°F • ${weatherCodeToText(weatherCode)}`;


        }



    } catch (error) {


        const weatherElement = document.getElementById("weather");



        if (weatherElement) {

            weatherElement.textContent = "Weather unavailable";

        }


    }


}



/* ==========================================================
   WEATHER CODE TRANSLATION
========================================================== */


function weatherCodeToText(code) {


    if (code === 0) {

        return "Clear";

    }


    if (code <= 2) {

        return "Partly Cloudy";

    }


    if (code === 3) {

        return "Cloudy";

    }


    if (code <= 48) {

        return "Foggy";

    }


    if (code <= 67) {

        return "Rain";

    }


    if (code <= 77) {

        return "Snow";

    }


    if (code <= 82) {

        return "Showers";

    }


    if (code <= 86) {

        return "Snow Showers";

    }


    if (code >= 95) {

        return "Thunderstorm";

    }



    return "Unknown";


}

/* ==========================================================
   SMOOTH SCROLLING
========================================================== */


function enableSmoothScrolling() {


    const links = document.querySelectorAll(

        'a[href^="#"]'

    );



    links.forEach(link => {


        link.addEventListener("click", function(event) {


            const targetID = this.getAttribute("href");



            if (targetID === "#") {

                return;

            }



            const targetSection = document.querySelector(targetID);



            if (targetSection) {


                event.preventDefault();



                const headerOffset =

                    document.querySelector(".main-header")

                    ?.offsetHeight || 0;



                const elementPosition =

                    targetSection.getBoundingClientRect().top;



                const offsetPosition =

                    elementPosition +

                    window.scrollY -

                    headerOffset;



                window.scrollTo({

                    top: offsetPosition,

                    behavior: "smooth"

                });


            }


        });


    });


}



/* ==========================================================
   IMAGE LOADING POLISH
========================================================== */


function prepareImages() {


    const images = document.querySelectorAll("img");



    images.forEach(image => {


        image.addEventListener("load", () => {


            image.style.opacity = "1";


        });



    });


}



/* ==========================================================
   INITIALIZATION
========================================================== */


window.addEventListener("load", () => {


    updateDateTime();


    updateWeather();


    updateYear();


    enableSmoothScrolling();


    prepareImages();



    setInterval(

        updateDateTime,

        1000

    );



    setInterval(

        updateWeather,

        10 * 60 * 1000

    );


});
