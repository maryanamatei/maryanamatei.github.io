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
    var pages = Array.from(document.querySelectorAll(".page"));
   var pageIds = pages.map(function(page){
       return page.id;
   });
   // TODO Next Lesson use only pages.forEach
   pageIds.forEach(function(pageId){
       hide(pageId);
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
   
    // commit as show active menu
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

var allSkills = [ // array care contine multe obiecte, si va fi mutat in alt fisier json
    // "HTML (15)", //divizare mai complexa cae sa offere m multe informatii
    {  name: "HTML", endorcements: 15} ,
    {  name: "CSS", endorcements :5} ,// "CSS (23)", 
    {  name: "JS", endorcements: 21} // "JS (13)",
 ]; // am transformat skills array intr-un json objects, adica am facut obicete in interior
 
 
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
    //document.querySelector("#skills ul").innerHTML = skills[2];
}
 
 
showSkills(allSkills);
 
 