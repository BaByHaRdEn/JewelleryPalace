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
    let element = document.body;
    let hero=document.getElementById("hero");
    element.classList.toggle("dark-mode");
    hero.classList.toggle("hero-dark-mode");
})
