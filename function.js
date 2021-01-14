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

function showHome(){
    hide("skills");
    hide("projects");
    hide("languages");
    show("home");
}

function showSkills(){
    hide("home");
    hide("projects");
    hide("languages");
    show('skills');
}

function showProjects(){
    hide("home");
    hide("skills");
    hide("languages");
    show("projects");
}

function showLanguages(){
    hide("home");
    hide("projects");
    hide("skills");
    show("languages");
}