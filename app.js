let library = [];
const libraryList = document.querySelector('.library-list');
const newBookBtn = document.querySelector('.new-book-button');
const formPopUp = document.querySelector('#form-addbook');
const submitForm = document.querySelector('.submit');
const removeBook = document.querySelector('.removeBtn')


//create a new book to be added to libary 
function book(title,author,pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

//add a created book to library 
function addBookToLibrary(book) {
    library.push(book);
    displayBook();
};

//display the books in the library

function displayBook() {
    clearDisplay();
    library.forEach(book => {
        const newBook = libraryList.insertRow();
        newBook.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <button class="read">Read</button>
        <button class="removeBtn">Delete</button>`
    })
}

//clears display to avoid duplication of books

function clearDisplay() {
    const clearDisplay = libraryList.querySelectorAll('tr');
    clearDisplay.forEach(book => book.remove());
    libraryList.innerHTML ="<tr><th>Title</th><th>Author</th><th>Pages</th><th>";
}



addBookToLibrary(new book('tolkein', 'dog', 99));
console.log(library)

newBookBtn.addEventListener('click', () => {
    formPopUp.style.display = "block";

})

submitForm.addEventListener('click', e => {
    e.preventDefault(); //this is to prevent the form from submitting to the current URL and refreshing the page (and hence removing the library list without local storage)
    const title = document.querySelector('#form-title').value;
    const author = document.querySelector('#form-author').value;
    const pages = document.querySelector('#form-pages').value;
    const newBook = new book(title,author,pages);
    addBookToLibrary(newBook);
    clearForm();
    formPopUp.style.display = "none";
});

function clearForm() {
    document.querySelector('#form-title').value ='';
    document.querySelector('#form-author').value = '';
    document.querySelector('#form-pages').value = '';
}

//above all works, I have a library, where I can determine a new book, and place that new book in the library, and reprint it out

