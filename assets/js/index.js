const card= document.querySelectorAll(".card");

let cards=[...card];
cards.forEach((c)=>{
    c.addEventListener("mouseover", ()=>{
        let layers=document.querySelectorAll(".layer");
        let layer= [...layers]
        layer.forEach((i)=>{
            i.style.display="block";
        })
    })
})
