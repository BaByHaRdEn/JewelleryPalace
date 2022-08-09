
    let rnCard= document.getElementById("rings-card");
    let rnBasket= JSON.parse(localStorage.getItem("data")) || [];
 
 
    //Ring cards Details
    let rnCardDetails=[{
     id:11,
     name: "Silver Earring",
     price: 200,
     img: "/assets/imgs/rngimg/rn1.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:12,
     name: "Gold-plated Earring",
     price: 100,
     img: "/assets/imgs/rngimg/rn2.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:13,
     name: "Solid Gold",
     price: 30,
     img: "/assets/imgs/rngimg/rn3.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:14,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/rngimg/rn4.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:15,
     name: "Bronze Earring",
     price: 45,
     img: "/assets/imgs/rngimg/rn5.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:16,
     name: "Bronze Earring",
     price: 70,
     img: "/assets/imgs/rngimg/rn6.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:17,
     name: "Bronze Earring",
     price: 50,
     img: "/assets/imgs/rngimg/rn7.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:18,
     name: "Bronze Earring",
     price: 120,
     img: "/assets/imgs/rngimg/rn8.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:19,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/rngimg/rn9.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:110,
     name: "Bronze Earring",
     price: 15,
     img: "/assets/imgs/rngimg/rn10.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },]
 
    let ringCard=()=>{
        return(rnCard.innerHTML=rnCardDetails.map((x)=>{
            let {id, name, price, img, desc}=x;
            let search= rnBasket.find((x)=> x.id === id) || [];
            return(`
            <div  class="rn-cards">
            <div class="card-img">
            <img src=${img} alt="">
            </div>
            <div class="card-txt">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price">
                    <h2 class="dollar">&dollar;${price}</h2>
                    <div class="quantity">
                        <i onclick="decrement(${id})" class="fa fa-minus"></i>
                        <div id=${id} class="amount">${search.item === undefined ? 0: search.item }</div>
                        <i onclick="increment(${id})" class="fa fa-plus"></i>
                    </div>
                </div>
                <button class="btn btn-danger" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
            </div>
        </div>
            `)
        }).join("") )
    };

    ringCard();

    let increment=(id)=>{
        selectedItem= id;
        let search= rnBasket.find((x)=>x.id=== selectedItem)
       
        if(search === undefined){
            rnBasket.push({
                id: selectedItem,
                item: 1
            })
        }else{
            search.item +=1;
        }
        localStorage.setItem("data", JSON.stringify(rnBasket));
        update(selectedItem);
    }
    let decrement=(id)=>{
        selectedItem= id;
        let search= rnBasket.find((x)=>x.id=== selectedItem)
       
        if(search=== undefined)return;
        else if(search.item === 0)return;
        else{
            search.item -=1;
        }
        update(selectedItem);

        rnBasket=rnBasket.filter((x)=> x.item !== 0);

        localStorage.setItem("data", JSON.stringify(rnBasket));
    }

    let update=(id)=>{
        let search= rnBasket.find((x)=>x.id === id);
 
        document.getElementById(id).innerHTML=search.item;

        rnCarting();
    }

    let rnCarting=()=>{
        let cardAmount = document.getElementById("cartAmount");
        cardAmount.innerHTML=rnBasket.length;
    }
    rnCarting();