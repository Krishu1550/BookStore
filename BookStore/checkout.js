if (localStorage.getItem("AddCardBooks")) {
  var Books = JSON.parse(localStorage.getItem("AddCardBooks"));
  console.log(Books);
  var listOfBook = document.getElementById("checkoutItem");
  for (bookindex in Books) {
    listOfBook.innerHTML += `<div class="row mt-1 mb-3"> <div class="card" style="height:50rem weight:18rem" >
    <img class="card-img-top mh-25" height="30%" src="https://source.unsplash.com/random/?Book&${
      bookindex + 20
    }" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title" id="topcardtitle${bookindex}">${
      Books[bookindex].Name
    }</h5>
        <p class="card-text text-justify " id="topcardtext${bookindex}"> ${
      Books[bookindex].Description
    }</p>
        <p class="card-text text-justify " id="topcardauthur${bookindex}">Author: ${
      Books[bookindex].Authur
    }</p>
        <h6 class="mt-5 " id="topcardprice${bookindex}">Price: ${
      Books[bookindex].Price
    }</h6>
       
    </div>
    <div class="card-footer text-right">
    <button class="btn btn-danger " onclick="RemoveFromCard(${
      Books[bookindex].BoookId
    })">Remove</button>
    </div>
</div>
</div><hr/>`;
  }
} else {
  document.getElementById("checkoutItem").textContent =
    "Not Book Please Add the Product in Card";
  document.getElementById("OrderButtonId").classList.add("invisible");
}

function RemoveFromCard(bookid) {
  console.log(bookid);
  var cardProducts = [];
  if (localStorage.getItem("AddCardBooks")) {
    cardProducts = JSON.parse(localStorage.getItem("AddCardBooks"));
  }
  var book = Books.filter((b) => b.BoookId == bookid);
  console.log(cardProducts.map((p) => p.BoookId).indexOf(book[0].BoookId));
  console.log(book[0]);
  let indexbook = cardProducts.map((p) => p.BoookId).indexOf(book[0].BoookId);
  cardProducts.splice(indexbook, 1);
  console.log(cardProducts);
  localStorage.setItem("AddCardBooks", JSON.stringify(cardProducts));
  window.location.reload();
}
function PlaceOrder() {
  var orderlisttoplace = document.getElementById("checkoutItem");
  orderlisttoplace.innerHTML = "";
  var orderid = Math.floor(Math.random() * 1000);
  orderlisttoplace.textContent =
    "Your Order Placed SuccessFully. Your OrderId: " + orderid;
  orderlisttoplace.style.color = "Green";
  localStorage.removeItem("AddCardBooks");
  document.getElementById("OrderButtonId").classList.add("invisible");
}
