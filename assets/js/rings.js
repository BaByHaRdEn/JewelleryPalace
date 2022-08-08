
    let rnCard= document.getElementById("rings-card");
    let rnBasket= JSON.parse(localStorage.getItem("rndata")) || [];
 
 
    //Ring cards Details
    let rnCardDetails=[{
     id:1,
     name: "Silver Earring",
     price: 200,
     img: "/assets/imgs/rngimg/rn1.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:2,
     name: "Gold-plated Earring",
     price: 100,
     img: "/assets/imgs/rngimg/rn2.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:3,
     name: "Solid Gold",
     price: 30,
     img: "/assets/imgs/rngimg/rn3.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:4,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/rngimg/rn4.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:5,
     name: "Bronze Earring",
     price: 45,
     img: "/assets/imgs/rngimg/rn5.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:6,
     name: "Bronze Earring",
     price: 70,
     img: "/assets/imgs/rngimg/rn6.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:7,
     name: "Bronze Earring",
     price: 50,
     img: "/assets/imgs/rngimg/rn7.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:8,
     name: "Bronze Earring",
     price: 120,
     img: "/assets/imgs/rngimg/rn8.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:9,
     name: "Bronze Earring",
     price: 10,
     img: "/assets/imgs/rngimg/rn9.png",
     desc: " Lorem ipsum dolor sit, amet consectetur adipisicing."
    },
    {
     id:10,
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
        localStorage.setItem("rndata", JSON.stringify(rnBasket));
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

        localStorage.setItem("rndata", JSON.stringify(rnBasket));
    }

    let update=(id)=>{
        let search= rnBasket.find((x)=>x.id === id);
 
        document.getElementById(id).innerHTML=search.item;

        rnCarting();
    }

    let rnCarting=()=>{
        let cardAmount = document.getElementById("cartAmount");
        cardAmount.innerHTML=rnBasket.map((x)=> x.item).reduce((x,y)=> x + y, 0)
    }
    rnCarting();