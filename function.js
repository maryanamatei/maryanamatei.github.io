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