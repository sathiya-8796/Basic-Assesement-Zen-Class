/*var request = new XMLHttpRequest()
var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
console.log(data);
}*/




var proxy = "https://cors-anywhere.herokuapp.com/"

var url_string2 =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
fetch(proxy + url_string2) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
