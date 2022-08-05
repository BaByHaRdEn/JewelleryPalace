const card= document.querySelectorAll(".card");
const modeBtn= document.getElementById("night-mode-toggle")
const scCard= document.querySelectorAll(".sc-card");
let scrCards=document.getElementById("scroll-cards");
let erCard= document.getElementById("earring-cards");


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


//viewall
/*
let viewAll= document.getElementById("va");
viewAll.addEventListener("click", ()=>{
    const allCards = document.querySelectorAll('.va');

for (const cards of allCards) {
  cards.classList.toggle(
    'va'
  );
}
viewAll.innerHTML="Show Less <i class='fa fa-angle-double-right'></i>"
   })
*/

   //Earring cards Details
   let cardDetails=[{
    id:1,
    name: "Silver Earring",
    price: 200,
    img: "/assets/imgs/er1.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:2,
    name: "Gold-plated Earring",
    price: 100,
    img: "/assets/imgs/er2.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:3,
    name: "Solid Gold",
    price: 30,
    img: "/assets/imgs/er3.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:4,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er4.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:5,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er5.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:6,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er6.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:7,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er7.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:8,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er8.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:9,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er9.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:10,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/er10.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },]

   //Card Return Function
   let earringCard=()=>{
    return( erCard.innerHTML= cardDetails.map((x)=>{
        let {id, name, price, img, desc}=x
    return(
        `
        <div id=er-card-${id} class="er-card">
                    <div class="card-img">
                    <img src=${img} alt="">
                    </div>
                    <div class="card-txt">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price">
                            <h2 class="dollar">&dollar; ${price}</h2>
                            <div class="quantity">
                                <i onclick="decrement(${id})" class="fa fa-minus"></i>
                                <div id=${id} class="amount">0</div>
                                <i onclick="increment(${id})" class="fa fa-plus"></i>
                            </div>
                        </div>
                        <button class="btn btn-danger"><i class="fa fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
        `
    )
    }).join(""));
   };
   earringCard();

let increment= (id)=>{
    console.log(id )
}


let decrement= (id)=>{
    console.log(id )
}


let update= ()=>{}