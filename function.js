function hide(id){
    // document.getElementById(id).style.display = "none";
    var el =  document.getElementById(id);
    //console.info("hide:" + id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error( "elementul nu exista");
    }
}   

function showHome(){
    hide("skills");
    hide("projects");
    hide("languages");
    //document.getElementById('home').style.display = "";
    var page = document.getElementById('home');
    page.style.display = "";
}

function showSkills(){
    hide("home");
    hide("projects");
    hide("languages");
    document.getElementById('skills').style.display = '';
}

function showProjects(){
    hide("home");
    hide("skills");
    hide("languages");
    document.getElementById("projects").style.display = "";
}

function showLanguages(){
    hide("home");
    hide("projects");
    hide("skills");
    document.getElementById("languages").style.display ="";
}