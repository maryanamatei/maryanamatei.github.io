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
    //TODO Next Lesson use only pages.forEach
    pageIds.forEach(function(pageId){
        hide(pageId);
    });
    
    for (var i = 0; i < pages.length; i++) {
       var page = pages[i] 
        hide(page.id);
    }
}

function hidePreviousPage(){
    hide(activePage);
}

function showPage(id){ 
    hideAllPages();
    show(id); 
}

function listenMenuClicks(){
    console.warn("not implemented --> ne plangem :)");
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

var skills = [
    "HTML", 
    "CSS", 
    "JS",
    "NodeJS"
];

var skillsLi = skills.map(function(skill){
    console.info(skill);
    return "<li>" + skill + "</li>";
});

// TODO add 'favorite'skill     ora 2:30-33
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join(" ");

ul.innerHTML = skillsLi[0]+ 
               skillsLi[1]+ 
               skillsLi[2];
//document.querySelector("#skills ul").innerHTML = skills[2];

//citesc cu innerHtml prima bucata imi selecteaza ul-ul, 
//apoi