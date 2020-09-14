$(document).on("ready", function() {
    // Loads search history data for cities
    
});

// Initiates the city search on search button click
$("#citySubmit").on("click", function() {
    console.log("Search button clicked!");
    var cityInput = $("#cityInp").val();
    console.log(cityInput + " was the city entered!");
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=61bd6110a742b7f64e0d6364d6a196d9";
    // Grabs the information from the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log ("Ajax is returning data.");
        // Turns response into usable variables
        var cityNameDay = response.city.name;
        var temperatureDay = k2f(response.list[0].main.temp);
        var humidityDay = response.list[0].main.humidity + "%";
        var windSpeedDay = response.list[0].wind.speed + "MPH";
        var iconDay = response.list[0].weather[0].icon;
        var latitude = response.city.coord.lat;
        var longitude = response.city.coord.lon;

        // Logs results
        console.log(response);
        console.log("City name: " + cityNameDay);
        console.log("Temperature: " + temperatureDay);
        console.log("Humidity: " + humidityDay);
        console.log("Wind Speed: " + windSpeedDay);
        console.log("Icon: " + iconDay);
        console.log("Latitude: " + latitude + " Longitude: " + longitude);

        // Get current day
        const currentDate = moment().format("MM/DD/YYYY");
        console.log("Today's date is: " + currentDate);
        
        // Gets UV Index and displays
        var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude
        + "&appid=61bd6110a742b7f64e0d6364d6a196d9" + "&cnt=1";

        $.ajax({
            url: uvQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var uvIndex = response[0].value;
            $("#uvIndex").text("UV Index: " + uvIndex);
        });

        // Displays the remaining variables
        $("#cityName").text(cityNameDay + "(" + currentDate + ")");
        $("#icon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay + "@2x.png");
        $("#temperature").text("Temperature: " + temperatureDay);
        $("#humidity").text("Humidity: " + humidityDay);
        $("#windSpeed").text("Wind Speed: " + windSpeedDay);

        // FORECAST BEGINS HERE
        // DAY ONE
        // var cityNameDay = response.city.name;
        // var temperatureDay = k2f(response.list[1].main.temp);
        // var humidityDay = response.list[1].main.humidity + "%";
        // var windSpeedDay = response.list[1].wind.speed + "MPH";
        // var iconDay = response.list[1].weather[1].icon;
        // var latitude = response.city.coord.lat;
        // var longitude = response.city.coord.lon;

        // const currentDate = new Date(response.list[0].dt * 1000);
        // const day = currentDate.getDate();
        // const month = currentDate.getMonth() + 1;
        // const year = currentDate.getFullYear();
        // console.log(currentDate);

})

// Kelvin to fahrenheit conversion
    function k2f(k) {
        return Math.floor((k - 273.15) * 1.8 + 32);
    }

// Local storage
});