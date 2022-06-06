function Data(n,e,a,w){
    this.name = n;
    this.email = e;
    this.address = a;
    this.wallet = w;

}
let data = JSON.parse(localStorage.getItem('user'))||[];
function myfunction(){
   // e.preventDefault()
   // console.log("fd")
   
   let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let address = document.getElementById('address').value;
   let wallet = document.getElementById('amount').value;

   let user1 = new Data(name, email, address, wallet);
   data.push(user1)

   localStorage.setItem('user',JSON.stringify(data))
    
  document.getElementById("name").value = null;
document.getElementById("email").value = null;
  document.getElementById("address").value = null;
  document.getElementById("amount").value = null;

}