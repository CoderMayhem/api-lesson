const express = require("express");
const https = require("https");  //https is a native node module therefore is not required to be downloaded separately.
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=8131a14698a05a9d615459f8b73798bf&units=metric"
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      res.write("<p>The weather is currently " + description + "<p>");
      res.write("<h1>The temperature in "+query+" is " + temp + " deg Celcius.<h1>");
      res.send();
    });
  });

});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
