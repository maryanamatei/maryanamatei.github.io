function hide(id){
    var el =  document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error( "elementul nu exista");
    }
}   

function show(id){
    var el = document.getElementById(id);
    el.style.display = "";
}

function showHomePage(){ 
    hide("skills");
    hide("projects");
    hide("languages");
    show("home");
}

function showSkillsPage(){
    hide("home");
    hide("projects");
    hide("languages");
    show('skills');
}

function showProjectsPage(){
    hide("home");
    hide("skills");
    hide("languages");
    show("projects");
}

function showLanguagesPage(){
    hide("home");
    hide("projects");
    hide("skills");
    show("languages");
}