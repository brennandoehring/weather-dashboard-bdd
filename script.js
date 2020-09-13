$(document).on("ready", function() {
    // Variables for elements
    const inputEl = $("#cityInput");
    const searchEl= $("#citySubmit");
    const cityEl = $("#cityName");
    const iconEl = $("#icon");
    const tempEl = $("#temperature");
    const humidityEl = $("#humidity");
    const windSpeedEl = $("#windSpeed");
    const uvIndexEl = $("#uvIndex");
    
    // Loads search history data for cities
    
    // Initiates the city search on search button click
    searchEl.on("click", function() {
        var cityInput = $("#cityInput").val();
        console.log(cityInput + " was the city entered!");
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=61bd6110a742b7f64e0d6364d6a196d9";

        // Grabs the information from the OpenWeatherMap API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var cityName = response.city.name;
            var temperature = (response.list.main.temp);
            var humidity = response.list.main.humidity;
            var windSpeed = response.list.wind.speed;
            console.log(response);
            console.log("City name: " + response.city.name);
            console.log("Temperature: " + response.list.main.temp);
            console.log("Humidity is: " + response.list.main.humidity);
            // Response is placed into html for user readability
            cityEl.html(cityName);
            tempEl.html(temperature);
        })
    });
})