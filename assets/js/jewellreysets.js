

    let jwsCard= document.getElementById("set-cards");
    let jwsBasket=JSON.parse(localStorage.getItem("data")) || [];
 
    function goBack() {
        window.history.back()
      }
   
    //Card Return Function
    let jewellerySetCard=()=>{
     return( jwsCard.innerHTML= jwsCardDetails.map((x)=>{
         let {id, name, price, img, desc}=x;
         let search= jwsBasket.find((x)=> x.id === id) || [];
     return(
         `
         <div id=set-card-${id} class="set-card">
                     <div class="card-img">
                     <img src=${img} alt="">
                     </div>
                     <div class="card-txt">
                         <h3>${name}</h3>
                         <p>${desc}</p>
                         <div class="price">
                             <h2 class="dollar">&dollar; ${price}</h2>
                             <div class="quantity">
                                 <i onclick="jwsDecrement(${id})" class="fa fa-minus"></i>
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="jwsIncrement(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" onclick="jwsCarting()" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    jewellerySetCard();
 
 let jwsIncrement= (id)=>{
     let selectedItem=id;
     let search= jwsBasket.find((x)=>x.id === selectedItem.id);
 
     if (search === undefined) {
         jwsBasket.push({
             id: selectedItem.id,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(jwsBasket));
     jwsUpdate(selectedItem.id);
 }
 
 
 let jwsDecrement= (id)=>{
     let selectedItem=id;
     let search= jwsBasket.find((x)=>x.id === selectedItem.id);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     jwsUpdate(selectedItem.id);
 
     jwsBasket= jwsBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(jwsBasket));
 }
 
 
 let jwsUpdate= (id)=>{
     let search= jwsBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item
 
     
 }
 
 let jwsCarting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = jwsBasket.length;
 
 }
 jwsCarting();
