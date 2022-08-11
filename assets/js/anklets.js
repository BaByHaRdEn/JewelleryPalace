

    let ankCard= document.getElementById("anklet-cards");
    let ankBasket=JSON.parse(localStorage.getItem("data")) || [];
 
    function goBack() {
        window.history.back()
      }
   
    //Card Return Function
    let ankletCard=()=>{
     return( ankCard.innerHTML= ankCardDetails.map((x)=>{
         let {id, name, price, img, desc}=x;
         let search= ankBasket.find((x)=> x.id === id) || [];
     return(
         `
         <div id=ank-card-${id} class="ank-card">
                     <div class="card-img">
                     <img src=${img} alt="">
                     </div>
                     <div class="card-txt">
                         <h3>${name}</h3>
                         <p>${desc}</p>
                         <div class="price">
                             <h2 class="dollar">&dollar; ${price}</h2>
                             <div class="quantity">
                                 <i onclick="ankDecrement(${id})" class="fa fa-minus"></i>
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="ankIncrement(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" onclick="ankCarting()" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    ankletCard();
 
 let ankIncrement= (id)=>{
     let selectedItem=id;
     let search= ankBasket.find((x)=>x.id === selectedItem);
 
     if (search === undefined) {
         ankBasket.push({
             id: selectedItem,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(ankBasket));
     ankUpdate(selectedItem);
 }
 
 
 let ankDecrement= (id)=>{
     let selectedItem=id;
     let search= ankBasket.find((x)=>x.id === selectedItem);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     ankUpdate(selectedItem);
 
     ankBasket= ankBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(ankBasket));
 }
 
 
 let ankUpdate= (id)=>{
     let search= ankBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item
 
     
 }
 
 let ankCarting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = ankBasket.length;
 
 }
 ankCarting();
