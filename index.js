[...document.querySelectorAll("#main-nav .nav>a")].forEach(x=>{
    x.addEventListener("click",currentLink);
});
function currentLink(){
    [...document.querySelectorAll("#main-nav .nav>a")].forEach(x=>{
        x.classList.remove("activeLink");
    });
        this.classList.add("activeLink");

}
function recs(){
    recsInfo.forEach(x=>{
        var rec="<div class='testimonial'><div class='testi'>";
        if (x.pic!=""){
            rec+="<img src='Links/"+x.pic+"'>";
        }
        ////
        rec+="<div>"+"<div class='name'>"+x.name+"</div>"+
        "<div class='pos'>"+x.pos+"</div>"+
        
        "</div></div>";
        //quote
        rec+="<q>"+x.quote+"</q></div>";
        document.querySelector("#rec .content").innerHTML+=rec;
    })
    
}
recs();