[...document.querySelectorAll("#projects2 p")].forEach(x=>{
    x.remove();
});
[...document.querySelectorAll("#projects2 .exp")].forEach(x=>{
    x.addEventListener("click",function (){
        document.getElementById("modal").style.display="block"
    });
});
document.getElementById("modal").addEventListener("click",function(){
this.style.display="none"
});
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
[...document.querySelectorAll("#projects2 p")].forEach(x=>{
    x.childNode.remove;
});