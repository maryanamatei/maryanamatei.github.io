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
    var pages = document.querySelectorAll(".page");
    //console.debug(pagesIds);
    
    // initial    ;    condition     ; post execution
    for (var i = 0; i < pages.length;   i++) {
       // console.info('i =', i, );
        var page = pages[i]
        //console.warn(page.id); -->fiecare id al paginilor gasite de el
        hide(page.id);
        //hide(pages[i].id); --> aceste linii fac acelasi lucru
        //hide(pagesIds[i]);
    }

}

function hidePreviousPage(){
    hide(activePage);
}

function showPage(id){ 
    hideAllPages();
   // hidePreviousPage();
    show(id);  
    //activePage = id;
}

function initMenu(){
    console.warn('prepare click on links');
    document.addEventListener("click",  function(e){
        var link =e.target
       if (link.matches("#top-menu-bar a")){
           var id = link.getAttribute("data-page");
           console.info("click", id);
           showPage(id);
           //link.classList.add("active");

       }
        
    })
    
}

initMenu();

showPage(activePage); 

var skills = [
    "HTML", 
    "CSS", 
    "JS",
    "NodeJS"
];
//dupa ce ducem skills in js -->vom itera elementele din acest array oricte ar fi ele in mod dinamic
//var skillsLi_tmp = [
 //   "<li>" + skills[0]+ "</li>",
  //  "<li>" + skills[0]+ "</li>",
  //  "<li>" + skills[0]+ "</li>"
//]

var skillsLi = skills.map(function(skill){
    console.info(skill);
    return "<li>" + skill + "</li>";
});

// TODO add 'favorite'skill     ora 2:30-33
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join(" ");

//ul.innerHTML = skillsLi[0]+ 
               skillsLi[1]+ 
               skillsLi[2];
//document.querySelector("#skills ul").innerHTML = skills[2];

//citesc cu innerHtml prima bucata imi selecteaza ul-ul, 
//apoi