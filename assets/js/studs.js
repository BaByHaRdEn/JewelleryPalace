

    let stdCards= document.getElementById("studs-cards");
    let stdBasket=JSON.parse(localStorage.getItem("data")) || [];
 
    function goBack() {
        window.history.back()
      }
   
   
    //Card Return Function
    let studCards=()=>{
     return( stdCards.innerHTML= stdCardsDetails.map((x)=>{
         let {id, name, price, img, desc}=x;
         let search= stdBasket.find((x)=> x.id === id) || [];
     return(
         `
         <div id=std-card-${id} class="std-card">
                     <div class="card-img">
                     <img src=${img} alt="">
                     </div>
                     <div class="card-txt">
                         <h3>${name}</h3>
                         <p>${desc}</p>
                         <div class="price">
                             <h2 class="dollar">&dollar; ${price}</h2>
                             <div class="quantity">
                                 <i onclick="stdDecrement(${id})" class="fa fa-minus"></i>
                                 <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                 <i onclick="stdIncrement(${id})" class="fa fa-plus"></i>
                             </div>
                         </div>
                         <button class="btn btn-danger" onclick="stdCarting()" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
                     </div>
                 </div>
         `
     )
     }).join(""));
    };
    studCards();
 
 let stdIncrement= (id)=>{
     let selectedItem=id;
     let search= stdBasket.find((x)=>x.id === selectedItem.id);
 
     if (search === undefined) {
         stdBasket.push({
             id: selectedItem.id,
             item:1
         });
     } else {
         search.item += 1;
     }
     
     localStorage.setItem("data", JSON.stringify(stdBasket));
     stdUpdate(selectedItem.id);
 }
 
 
 let stdDecrement= (id)=>{
     let selectedItem=id;
     let search= stdBasket.find((x)=>x.id === selectedItem.id);
 
     if(search === undefined) return
     else if (search.item === 0) return;
     else {
         search.item -= 1;
     }
     
     stdUpdate(selectedItem.id);
 
     stdBasket= stdBasket.filter((x)=> x.item !== 0);
 
     localStorage.setItem("data", JSON.stringify(stdBasket));
 }
 
 
 let stdUpdate= (id)=>{
     let search= stdBasket.find((x)=>x.id === id);
 
     document.getElementById(id).innerHTML=search.item
 
     
 }
 
 let stdCarting= ()=>{
    let cartIcon=  document.getElementById("cartAmount");
    cartIcon.innerHTML = stdBasket.length;
 
 }
 stdCarting();
