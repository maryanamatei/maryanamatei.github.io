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
    {  name: "HTML", favorite: true, endorcements: 15} ,
    {  name: "CSS", favorite: false, endorcements :5} ,
    {  name: "JS", favorite: true, endorcements: 21} 
]; 
// TODO class = "favorite skill"
function showSkills(skills){
    var allSkillsHtml = skills.map(function(skill){
        console.info(skill);
        return `<li>${skill.name} <span> &middot(${skill.endorcements})</span></li>`;
    });
    
    var skillsEl = document.querySelector("#skills ul");
    skillsEl.innerHTML = allSkillsHtml.join("");

};

showSkills(allSkills);
 
 