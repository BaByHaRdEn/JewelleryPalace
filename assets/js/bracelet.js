

    let brcCard= document.getElementById("bracelet-cards");
    let brcBasket=JSON.parse(localStorage.getItem("data")) || [];
 
   
    //Card Return Function
    let braceletCard=()=>{
     return( brcCard.innerHTML= brcCardDetails.map((x)=>{
         let {id, name, price, img, desc}=x;
         let search= brcBasket.find((x)=> x.id === id) || [];
     return(
         `
         <div id=brc-card-${id} class="brc-card">
                     <div class="card-img">
                     <img src=${img} alt="">
                     </div>
                     <div class="card-txt">
                         <h3>${name}</h3>
                         <p>${desc}</p>
                         <div class="price">
                             <h2 class="dollar">&dollar; ${price}</h2>
                             <div class="quantity">
                                 <i onclick="brcDecrement(${id})" class="fa fa-minus"></i>
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="brcIncrement(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" onclick="brcCarting()" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    braceletCard();
 
 let brcIncrement= (id)=>{
     let selectedItem=id;
     let search= brcBasket.find((x)=>x.id === selectedItem);
 
     if (search === undefined) {
         brcBasket.push({
             id: selectedItem,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(brcBasket));
     brcUpdate(selectedItem);
 }
 
 
 let brcDecrement= (id)=>{
     let selectedItem=id;
     let search= brcBasket.find((x)=>x.id === selectedItem);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     brcUpdate(selectedItem);
 
     brcBasket= brcBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(brcBasket));
 }
 
 
 let brcUpdate= (id)=>{
     let search= brcBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item
 
     
 }
 
 let brcCarting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = brcBasket.length;
 
 }
 brcCarting();
