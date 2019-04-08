[...document.querySelectorAll("#main-nav .nav>a")].forEach(x=>{
    x.addEventListener("click",currentLink);
});
function currentLink(){
    [...document.querySelectorAll("#main-nav .nav>a")].forEach(x=>{
        x.classList.remove("activeLink");
    });
        this.classList.add("activeLink");

}