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
            <h5> &dollar; ${search.price}</h5>
            </div>
            </div>
            <h4>&dollar; ${item * search.price}</h4>
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

 let increment= (id)=>{
    let selectedItem=id;
    let search= cart.find((x)=>x.id === selectedItem);

    if (search === undefined) {
        cart.push({
            id: selectedItem,
            item:1
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem("data", JSON.stringify(cart));
    generateCartItems();
    TotalAmount();
    update(selectedItem);
}


let decrement= (id)=>{
    let selectedItem=id;
    let search= cart.find((x)=>x.id === selectedItem);

    if(search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    update(selectedItem);

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
    cart= cart.filter((x)=>x.id !== selectedItem);
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
  