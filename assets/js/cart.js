let cartItems= document.getElementById("cart-items");
let checkout= document.getElementById("checkout");
const modeBtn= document.getElementById("night-mode-toggle")


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
            <img width=100px src=${search.img} />
            <div class="card-details">
            <h5>${search.name}</h5>
            <i class="fa fa-trash" aria-hidden="true"></i>
            <div class="price-qty-x"> 
            <div class="qty">
            <i class="fa fa-minus"></i>
            <div class="amount">0</div>
            <i class="fa fa-plus"></i>
            </div>
            <div class="price-x">
            <h5> &dollar; ${search.price}</h5>
            </div>
            </div>
            </div>
            </div>
            `
        }).join("")
    } else {
        cartItems.innerHTML =``;
        checkout.innerHTML= `
        <p><i class="fa fa-cart-arrow-down fa-flip" style="--fa-flip-x: 0; --fa-flip-y: 1; --fa-animation-duration: 3s;"  ></i></p>

        <h2>Your Cart is Empty</h2>
        <h4>That means it's full of possibilities. Find your next Jewellery to spice up your looks.</h4>
        <a href="index.html"><button class="btn btn-danger ">Continue shopping <i class="fa-solid fa-angle-double-right fa-fade"></i></button></a>
        `
    }
 }

 generateCartItems();

