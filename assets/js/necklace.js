
    let nkCard= document.getElementById("necklace-cards");
    let nkBasket=JSON.parse(localStorage.getItem("data")) || [];
 
 
    function goBack() {
     window.history.back()
   }
 
  
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
                                 <i onclick="nkDecrement(${id})" class="fa fa-minus"></i>
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="nkIncrement(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" onclick="nkCarting()"><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    necklaceCard();
 
 let nkIncrement= (id)=>{
     let selectedItem=id;
     let search= nkBasket.find((x)=>x.id === selectedItem.id);
 
     if (search === undefined) {
         nkBasket.push({
             id: selectedItem.id,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(nkBasket));
     nkUpdate(selectedItem.id);
 }
 
 
 let nkDecrement= (id)=>{
     let selectedItem=id;
     let search= nkBasket.find((x)=>x.id === selectedItem.id);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     nkUpdate(selectedItem.id);
 
     nkBasket= nkBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(nkBasket));
 }
 
 
 let nkUpdate= (id)=>{
     let search= nkBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item;
 
 }
 
 let nkCarting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = nkBasket.length;
 
 }
 nkCarting();
 