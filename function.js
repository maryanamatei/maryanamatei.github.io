var activePage = "skills";

function hide(id){
    const el =  document.getElementById(id);
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
    const pages = Array.from(document.querySelectorAll(".page"));
    pages.forEach((page) => {
        hide(page.id);
    });
}

function hidePreviousPage(){
    hide(activePage);
    const link = document.querySelector(`#top-menu-bar a[data-id="${activePage}"]`);
    link.classList.remove("active");
}

function showPage(id) {
    // hideAllPages();
    hidePreviousPage();

    show(id);

    const link = document.querySelector(`#top-menu-bar a[data-id="${id}"]`);
    // console.info("activePage", activePage, "id", id);
    link.classList.add("active");
    activePage = id;
    //console.info("activePage", activePage, "id", id);
}

function listenMenuClicks(){ // MenuInit grupa 5
    document.addEventListener("click", (e) => {
        const link = e.target;
        if (link.matches("#top-menu-bar a")) {
            const id = link.getAttribute("data-id");
            showPage(id);
        }
        
    });
}

listenMenuClicks(); 

showPage(activePage); 

let allSkills = []; 

function showSkills(skills){
    const allSkillsHtml = skills.map((skill) => {
        const cls = skill.favorite ? "favorite" : "";
        return `<li class="${cls}">
        ${skill.name} <span> &middot(${skill.endorcements})</span>
        </li>`;
    });
    
    const skillsEl = document.querySelector("#skills ul");
    skillsEl.innerHTML = allSkillsHtml.join("");

};

fetch("data/skills.json")
    .then(r => r.json())
    .then((skills) => {
        skills.sort((s1,s2) => {
            return s2.endorcements - s1.endorcements;
        });
        showSkills(skills);
    });

showSkills(allSkills);
 
const karatisti = ["Evelina", "Laurentiu", "Nicoleta"];          
console.info(karatisti);

function collectFirstName(karatisti){
    console.info("karatisti: ", karatisti.firstName);
    if (!karatisti){
        console.warn("please provide karatisti");
    }
    const firstNames = karatisti.map((karatist) => {
        return karatisti.firstNames;
    });
    return firstNames;
}
collectFirstName(karatisti);