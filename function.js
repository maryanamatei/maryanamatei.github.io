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

