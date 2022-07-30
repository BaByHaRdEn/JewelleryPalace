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
    let dark =document.getElementById("light");
    dark.toggleAttribute("disabled")
    let btn=document.getElementById("toggle")
    btn.classList.toggle("fa-toggle-on")
})
function scrolll() {
    let left = document.getElementById("scroll-cards");
    left.scrollBy(500, 0)
}

function scrollr() {
    let right = document.getElementById("scroll-cards");
    right.scrollBy(-500, 0)
}