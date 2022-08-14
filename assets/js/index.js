const card= document.querySelectorAll(".card");
const modeBtn= document.getElementById("night-mode-toggle")
const scCard= document.querySelectorAll(".sc-card");
let scrCards=document.getElementById("scroll-cards");



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
    btn.classList.toggle("fa-lightbulb-o")
})
// arrow keys
function scrolll() {
    let left = document.getElementById("scroll-cards");
    left.scrollBy(290, 0)
}

function scrollr() {
    let right = document.getElementById("scroll-cards");
    right.scrollBy(-290, 0)
}

//scroll cards
let SCcards=[...scCard];
SCcards.forEach((c,i)=>{
    SCcards[i].addEventListener("mouseover", ()=>{
        scCard[i].lastElementChild.style.visibility="visible";
    })
    scCard[i].addEventListener('mouseout', ()=>{
        scCard[i].lastElementChild.style.visibility="hidden";
    })
})


let cart=JSON.parse(localStorage.getItem("data")) || [];

let carting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = cart.length;
 
 }
 carting();

