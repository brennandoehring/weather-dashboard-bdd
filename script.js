$(document).on("ready", function() {
    // Loads search history data for cities
    
})

// Initiates the city search on search button click
$("#citySubmit").on("click", function() {
    var cityInput = $("#cityName").val();
    console.log(cityInput + " was the city entered!");
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=61bd6110a742b7f64e0d6364d6a196d9";

    // Grabs the information from the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })

    // Response is placed into html for user readability
    

});