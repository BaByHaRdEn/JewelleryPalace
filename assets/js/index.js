const card= document.querySelectorAll(".card");
const modeBtn= document.getElementById("night-mode-toggle")

let cards=[...card];
cards.forEach((c,i)=>{
    cards[i].addEventListener("mouseover", ()=>{
        card[i].firstElementChild.style.display="block";
    })
    card[i].addEventListener('mouseout', ()=>{
        card[i].firstElementChild.style.display="none";
    })
})

modeBtn.addEventListener("click", ()=>{
    if(document.body.style.backgroundColor = "black"){
    document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "black";
    }
    
})
