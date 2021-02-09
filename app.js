const express = require("express");
const https = require("https");  //https is a native node module therefore is not required to be downloaded separately.

const app = express();

app.get("/", function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=Varanasi&appid=8131a14698a05a9d615459f8b73798bf&units=metric"
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      console.log(temp);
    });
  });

  res.send("I love Sakshi.");
});



app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});