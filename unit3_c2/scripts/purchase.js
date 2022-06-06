      let data = JSON.parse(localStorage.getItem("purchase")) || [];


             data.map(function (ele) {
               let box = document.createElement("div");
            

               let img = document.createElement("img");
               img.src = ele.image;

               let name = document.createElement("h3");
               name.innerText = ele.name;

               let price = document.createElement("p");
               price.innerText = ele.price;

               box.append(img,name,price);
               document.querySelector(
                 "#purchased_vouchers"
               ).append(box);
             });
         // console.log("sf")

        