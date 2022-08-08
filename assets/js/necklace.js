

    let nkCard= document.getElementById("necklace-cards");
    let nkBasket=JSON.parse(localStorage.getItem("data")) || [];
 
    //Necklace cards Details
    let nkCardDetails=[{
     id:11,
     name: "Silver Earring",
     price: 200,
     img: "/assets/imgs/nkimg/nk1.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:21,
     name: "Gold-plated Earring",
     price: 100,
     img: "/assets/imgs/nkimg/nk2.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:31,
     name: "Solid Gold",
     price: 30,
     img: "/assets/imgs/nkimg/nk3.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:41,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/nkimg/nk4.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:51,
     name: "Bronze Earring",
     price: 45,
     img: "/assets/imgs/nkimg/nk5.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:61,
     name: "Bronze Earring",
     price: 70,
     img: "/assets/imgs/nkimg/nk6.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:71,
     name: "Bronze Earring",
     price: 50,
     img: "/assets/imgs/nkimg/nk7.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:81,
     name: "Bronze Earring",
     price: 120,
     img: "/assets/imgs/nkimg/nk8.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:91,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/nkimg/nk9.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:101,
     name: "Bronze Earring",
     price: 15,
     img: "/assets/imgs/nkimg/nk10.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },]
 
    //Card Return Function
    let necklaceCard=()=>{
     return( nkCard.innerHTML= nkCardDetails.map((x)=>{
         let {id, name, price, img, desc}=x;
         let search= nkBasket.find((x)=> x.id === id) || [];
     return(
         `
         <div id=nk-card-${id} class="nk-card">
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
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="increment(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    necklaceCard();
 
 let increment= (id)=>{
     let selectedItem=id;
     let search= nkBasket.find((x)=>x.id === selectedItem);
 
     if (search === undefined) {
         nkBasket.push({
             id: selectedItem,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(nkBasket));
     update(selectedItem);
 }
 
 
 let decrement= (id)=>{
     let selectedItem=id;
     let search= nkBasket.find((x)=>x.id === selectedItem);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     update(selectedItem);
 
     nkBasket= nkBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(nkBasket));
 }
 
 
 let update= (id)=>{
     let search= nkBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item
 
     nkCarting();
 }
 
 let nkCarting= (y)=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = nkBasket.map((x)=>x.item).reduce((x,y)=> x + y, 0);
 
 }
 nkCarting();
