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
    //console.info("show id=", id);
    document.getElementById(id).style.display = '';
}

function hideAllPages(){
    var pages = Array.from(document.querySelectorAll(".page"));
    var pageIds = pages.map(function(page){
        return page.id;
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
        //console.warn('link?', link.matches("#top-menu-bar a")); // zice daca am dat click pe linkuri
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
           // console.warn('click', id);
            showPage(id);
        }
        
    });
}

listenMenuClicks(); //--> initializarea meniului

//function initMenu(){
  //  console.warn('prepare click on links');
   // document.addEventListener("click",  function(e){
       // var link =e.target
       //if (link.matches("#top-menu-bar a")){
          // var id = link.getAttribute("data-page");
          // console.info("click", id);
           //showPage(id);}
    //})
//}

//initMenu();

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