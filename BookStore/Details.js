console.log("hello World");
 let Books=[
    {
        BoookId:1001,
        Name:"A Tale of Two Cities",
        Authur:"Charles Dickens",
        Description:"A Tale of Two Cities is a historical novel published in 1859 by Charles Dickens, set in London and Paris before and during the French Revolution.",
        Price:200
    },
    {
        BoookId:1002,
        Name:"The Little Prince",
        Authur:"Antoine de Saint-Exupéry",
        Description:"The Little Prince (French: Le Petit Prince, pronounced [lə p(ə)ti pʁɛ̃s]) is a novella written and illustrated by French aristocrat, writer, and military pilot Antoine de Saint-Exupéry.",
        Price:200
    },
    {
        BoookId:1003,
        Name:"Harry Potter and the Philosopher's Stone",
        Authur:"J. K. Rowling",
        Description:" it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends",
        Price:120
    },
    {
        BoookId:1004,
        Name:"The Hobbit",
        Authur:"J. R. R. Tolkien",
        Description:"The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction",
        Price:100
    },
    
    {
        BoookId:1005,
        Name:"Dream of the Red Chamber ",
        Authur:"J. R. R. Tolkien",
        Description:"The Story of the Stone (Shitou Ji) is a novel composed by Cao Xueqin in the middle of the 18th century. One of the Four Great Classical Novels of Chinese literature",
        Price:105
    },
    {
        BoookId:1006,
        Name:"Vardi Wala Gunda",
        Authur:"Ved Prakash Sharma",
        Description:"The main characters in his detective novels were Vijay, Vikas, Raghunath, Alphanse, Vibha Jindal, Keshav Pandit and Raina.",
        Price:105
    }
    
]

var price= document.getElementById("detailcardprice");
var title= document.getElementById("detailcardtitle");
var des= document.getElementById("detailcardtext");
var author= document.getElementById("detailcardauthur");
var bookdetails=JSON.parse(localStorage.getItem("detailsBook"));
if(bookdetails!=null)
{
price.textContent="Price: "+bookdetails[0].Price;
title.textContent=bookdetails[0].Name;
des.textContent=bookdetails[0].Description;
author.textContent=bookdetails[0].Autthor;
}
else{
    title.textContent="No Data Please Visit Agiain"
}


function AddInCard(addbook)
{
    console.log(addbook.textContent);
    var cardProducts=[];
    if(localStorage.getItem("AddCardBooks"))
    {cardProducts= JSON.parse(localStorage.getItem("AddCardBooks"));}
    var book=Books.filter(b=>b.Name==addbook.textContent);
    console.log(book[0]);
    cardProducts.push(book[0]);
    console.log(cardProducts);
    localStorage.setItem("AddCardBooks",JSON.stringify(cardProducts));

}