var main = document.createElement('div');
main.classList.add('container',);

var row1 = document.createElement('div');
row1.classList.add('row', 'rounded');
var row1col1= document.createElement('div');
row1col1.classList.add('col-12');
 
let progress = document.createElement('div');
let questionNumber=0;
progress.innerHTML= 'Questions <span id= questionNumber></span><span>/10</span><br>'
let progressbar= document.createElement('progress');
progressbar.id='progressbar';
progressbar.value= '5';
progressbar.max= 10;
progress.append(progressbar);

let scoreDiv =document.createElement('div');
scoreDiv.id= 'scoreDiv';
scoreDiv.innerHTML='<span>Score  :  </span> <span id= score >0</span>'
row1col1.append(scoreDiv);
row1col1.append(progress);

row1.append(row1col1);
var pageContent = document.createElement('div');
pageContent.classList.add('col-12');
pageContent.id = 'pageData';
row1.append(pageContent);
main.append(row1);
document.body.append(main);

var state = {
    'quereyset': null,
    'page': 1,
    'rows': 1
};

let score = 0;
let scorearray={};

async function getgame() {
    try {
        var game = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
        var gameData = await game.json();
        console.log(gameData);
        state = {
            'quereyset': gameData.results,
            'page': 1,
            'rows': 1
        };
        var data = pagination(state.quereyset, state.page, state.rows);
        console.log(data);

        buildContent(data);

        var pagebuttonsdiv = pagebuttons(data.pages);
        pagebuttonsdiv.id= 'pagebuttons';
        pagebuttonsdiv.classList.add('col-12');
        let a2 = document.createElement('a');
        a2.setAttribute('href','end.html');
        var submitbtn = document.createElement('button');
        submitbtn.id= 'submitbtn'
        submitbtn.classList.add('btn','btn-primary')
        submitbtn.type='submit';
        submitbtn.innerText='Submit'
        submitbtn.setAttribute('onclick','validateAnswers()');
        a2.append(submitbtn);
        pagebuttonsdiv.append(a2);
        row1.append(pagebuttonsdiv);

  

        
    } catch (error) {
        console.error(error);
    }


};
function   validateAnswers() {
    score=0;
        for (let index = 0; index <state.quereyset.length; index++) {
            
            if(scorearray[index]=== state.quereyset[index].correct_answer){
                score++;
            }
        }
        alert('Your Score is :'+'  '+ score);
        
} 




function pagebuttons(pages) {

    var paginationDiv = document.createElement('div');

    paginationDiv.innerHTML = '';

    for (var page = 0; page < pages; page++) {
        var button = document.createElement('button');
        button.classList.add('btn', 'btn-sm', 'btn-primary', 'page')
        button.innerText = page + 1;
        button.value = page + 1;
        button.setAttribute('onclick', '(state.page=this.value),data = pagination(state.quereyset,state.page,state.rows); buildContent(data);');
        paginationDiv.append(button);
    }
    return paginationDiv;
}


function pagination(quereyset, page, rows) {
   document.getElementById('questionNumber').innerText=page;
   document.getElementById('progressbar').value=page;
    var trimstart = (page - 1) * rows;
    var trimend = trimstart + rows;
    var trimmedData = quereyset.slice(trimstart, trimend);

    var pages = Math.ceil(quereyset.length / rows);

    return {
        'quereyset': trimmedData,
        'pages': pages
    }

}







function buildContent(variable1) {

    var mylist = variable1.quereyset;
    pageContent.innerHTML = '';
    var questionMaindiv = document.createElement('div');
    questionMaindiv.classList.add('row');
    mylist.forEach(element => {
        var questiondiv = document.createElement('div');
        questiondiv.classList.add('col-12');
        var header = document.createElement('header');
        header.classList.add('header');
        header.innerText = element.question;
        questiondiv.append(header);
        var answers = element.incorrect_answers;
        if (answers.indexOf(element.correct_answer) === -1) {
            answers.push(element.correct_answer);
        }
        answers = answers.sort();
        
        answers.forEach(element1 => {
            var answerdiv = document.createElement('div');
            answerdiv.classList.add('row');
            var choicediv = document.createElement('div');
            choicediv.classList.add('col-12', 'choice','p-1','border');
            if(answers.indexOf(element1)===0){
                choicediv.innerText='A'
            } else if(answers.indexOf(element1)===1){
                choicediv.innerText='B'
            }else if(answers.indexOf(element1)===2){
                choicediv.innerText='C'
            }else if(answers.indexOf(element1)===3){
                choicediv.innerText='D'
            }
            var answerchoice = document.createElement('button');
            answerchoice.classList.add('choice-text', 'col-11','btn');
            answerchoice.type = 'submit';
            answerchoice.name = state.quereyset.indexOf(element);
            answerchoice.value = element1;
            answerchoice.setAttribute('onclick','keepansers(this)')
            answerchoice.innerHTML = element1;
            choicediv.append(answerchoice);
            answerdiv.append(choicediv);
            
            questiondiv.append(answerdiv);

            
        });
        questionMaindiv.append(questiondiv);
    });
    

    document.getElementById('pageData').append(questionMaindiv);
}

function keepansers(val) {
    
   scorearray[val.name]= val.value;
   //console.log(scorearray);
   document.getElementById('score').innerText=score;
}


getgame();