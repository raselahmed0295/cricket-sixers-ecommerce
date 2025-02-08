
const allBtn = document.getElementsByClassName("btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        
        

        const selectedDiv = document.getElementById('selected-player-container');


        //condition 
        const firstCart = getConvertedValue("cart");
        if (firstCart + 1 > 6) {
            alert("limit sesh are hobe na");
            return;
        }

        event.target.parentNode.style.backgroundColor = "gray";
        event.target.setAttribute("disabled", false);



        //update buget 
        const buget = getConvertedValue("budget");
        document.getElementById("budget").innerText = buget - parseInt(price);

        //cart update

        const cart = getConvertedValue("cart");
        document.getElementById("cart").innerText = cart + 1;


        //left update 
        const left = getConvertedValue("left");
        document.getElementById("left").innerText = left - 1;



        const div = document.createElement("div");
        div.classList.add('selected-player');

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedDiv.appendChild(div);
        
        updateTotalCost(price);
        updateGrandTotal();
    })
}

function updateGrandTotal(status) {
    const totalCost = getConvertedValue("total-cost");
    if (status==undefined) {
        
        document.getElementById('grand-total').innerText = totalCost;
        
    } else {
        
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode=="love13") {
            const discount = totalCost * .2;
            document.getElementById('grand-total').innerText = totalCost - discount;
        } else {
            alert("please enter a valid coupon code");
        }
        
    }

    
        
   
}

function updateTotalCost(value) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(value);

    document.getElementById("total-cost").innerText = sum;
}



function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
    
}

