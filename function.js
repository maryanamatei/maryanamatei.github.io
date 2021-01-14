function hide(id){
    var el =  document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error( "elementul nu exista");
    }
}   

function show(id){
    var el = document.getElementById(id).style.display = ' ';
}

function hideAllPages(){
    hide("home");
    hide("projects");
    hide("languages");
    hide('skills');
}

function showHomePage(){ 
    hideAllPages ()
        show("home");  
}

function showSkillsPage(){
    hideAllPages ()
        show('skills');     
}

function showProjectsPage(){
    hideAllPages ()
        show("projects");   
}

function showLanguagesPage(){
    hideAllPages ()
        show("languages");
}