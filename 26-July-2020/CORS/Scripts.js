





var url_string =  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e23c7ea952d3f17241e3047b473b9282"
fetch(url_string) // Call the fetch function passing the url of the API as a parameter
//console.log(url_string2)
.then(res=>res.json())
.then(data=>console.log(data))


