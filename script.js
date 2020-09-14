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
        console.log("Current Day displayed.");

        // FORECAST BEGINS HERE
        // Day one
        var temperatureDay1 = k2f(response.list[1].main.temp);
        var humidityDay1 = response.list[1].main.humidity + "%";
        var iconDay1 = response.list[1].weather[0].icon;
        const dateDay1 = moment().add(1, 'days').format("MM/DD/YYYY");

        $("#oneDate").text(dateDay1);
        $("#oneIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay1 + "@2x.png");
        $("#oneTemp").text("Temperature: " + temperatureDay1);
        $("#oneHumidity").text("Humidity: " + humidityDay1);
        console.log("Day One displayed.");

        // Day two
        var temperatureDay2 = k2f(response.list[2].main.temp);
        var humidityDay2 = response.list[2].main.humidity + "%";
        var iconDay2 = response.list[2].weather[0].icon;
        const dateDay2 = moment().add(2, 'days').format("MM/DD/YYYY");

        $("#twoDate").text(dateDay2);
        $("#twoIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay2 + "@2x.png");
        $("#twoTemp").text("Temperature: " + temperatureDay2);
        $("#twoHumidity").text("Humidity: " + humidityDay2);
        console.log("Day Two displayed.");

        // Day three
        var temperatureDay3 = k2f(response.list[3].main.temp);
        var humidityDay3 = response.list[3].main.humidity + "%";
        var iconDay3 = response.list[3].weather[0].icon;
        const dateDay3 = moment().add(3, 'days').format("MM/DD/YYYY");

        $("#threeDate").text(dateDay3);
        $("#threeIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay3 + "@2x.png");
        $("#threeTemp").text("Temperature: " + temperatureDay3);
        $("#threeHumidity").text("Humidity: " + humidityDay3);
        console.log("Day Three displayed.");

        // Day four
        var temperatureDay4 = k2f(response.list[4].main.temp);
        var humidityDay4 = response.list[4].main.humidity + "%";
        var iconDay4 = response.list[4].weather[0].icon;
        const dateDay4 = moment().add(4, 'days').format("MM/DD/YYYY");

        $("#fourDate").text(dateDay4);
        $("#fourIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay4 + "@2x.png");
        $("#fourTemp").text("Temperature: " + temperatureDay4);
        $("#fourHumidity").text("Humidity: " + humidityDay4);
        console.log("Day Four displayed.");

        // Day five
        var temperatureDay5 = k2f(response.list[5].main.temp);
        var humidityDay5 = response.list[5].main.humidity + "%";
        var iconDay5 = response.list[5].weather[0].icon;
        const dateDay5 = moment().add(5, 'days').format("MM/DD/YYYY");

        $("#fiveDate").text(dateDay5);
        $("#fiveIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay5 + "@2x.png");
        $("#fiveTemp").text("Temperature: " + temperatureDay5);
        $("#fiveHumidity").text("Humidity: " + humidityDay5);
        console.log("Day Five displayed.");
})

// Kelvin to fahrenheit conversion
    function k2f(k) {
        return Math.floor((k - 273.15) * 1.8 + 32);
    }

// Local storage
});