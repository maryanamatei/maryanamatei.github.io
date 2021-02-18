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
    var link = document.querySelector(`#top-menu-bar a[data-id="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(id) {
    // hideAllPages();
    hidePreviousPage();

    show(id);

    var link = document.querySelector(`#top-menu-bar a[data-id="${id}"]`);
    // console.info("activePage", activePage, "id", id);
    link.classList.add("active");
    activePage = id;
    //console.info("activePage", activePage, "id", id);
}

function listenMenuClicks(){ // MenuInit grupa 5
    document.addEventListener("click", function (e){
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-id");
            showPage(id);
        }
        
    });
}

listenMenuClicks(); 

showPage(activePage); 

var allSkills = []; 

function showSkills(skills){
    var allSkillsHtml = skills.map(function(skill){
        var cls = skill.favorite ? "favorite" : "";
        return `<li class="${cls}">
        ${skill.name} <span> &middot(${skill.endorcements})</span>
        </li>`;
    });
    
    var skillsEl = document.querySelector("#skills ul");
    skillsEl.innerHTML = allSkillsHtml.join("");

};

fetch("data/skills.json")
    .then(function(r) {
        return r.json();
    })
    .then(function (skills){
        skills.sort(function(s1,s2){
            return s2.endorcements - s1.endorcements;
        })
        showSkills(skills);
    });

showSkills(allSkills);
 
 