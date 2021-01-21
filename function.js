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
        //console.info('i =', i, pagesIds[i])
    }

}

function showPage(id){ 
    hideAllPages();
    show(id);  
}

function initMenu(){
    console.warn('prepare click on links');
    document.addEventListener("click",  function(e){
        var link =e.target
       if (e.target.matches("#top-menu-bar a")){
           var id = link.innerHTML.toLowerCase();
           console.info("click", id);
           showPage(id);

       }
        
    })
    
}

initMenu();

showPage("skills");

var skills = ["HTML", "CSS", "JS"];

// TODO add 'favorite'skill
var ul = document.querySelector("#skills ul");
ul.innerHTML = "<li>" + skills[0]+ "</li>" + 
               "<li>" + skills[1] + "</li>" + 
               "<li>" + skills[2] + "</li>";
//document.querySelector("#skills ul").innerHTML = skills[2];

//citesc cu innerHtml prima bucata imi selecteaza ul-ul, 
//apoi