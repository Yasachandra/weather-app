const request = require("postman-request");

const url = "http://api.weatherstack.com/current?access_key=9135def507a3c7dcf350bd36dcbe34cd&query=Meerut";

request({ url, json:true }, (error, response) => {
    const data = response.body.current;
    console.log(data);
})