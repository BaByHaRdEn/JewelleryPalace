let cartItems= document.getElementById("cart-items");
let checkout= document.getElementById("checkout");
const modeBtn= document.getElementById("night-mode-toggle")
const scCard= document.querySelectorAll(".sc-card");
let scrCards=document.getElementById("scroll-cards");


 //Light and dark mode
 modeBtn.addEventListener("click", ()=>{
    let dark =document.getElementById("light");
    dark.toggleAttribute("disabled")
    let btn=document.getElementById("toggle")
    btn.classList.toggle("fa-toggle-on")
})

let cart=JSON.parse(localStorage.getItem("data")) || [];

let carting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = cart.length;
 
 }
 carting();

 let generateCartItems= ()=>{
    if (cart.length !== 0) {
        return cartItems.innerHTML= cart.map((x)=>{
            let {id, item}=x;
            let search =cartData.find((x)=> x.id == id) || [];
            return `
            <div class="cart-item">
            <img width=120px src=${search.img} />
            <div class="card-details">
            <div class="title-x">
            <h5>${search.name}</h5>
            <i onclick="removeItem(${id})" class="fa fa-trash" aria-hidden="true"></i>
            </div>
            <div class="price-qty-x"> 
            <div class="qty">
                <i onclick="decrement(${id})" class="fa fa-minus"></i>
                <div id=${id} class="amount">${item}</div>
                <i onclick="increment(${id})" class="fa fa-plus"></i>
            </div>
            <div class="price-x">
            <h4>&dollar; ${item * search.price}</h4>
            </div>
            </div>
            <h5> &dollar; ${search.price}</h5>
            </div>
            </div>
            `
        }).join("")
    } else {
        cartItems.innerHTML =``;
        checkout.innerHTML= `
        <p><i class="fa fa-cart-arrow-down fa-flip" style="--fa-flip-x: 0; --fa-flip-y: 1; --fa-animation-duration: 3s;"  ></i></p>

        <h2>Your Cart is Empty</h2>
        <h4>That means it's full of possibilities. Find the next Jewellery to spice up your looks.</h4>
        <a href="index.html"><button class="btn btn-danger ">Continue shopping <i class="fa-solid fa-angle-double-right fa-fade"></i></button></a>
        `
    }
 }

 generateCartItems();

 let options= ()=>{
    if (cart.length !== 0) {
        return document.getElementById("options").innerHTML= 
        `<div id="bsp">
         <header>You may also like</header>
         <div id="cover">
         <div>
             <button class="icon" onclick="scrollr()"><i class="fa fa-angle-double-left"></i></button>
         </div>
             <!--Scroll cards-->
             <div id="scroll-cards">
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (1)1.png" alt="">
                     </div>
                        <button class="btn btn-danger"><a href="rings.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (1).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="rings.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (11).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (12).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="rings.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (13).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (14).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (15).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href=""><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (16).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="bracelets.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/erimg/er5.png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (18).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="earrings.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (19).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (20).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
                 <div class="sc-card">
                     <div class="card-img">
                     <img src="assets/imgs/slide (2).png" alt="">
                     </div>
                     <button class="btn btn-danger"><a href="necklace.html"><i class="fa fa-cart-plus"></i></a></button>
                 </div>
             </div>
         <div>
             <button class="icon" onclick="scrolll() "><i class="fa fa-angle-double-right"></i></button>
         </div>
         </div>
     </div>
        ` }else{
            document.getElementById("options").innerHTML=``
        }
 }
 options();

 let increment= (id)=>{
    let selectedItem=id;
    let search= cart.find((x)=>x.id === selectedItem.id);

    if (search === undefined) {
        cart.push({
            id: selectedItem.id,
            item:1
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem("data", JSON.stringify(cart));
    generateCartItems();
    TotalAmount();
    update(selectedItem.id);
}


let decrement= (id)=>{
    let selectedItem=id;
    let search= cart.find((x)=>x.id === selectedItem.id);

    if(search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    update(selectedItem.id);

    cart= cart.filter((x)=> x.item !== 0);
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(cart));
}


let update= (id)=>{
    let search= cart.find((x)=>x.id === id);

    document.getElementById(id).innerHTML=search.item;

}
let removeItem= (id)=>{
    let selectedItem= id;
    cart= cart.filter((x)=>x.id !== selectedItem.id);
    localStorage.setItem("data", JSON.stringify(cart));
    generateCartItems();
    carting();
    TotalAmount();
}

let clearCart= ()=>{
    cart=[];
    generateCartItems();
    carting();
    localStorage.setItem("data", JSON.stringify(cart));
}

let TotalAmount = () => {
    if (cart.length !== 0) {
      let amount = cart
        .map((x) => {
          let { id, item } = x;
          let filterData = cartData.find((x)=> x.id == id) || [];
          return filterData.price * item;
        })
        .reduce((x, y) => x + y, 0);
  
      return (checkout.innerHTML = `
      <h2>Total: $ ${amount}</h2>
      <p onclick="clearCart()" class="clear-cart"><i class="fa fa-trash"></i>Empty Cart</p>
      <button class="btn checkout"><i class=" fa fa-check"></i>Checkout </button>
      `);
    } else return;
  };
  
  TotalAmount();
  
  function scrolll() {
    let left = document.getElementById("scroll-cards");
    left.scrollBy(280, 0)
}

function scrollr() {
    let right = document.getElementById("scroll-cards");
    right.scrollBy(-280, 0)
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
