

let url =
  "https://masai-vouchers-api.herokuapp.com/api/vouchers";
 async function myfunction() {
  try {
     
        let res = await fetch(url);
        let data = await res.json();
        append(data[0].vouchers);
        // console.log(data[0].vouchers)
      
} catch (error) {
    console.log(error)
}
 }
  myfunction()
  let x = document.getElementById("wallet_balance")
let user = JSON.parse(localStorage.getItem("user")) || [];
user.map(function(ele){
    x.innerHTML =ele.wallet
//document.querySelector("wallet_balance").appende();
})

function append(data){

    data.forEach(function(ele){

        let box = document.createElement('div');
            box.setAttribute('class','voucher')

            
        let img = document.createElement("img");
        img.src=ele.image;

            
        let name = document.createElement("h3");
        name.innerText = ele.name;

            
        let price = document.createElement("p");
        price.innerText = ele.price;

          let button = document.createElement("button");
          button.innerText = "Buy";
          button.setAttribute("class","buy_voucher")
          button.addEventListener('click',function(){
              add(ele)
          })

        box.append(img,name,price,button);
        document.querySelector("#voucher_list").append(box);

    })
}

function add(ele){

   
     let x = document.getElementById("wallet_balance").innerText;

      if (Number(ele.price) <= Number(x)){
     
        let  y  = Number(x)-Number(ele.price)
           //  Number(x) - Number(ele.price);
        
        let user =  JSON.parse(localStorage.getItem("user")) || [];
          //user.wallet=y
       
user[0].wallet = y
console.log(user[0].wallet);

     location.reload()
      // console.log(y)
      
        //   localStorage.setItem(
        //     "user",
        //     JSON.stringify(user[0].wallet=y)
        //   );


          localStorage.setItem(
            "purchase",
            JSON.stringify(ele)

         
          );
             alert("Hurray! purchase successful");
      }
      else{
          alert("Sorry! insufficient balance");
      }
      
}