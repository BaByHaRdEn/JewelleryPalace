const card= document.querySelectorAll(".card");
const modeBtn= document.getElementById("night-mode-toggle")

//categories
let cards=[...card];
cards.forEach((c,i)=>{
    cards[i].addEventListener("mouseover", ()=>{
        card[i].firstElementChild.style.display="block";
    })
    card[i].addEventListener('mouseout', ()=>{
        card[i].firstElementChild.style.display="none";
    })
})

//Light and dark mode
modeBtn.addEventListener("click", ()=>{
    let dark =document.getElementById("light");
    dark.toggleAttribute("disabled")
    let btn=document.getElementById("toggle")
    btn.classList.toggle("fa-toggle-on")
})
// arrow keys
function scrolll() {
    let left = document.getElementById("scroll-cards");
    left.scrollBy(300, 0)
}

function scrollr() {
    let right = document.getElementById("scroll-cards");
    right.scrollBy(-300, 0)
}