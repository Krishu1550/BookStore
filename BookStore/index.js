console.log("hello World");
let Books = [
  {
    BoookId: 1001,
    Name: "A Tale of Two Cities",
    Authur: "Charles Dickens",
    Description:
      "A Tale of Two Cities is a historical novel published in 1859 by Charles Dickens, set in London and Paris before and during the French Revolution.",
    Price: 200,
  },
  {
    BoookId: 1002,
    Name: "The Little Prince",
    Authur: "Antoine de Saint-Exupéry",
    Description:
      "The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁɛ̃s]) is a novella written and illustrated by French aristocrat, writer, and military pilot Antoine de Saint-Exupéry.",
    Price: 200,
  },
  {
    BoookId: 1003,
    Name: "Harry Potter and the Philosopher's Stone",
    Authur: "J. K. Rowling",
    Description:
      " it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends",
    Price: 120,
  },
  {
    BoookId: 1004,
    Name: "The Hobbit",
    Authur: "J. R. R. Tolkien",
    Description:
      "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction",
    Price: 100,
  },

  {
    BoookId: 1005,
    Name: "Dream of the Red Chamber ",
    Authur: "J. R. R. Tolkien",
    Description:
      "The Story of the Stone (Shitou Ji) is a novel composed by Cao Xueqin in the middle of the 18th century. One of the Four Great Classical Novels of Chinese literature",
    Price: 105,
  },
  {
    BoookId: 1006,
    Name: "Vardi Wala Gunda",
    Authur: "Ved Prakash Sharma",
    Description:
      "The main characters in his detective novels were Vijay, Vikas, Raghunath, Alphanse, Vibha Jindal, Keshav Pandit and Raina.",
    Price: 105,
  },
];

console.log(Books);

console.log(Books);
let topcardtitle1 = document.getElementById("topcardtitle1");
let topcardprice1 = document.getElementById("topcardprice1");
let topcardtext1 = document.getElementById("topcardtext1");
let i = Math.floor(Math.random() * 5);
topcardprice1.textContent = "Price: " + Books[i].Price;
topcardtext1.textContent = Books[i].Description.slice(0, 100);
topcardtitle1.textContent = Books[i].Name;

let topcardtitle2 = document.getElementById("topcardtitle2");
let topcardprice2 = document.getElementById("topcardprice2");
let topcardtext2 = document.getElementById("topcardtext2");
let j = Math.floor(Math.random() * 5);
topcardprice2.textContent = "Price: " + Books[j].Price;
topcardtext2.textContent = Books[j].Description.slice(0, 100);
topcardtitle2.textContent = Books[j].Name;

let topcardtitle3 = document.getElementById("topcardtitle3");
let topcardprice3 = document.getElementById("topcardprice3");
let topcardtext3 = document.getElementById("topcardtext3");
let k = Math.floor(Math.random() * 5);
topcardprice3.textContent = "Price: " + Books[k].Price;
topcardtext3.textContent = Books[k].Description.slice(0, 100);
topcardtitle3.textContent = Books[k].Name;

document.getElementById("linkdetals3").addEventListener("click", (e) => {});
function SumitDetails(book) {
  console.log(book.textContent);
  var searchBook = Books.filter((b) => b.Name == book.textContent);
  console.log(JSON.stringify(searchBook));
  localStorage.setItem("detailsBook", JSON.stringify(searchBook));
}
function SearchById(inputSearch) {
  console.log(inputSearch.value);
  var SearchBook = Books.filter(
    (b) => b.Name.trim().toLowerCase() == inputSearch.value.trim().toLowerCase()
  );
  if (SearchBook[0] != null) {
    document.getElementById(
      "indexpage"
    ).innerHTML = `<div class="col-6"> <div class="card" style="height:50rem">
  <img class="card-img-top mh-25" height="30%" src="https://source.unsplash.com/random/?Book&1
  }" alt="Card image cap">
  <div class="card-body">
      <h5 class="card-title" id="searchcardtitle">${SearchBook[0].Name}</h5>
      <p class="card-text text-justify " id="searchcardtext"> ${SearchBook[0].Description}</p>
      <p class="card-text text-justify " id="searchcardauthur">Author: ${SearchBook[0].Authur}</p>
      <h6 class="mt-5 " id="searchcardprice">Price: ${SearchBook[0].Price}</h6>
     
  </div>
  <div class="card-footer text-right "><a href="/checkout.html" class="card-link" onclick="AddInCard(${SearchBook.BookId})" >Add Card</a></div>
</div>
</div>`;
  } else {
    document.getElementById("indexpage").innerHTML =
      "Not Found in Similar Books!";
  }
}
