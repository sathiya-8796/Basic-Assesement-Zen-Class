let container = document.body;
container.setAttribute("style","background-color:  white; display:flex; justify-content: center; margin: 10em")
let outer_div_end = document.createElement("div");
container.appendChild(outer_div_end);



/*-------input text box-------------*/
let inputName = document.createElement("input");
inputName.setAttribute("type","text");
inputName.setAttribute("style","border-color: blue; display:flex; margin-left: -60px")
inputName.setAttribute("placeholder","username");
inputName.setAttribute("id","username")
outer_div_end.appendChild(inputName);

/*--------Save Button ---------------*/
let saveScoreBtn = document.createElement("button");
saveScoreBtn.setAttribute("class", "btn btn-outline-dark");
saveScoreBtn.setAttribute("id","saveScoreBtn");
//saveScoreBtn.setAttribute("onclick",``);
saveScoreBtn.setAttribute("style","border-color: grey; display:flex; margin:10px; margin-top: 10px; ");
saveScoreBtn.innerText = " Save ";
outer_div_end.appendChild(saveScoreBtn);

/*------------Play Again ---------------*/
let a1 = document.createElement('a');
a1.setAttribute('href','./game.html');
let playAgain = document.createElement("button");
playAgain.setAttribute("class", "btn btn-outline-dark");
playAgain.setAttribute("id","playAgain")
playAgain.setAttribute("style","border-color: grey; display:flex;  margin:10px; margin-left: -13px;");
playAgain.innerText = " Play Again ";
a1.append(playAgain);
outer_div_end.appendChild(a1);

/*------------Go Home ---------------*/
let a2 = document.createElement('a');
a2.setAttribute('href','index.html');
let goHome = document.createElement("button");
goHome.setAttribute("class", "btn btn-outline-dark");
goHome.setAttribute("id", "goHome");
goHome.setAttribute("style","border-color: grey; display:flex; margin:10px; margin-left: -10px;");
goHome.innerText = " Go Home ";
a2.append(goHome);
outer_div_end.appendChild(a2);