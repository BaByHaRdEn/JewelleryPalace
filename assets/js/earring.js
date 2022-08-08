
    let erCard= document.getElementById("earring-cards");
   let erbasket=JSON.parse(localStorage.getItem("data")) || [];


   //Earring cards Details
   let erCardDetails=[{
    id:1,
    name: "Silver Earring",
    price: 200,
    img: "/assets/imgs/erimg/er1.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:2,
    name: "Gold-plated Earring",
    price: 100,
    img: "/assets/imgs/erimg/er2.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:3,
    name: "Solid Gold",
    price: 30,
    img: "/assets/imgs/erimg/er3.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:4,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/erimg/er4.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:5,
    name: "Bronze Earring",
    price: 45,
    img: "/assets/imgs/erimg/er5.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:6,
    name: "Bronze Earring",
    price: 70,
    img: "/assets/imgs/erimg/er6.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:7,
    name: "Bronze Earring",
    price: 50,
    img: "/assets/imgs/erimg/er7.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:8,
    name: "Bronze Earring",
    price: 120,
    img: "/assets/imgs/erimg/er8.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:9,
    name: "Bronze Earring",
    price: 10,
    img: "/assets/imgs/erimg/er9.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },
   {
    id:10,
    name: "Bronze Earring",
    price: 15,
    img: "/assets/imgs/erimg/er10.png",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
   },]

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
   earringCard();

let increment= (id)=>{
    let selectedItem=id;
    let search= erbasket.find((x)=>x.id === selectedItem);

    if (search === undefined) {
        erbasket.push({
            id: selectedItem,
            item:1
        });
    } else {
        search.item += 1;
    }
    
    localStorage.setItem("data", JSON.stringify(erbasket));
    update(selectedItem);
}


let decrement= (id)=>{
    let selectedItem=id;
    let search= erbasket.find((x)=>x.id === selectedItem);

    if(search === undefined) return
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    
    update(selectedItem);

    erbasket= erbasket.filter((x)=> x.item !== 0);

    localStorage.setItem("data", JSON.stringify(erbasket));
}


let update= (id)=>{
    let search= erbasket.find((x)=>x.id === id);

    document.getElementById(id).innerHTML=search.item

    carting();
}

let carting= (id)=>{
   let cartIcon=  document.getElementById("cartAmount");
   cartIcon.innerHTML = erbasket.map((x)=>x.item).reduce((x,y)=> x + y, 0);

}
carting();