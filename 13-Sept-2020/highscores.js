let container = document.body;
container.setAttribute("style","background-color:  white; display:flex; justify-content: center;")
let outer_div_end = document.createElement("div");
container.appendChild(outer_div_end);


/*---------High Scores Heading--------*/
let header = document.createElement("h1");
header.setAttribute("class","h1");
header.setAttribute("style","color:blue;  ")
header.innerText= "High Scores";
outer_div_end.appendChild(header);



/*------------Go Home ---------------*/
let goHome = document.createElement("button");
goHome.setAttribute("class", "btn btn-outline-dark");
goHome.setAttribute("id", "goHome");
goHome.setAttribute("style","border-color: grey; display:flex; margin-left:40px; position:absolute; bottom:70px; ");
goHome.innerText = " Go Home ";
let a2 = document.createElement('a');
a2.setAttribute('href','index.html');
a2.append(goHome);
outer_div_end.appendChild(a2);