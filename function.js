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