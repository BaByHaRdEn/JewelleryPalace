const card= document.querySelectorAll(".card");

let cards=[...card];
cards.forEach((c,i)=>{
    cards[i].addEventListener("mouseover", ()=>{
        card[i].firstElementChild.style.display="block";
    })
    card[i].addEventListener('mouseout', ()=>{
        card[i].firstElementChild.style.display="none";
    })
})
