function hide(id){
    var el =  document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error( "elementul nu exista");
    }
}   

function show(id){
    document.getElementById(id).style.display = '';
}

function hideAllPages(){
    var pagesIds = [
        "home", "skills", "projects", "languages"
    ];

    // initial    ;    condition     ; post execution
    for (var i = 0; i < pagesIds.length;   i++) {
        hide(pagesIds[i]);
        console.info('i =')
    }

}

function showHomePage(){ 
    hideAllPages ();
    show("home");  
}

function showSkillsPage(){
    hideAllPages();
    show('skills');     
}

function showProjectsPage(){
    hideAllPages();
    show("projects");   
}

function showLanguagesPage(){
    hideAllPages();
    show("languages");
}
