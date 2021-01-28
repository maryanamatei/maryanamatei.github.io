var activePage = "skills";

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
    //hei, documentule, da-mi toate elementele care au clasa page
    var pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach(function(page){
        hide(page.id);
    });
}

function hidePreviousPage(){
    hide(activePage);
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(id) {
    // hideAllPages();
    hidePreviousPage();

    show(id);

    var link = document.querySelector(`#top-menu-bar a[data-page="${id}"]`);
    // console.info("activePage", activePage, "id", id);
    link.classList.add("active");
    activePage = id;
    //console.info("activePage", activePage, "id", id);
}

function listenMenuClicks(){ // MenuInit grupa 5
    document.addEventListener("click", function (e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
        
    });
}

listenMenuClicks(); 

showPage(activePage); 

// array care contine multe obiecte, 
 // adica am facut obicete in interior
var allSkills = [ 
    {  name: "HTML", endorcements: 15} ,
    {  name: "CSS", endorcements :5} ,
    {  name: "JS", endorcements: 21} 
]; 


 // !!! in json standard se folosesc ghilimele duble pt stringuri
 // in json din java script avem voie ca numle proprieteatilor sa fie fara ghilimele
 //variabila(skills), variabila in variabila(name, endorcements), variabila din variabila in variabila (endorcements - acesta e adancimea 3)
 
function showSkills(skills){
    var skillsLi = skills.map(function(skill){
        var endorcements = ` <span> &middot; ${skill.endorcements}</span>`;
        //console.info(skill);
        return "<li>" + skill.name + endorcements + "</li>";
    });
     
    // cer de la document lista(ul) si il pastrez in variabila ul
    var ul = document.querySelector(`#skills ul`);
    // schimbam html-ul elementului ul cu valoare de dupa egal
    ul.innerHTML = skillsLi.join("");
}
 
 
showSkills(allSkills);
 
 