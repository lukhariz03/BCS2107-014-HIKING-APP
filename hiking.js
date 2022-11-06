function buttonClicked(){
    var city=document.getElementById("city_input").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)

    .then((response) => response.json())
    .then((data) => {
        var info=data
            document.write("The Temp Celcius :",info.main.temp)
            document.write("The longitude :",info.coord.lon)
            document.write("The latitude :",info.coord.lat)
            document.write("The Wind Speed :",info.wind.speed)
            document.write("The Degree : ",info.wind.deg)
            document.write("TimeZone : ",info.sys.country)
            document.write("The Weather is : ",info.weather[0].description)
            document.write("The Weather Main: ",info.weather[0].main)
    });
}