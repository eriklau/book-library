const addBook = document.getElementById('add-book-btn')

let myLibrary = [
    { name: "The Lord of the Rings", author: "J.R.R. Tolkien", status: "not-read" },
    { name: "1984", author: "George Orwell", status: "read" },
];

console.log(myLibrary)


function rowInsert(bookName, authorName, statusBook) {
    let table = document.getElementById('book-table')
    let statusButton = document.createElement("BUTTON")
    statusButton.className = "read-unread-btn"
    statusButton.id = "read-unread-btn"
    let removeButton = document.createElement("BUTTON")
    removeButton.className = "remove-btn"
    removeButton.id = "remove-btn"

    
    statusButton.innerHTML = statusBook
    removeButton.innerHTML = "REMOVE"

    let newRow = table.insertRow(1);

    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);

    cel1.innerHTML = bookName
    cel2.innerHTML = authorName
    cel3.appendChild(statusButton);
    cel4.appendChild(removeButton);
}

function Book(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(book) {
    // if the Add Book button is pushed, then make a new Book() object and push it into myLibrary
    // contraint, book and author input cannot be empty

    myLibrary.push(book)
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        // a new row on the table is displayed with its book name, author, status, and remove book option
    }
}

function findBook(bookLibrary, name) {
    // returns the index of the book name in book library
    if (bookLibrary.length === 0 || bookLibrary === null) {
      return;
    }

    for (let i = 0; i < bookLibrary.length; i++) { 
        console.log(bookLibrary[i].name)
        if (bookLibrary[i].name == name) {
            return i; 
        }
    }
}

function removeBook(bookIndex) {
    // removes the book from myLibrary and its associated row on displayed on the table
    myLibrary.splice(bookIndex, bookIndex + 1)
}

function changeStatus(statusString){
    // changes the status of the book to read or not read
    if (statusString == "READ") {
        return "NOT-READ"
    } else if (statusString == "NOT-READ") {
        return "READ"
    }
}


// CLICK EVENTS
addBook.addEventListener('click', (e) => {
    let bookInput = document.getElementById('book-input').value
    let authorInput = document.getElementById('author-input').value
    let statusInput = document.getElementById('status-input').value.toUpperCase();

    // console.log(bookInput)
    // console.log(authorInput)
    // console.log(statusInput)

    // check if book page input has > 0 pages read

    if (bookInput.length > 0) {
        const newBook = new Book(bookInput, authorInput, statusInput)
        addBookToLibrary(newBook)
        console.log(myLibrary)

        rowInsert(bookInput, authorInput, statusInput)
    }
})

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('remove-btn')) {
      e.target.parentNode.parentNode.remove();
      removeBook(findBook(myLibrary, e.target.parentNode.parentNode.childNodes[1].innerText));
      console.log(myLibrary)
    }
});

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('read-unread-btn')) {

        e.target.innerText = changeStatus(e.target.innerText)
        console.log(changeStatus(e.target.innerText))
    }
});



