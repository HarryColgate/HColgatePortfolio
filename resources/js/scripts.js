let container = document.getElementById('container');
let pageBody = document.body;
let aboutButton = document.getElementById('aboutBut');
let projectsButton = document.getElementById('projectsBut');
let skillsButton = document.getElementById('skillsBut');
let contactButton = document.getElementById('contactBut');
let aboutSection = document.getElementById('aboutMe');
let projectsSection = document.getElementById('projects');
let skillsSection = document.getElementById('skills');
let contactSection = document.getElementById('contact');
let buttonArray = [aboutButton, projectsButton, skillsButton, contactButton]; 

/*Buttons start!!!!!!*/ 

pageBody.onload = function() {
    projectsSection.hidden = true;
    skillsSection.hidden = true;
    contactSection.hidden = true;
}

aboutButton.onclick = function(){
    aboutSection.hidden = false;
    aboutSection.style.display = 'flex';
    projectsSection.hidden = true;
    skillsSection.hidden = true;
    contactSection.hidden = true;
}

projectsButton.onclick = function(){
    aboutSection.hidden = true;
    aboutSection.style.display = 'none';
    projectsSection.hidden = false;
    skillsSection.hidden = true;
    contactSection.hidden = true;;
}

skillsButton.onclick = function(){
    aboutSection.hidden = true;
    aboutSection.style.display = 'none';
    projectsSection.hidden = true;
    skillsSection.hidden = false;
    contactSection.hidden = true;
}

contactButton.onclick = function(){
    aboutSection.hidden = true;
    aboutSection.style.display = 'none';
    projectsSection.hidden = true;
    skillsSection.hidden = true;
    contactSection.hidden = false;
}

/*Buttons end!!!!!!*/ 


/*Button click animations start*/ 

function changeColorTo(event) {
    event.target.style.backgroundColor = 'aqua';
    event.target.style.color = "#222";
}

function changeColorBack(event) {
    event.target.style.backgroundColor = '#222';
    event.target.style.color = 'white';
}

function shrinkText(event) {
    event.target.style.fontSize = '1.5rem';
    event.target.padding = '100rem';
}

function expandText(event) {
    event.target.style.fontSize = '1.8rem';
    event.target.padding = '100rem';
}

/*Button click animations end*/ 


buttonArray.forEach(button => {
    button.onmouseover = changeColorTo;
    button.onmouseout = changeColorBack;
    button.onmousedown = shrinkText;
    button.onmouseup = expandText;
});