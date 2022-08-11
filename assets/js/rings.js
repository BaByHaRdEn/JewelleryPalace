
    let rnCard= document.getElementById("rings-card");
    let rnBasket= JSON.parse(localStorage.getItem("data")) || [];
 
 
    function goBack() {
        window.history.back()
      }
   
   
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
                        <i onclick="rnDecrement(${id})" class="fa fa-minus"></i>
                        <div id=${id} class="amount">${search.item === undefined ? 0: search.item }</div>
                        <i onclick="rnIncrement(${id})" class="fa fa-plus"></i>
                    </div>
                </div>
                <button class="btn btn-danger" onclick="rnCarting()" ><i class="fa fa-cart-plus"></i> Add to Cart</button>
            </div>
        </div>
            `)
        }).join("") )
    };

    ringCard();

    let rnIncrement=(id)=>{
      let selectedItem= id;
        let search= rnBasket.find((x)=>x.id=== selectedItem.id)
       
        if(search === undefined){
            rnBasket.push({
                id: selectedItem.id,
                item: 1
            })
        }else{
            search.item +=1;
        }
        localStorage.setItem("data", JSON.stringify(rnBasket));
        rnUpdate(selectedItem.id);
    }
    let rnDecrement=(id)=>{
       let selectedItem= id;
        let search= rnBasket.find((x)=>x.id=== selectedItem.id)
       
        if(search=== undefined)return;
        else if(search.item === 0)return;
        else{
            search.item -=1;
        }
        rnUpdate(selectedItem.id);

        rnBasket=rnBasket.filter((x)=> x.item !== 0);

        localStorage.setItem("data", JSON.stringify(rnBasket));
    }

    let rnUpdate=(id)=>{
        let search= rnBasket.find((x)=>x.id === id);
 
        document.getElementById(id).innerHTML=search.item;

       
    }

    let rnCarting=()=>{
        let cardAmount = document.getElementById("cartAmount");
        cardAmount.innerHTML=rnBasket.length;
    }
    rnCarting();