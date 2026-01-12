// Library application

console.log('Library app loaded');

const myLibrary = [];

// This is a constructor: normal function capital letter
function Book(title, author, pages, read, uuid) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.uuid = crypto.randomUUID();
}

// function to create and add books to the array
function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);
  myLibrary.push(book); 
}

// function to display books
// document. give you access to the dom
// .getElementById, .createElement, etc
function displayBooks() {
    const library = document.getElementById("library");
    library.innerHTML = "";

    // loop through each book, create div, 
    myLibrary.forEach(book => {
        const cards = document.createElement("li");
        library.appendChild(cards);

        const title = document.createElement("h3");
        title.textContent =  `${book.title}`; 
        //.textContent sets text inside a node

        const author = document.createElement("h4");
        author.textContent = book.author;

        const pages = document.createElement("h4");
        pages.textContent = book.pages;

        const read = document.createElement("h4");
        read.textContent = book.read;

        const uuid = document.createElement("h4");
        uuid.textContent = book.uuid;
        cards.appendChild(title);
        cards.appendChild(author);
        cards.appendChild(pages);
        cards.appendChild(read);
        cards.appendChild(uuid);

        

    });
}


const dialog = document.getElementById("bookInputForm");
const form = document.getElementById("newBookForm");

document.getElementById("newBookBtn")
  .addEventListener("click", () => {
    dialog.showModal();
  })

document.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh

    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const read = form.elements["read"].value;
    
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    dialog.close();  
    form.reset();
  })

addBookToLibrary("Diary of a wimpy kid", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid2", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid3", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid4", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid5", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid6", "mrx grc", 250, true)
addBookToLibrary("Diary of a wimpy kid7", "mrx grc", 250, true)
displayBooks();