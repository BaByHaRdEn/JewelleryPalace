const card= document.querySelectorAll(".card");
const modeBtn= document.getElementById("night-mode-toggle")
const scCard= document.querySelectorAll(".sc-card");

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
let viewAll= document.getElementById("va");
viewAll.addEventListener("click", ()=>{
    const boxes = document.querySelectorAll('.va');

for (const box of boxes) {
  box.classList.toggle(
    'va'
  );
}
   })