// Global variables
var searchTerms = JSON.parse(localStorage.getItem("City")) || [];
let listDiv = $("#historyList");

// Loads New York City forecast on page load
function init() {
    weatherGrabber("New York City");
}

// Kelvin to fahrenheit conversion
function k2f(k) {
    return Math.floor((k - 273.15) * 1.8 + 32);
};

// Create history list
for (let i = 0; i < searchTerms.length; i++) {
    historyList(searchTerms[i]);
};

// Loads search history list data for cities
function historyList(city) {
    var liEl = $("<li>").attr("class","list-group-item list-group-item-action").text(city);
    $(".list-history").append(liEl);
};

// Initiates the city search on search button click
$("#citySubmit").on("click", function() {
    var cityInput = $("#cityInp").val();
    
  if (searchTerms.indexOf(cityInput) === -1) {
        if (searchTerms.length > 7) {
            searchTerms.shift();
        }
        searchTerms.push(cityInput);
        localStorage.setItem("City", JSON.stringify(searchTerms));
     }
     weatherGrabber(cityInput);
});

// Grabs weather from the OpenWeatherMap API and 
function weatherGrabber(city) {
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=61bd6110a742b7f64e0d6364d6a196d9";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    
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

    // Gets current day and logs it
    const currentDate = moment().format("MM/DD/YYYY");
    console.log("Today's date is: " + currentDate);
    
    // Gets UV Index and displays with color based on level
    var uvQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + latitude + "&lon=" + longitude
    + "&appid=61bd6110a742b7f64e0d6364d6a196d9" + "&cnt=1";

    $.ajax({
        url: uvQueryURL,
        method: "GET"
    }).then(function(response) {
        var uvIndex = response[0].value;
        if (uvIndex < 3) {
        $("#uvIndex").text("UV Index: " + uvIndex).css("color", "green");
        } else if (uvIndex > 3 && uvIndex < 6) {
            $("#uvIndex").text("UV Index: " + uvIndex).css("color", "yellow");
        } else if (uvIndex > 6 && uvIndex < 8) {
            $("#uvIndex").text("UV Index: " + uvIndex).css("color", "orange");
        } else if (uvIndex > 8 && uvIndex < 10) {
            $("#uvIndex").text("UV Index: " + uvIndex).css("color", "red");
        } else {
            $("#uvIndex").text("UV Index: " + uvIndex).css("color", "purple");
        }
    });

    // Displays the remaining variables
    $("#cityName").text(cityNameDay + "(" + currentDate + ")");
    $("#icon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay + "@2x.png");
    $("#temperature").text("Temperature: " + temperatureDay);
    $("#humidity").text("Humidity: " + humidityDay);
    $("#windSpeed").text("Wind Speed: " + windSpeedDay);

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

    // Day two
    var temperatureDay2 = k2f(response.list[2].main.temp);
    var humidityDay2 = response.list[2].main.humidity + "%";
    var iconDay2 = response.list[2].weather[0].icon;
    const dateDay2 = moment().add(2, 'days').format("MM/DD/YYYY");

    $("#twoDate").text(dateDay2);
    $("#twoIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay2 + "@2x.png");
    $("#twoTemp").text("Temperature: " + temperatureDay2);
    $("#twoHumidity").text("Humidity: " + humidityDay2);

    // Day three
    var temperatureDay3 = k2f(response.list[3].main.temp);
    var humidityDay3 = response.list[3].main.humidity + "%";
    var iconDay3 = response.list[3].weather[0].icon;
    const dateDay3 = moment().add(3, 'days').format("MM/DD/YYYY");

    $("#threeDate").text(dateDay3);
    $("#threeIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay3 + "@2x.png");
    $("#threeTemp").text("Temperature: " + temperatureDay3);
    $("#threeHumidity").text("Humidity: " + humidityDay3);

    // Day four
    var temperatureDay4 = k2f(response.list[4].main.temp);
    var humidityDay4 = response.list[4].main.humidity + "%";
    var iconDay4 = response.list[4].weather[0].icon;
    const dateDay4 = moment().add(4, 'days').format("MM/DD/YYYY");

    $("#fourDate").text(dateDay4);
    $("#fourIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay4 + "@2x.png");
    $("#fourTemp").text("Temperature: " + temperatureDay4);
    $("#fourHumidity").text("Humidity: " + humidityDay4);

    // Day five
    var temperatureDay5 = k2f(response.list[5].main.temp);
    var humidityDay5 = response.list[5].main.humidity + "%";
    var iconDay5 = response.list[5].weather[0].icon;
    const dateDay5 = moment().add(5, 'days').format("MM/DD/YYYY");

    $("#fiveDate").text(dateDay5);
    $("#fiveIcon").attr("src" , "https://openweathermap.org/img/wn/" + iconDay5 + "@2x.png");
    $("#fiveTemp").text("Temperature: " + temperatureDay5);
    $("#fiveHumidity").text("Humidity: " + humidityDay5);
  });
};

// Search weather of history button clicked
$(".list-history").on('click', "li", function(){
    weatherGrabber($(this).text());
}); init();