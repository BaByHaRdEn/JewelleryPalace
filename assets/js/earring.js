
    let erCard= document.getElementById("earring-cards");
   let erbasket=JSON.parse(localStorage.getItem("data")) || [];


   function goBack() {
    window.history.back()
  }

 
   //Card Return Function
   let earringCard=()=>{
    return( erCard.innerHTML= erCardDetails.map((x)=>{
        let {id, name, price, img, desc}=x;
        let search= erbasket.find((x)=> x.id === id) || [];
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
                                <i onclick="erDecrement(${id})" class="fa fa-minus"></i>
                                <div id=${id} class="amount">${search.item === undefined ?0 : search.item}</div>
                                <i onclick="erIncrement(${id})" class="fa fa-plus"></i>
                            </div>
                        </div>
                        <button class="btn btn-danger" onclick="erCarting()"><i class="fa fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
        `
    )
    }).join(""));
   };
   earringCard();

let erIncrement= (id)=>{
    let selectedItem=id;
    let search= erbasket.find((x)=>x.id === selectedItem.id);

    if (search === undefined) {
        erbasket.push({
            id: selectedItem.id,
            item:1
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem("data", JSON.stringify(erbasket));
    erUpdate(selectedItem.id);
}


let erDecrement= (id)=>{
    let selectedItem=id;
    let search= erbasket.find((x)=>x.id === selectedItem.id);

    if(search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    erUpdate(selectedItem.id);

    erbasket= erbasket.filter((x)=> x.item !== 0);

    localStorage.setItem("data", JSON.stringify(erbasket));
}


let erUpdate= (id)=>{
    let search= erbasket.find((x)=>x.id === id);

    document.getElementById(id).innerHTML=search.item;

}

let erCarting= ()=>{
   let cartIcon=  document.getElementById("cartAmount");
   cartIcon.innerHTML = erbasket.length;

}
erCarting();
