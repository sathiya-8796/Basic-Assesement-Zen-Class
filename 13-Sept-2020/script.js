let main = document.createElement('div');
 main.classList.add('container',);
 
 let row = document.createElement('div');
 row.classList.add('row');
let col12 = document.createElement('div');
col12.classList.add('col-4');
col12.id= 'page';
let header = document.createElement('header');
header.id='header';

header.innerText= 'Quick Quiz';
col12.append(header);
let a1 = document.createElement('a');
a1.setAttribute('href',`game.html`);
let playbtn = document.createElement('button');
playbtn.classList.add('btn','btn-primary','rounded')
playbtn.id ='play'
playbtn.innerText= 'Play';
playbtn.setAttribute('href',`game.html`);
playbtn.setAttribute('onclick','getgame()')
a1.append(playbtn);
col12.append(a1);
let a2 = document.createElement('a');
a2.setAttribute('href',`highscores.html`);
let highscoresbtn = document.createElement('button');
highscoresbtn .classList.add('btn','btn-primary','rounded')
highscoresbtn.id ='highscores'
highscoresbtn.innerText='High Scores'
a2.append(highscoresbtn);
col12.append(a2);
row.append(col12);
 
 main.append(row);
 document.body.append(main);
