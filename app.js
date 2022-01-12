class LibraryObject {
    constructor() {
        this.booklist =[{ //default book as example 
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 412,
        }];  
        this.libraryList = document.querySelector('.library-list');
        this.formPopUp = document.querySelector('#form-addbook');
        this.submitForm = document.querySelector('.submit');
        this.newBookBtn = document.querySelector('.new-book-button');
        this.newBookBtn.addEventListener('click', () => {
            this.formPopUp.style.display = "block";
        })
        this.submitForm.addEventListener('click', e => {
            e.preventDefault(); //this is to prevent the form from submitting to the current URL and refreshing the page (and hence removing the library list without local storage)
            const title = document.querySelector('#form-title').value;
            const author = document.querySelector('#form-author').value;
            const pages = document.querySelector('#form-pages').value;
            const newBook = this.createBook(title,author,pages);
            this.addBookToLibrary(newBook);
            this.clearForm();
            this.formPopUp.style.display = "none";
        })
    }
    
    createBook(title, author,pages) {
        return {
        title,
        author,
        pages,
        }
    }

    addBookToLibrary(book) { //add a created book to library 
        this.booklist.push(book);
        this.displayBook();
    }

    displayBook() { //display the books in the library
        this.clearDisplay();
        this.booklist.forEach(book => {
            const newBook = this.libraryList.insertRow();
            newBook.setAttribute('class', 'book');
            newBook.innerHTML += 
            `<td>${book.title}</td>
             <td>${book.author}</td>
             <td>${book.pages}</td>
             <button class="read">Read</button>
             <button class="deleteBtn" data-book ="${book.title}">Delete</button>`
            this.deleteBook();
            });
            //this.changeReadBtn();
        }

    clearDisplay() {
        const clearDisplay = this.libraryList.querySelectorAll('tr.book');
        clearDisplay.forEach(book => book.remove());
     
    }
    clearForm() {
        document.querySelector('#form-title').value ='';
        document.querySelector('#form-author').value = '';
        document.querySelector('#form-pages').value = '';
    }

    deleteBook() {
        const deleteBook = Array.from(document.querySelectorAll('.deleteBtn'));
        deleteBook.forEach(button => button.addEventListener('click', function(e) {
            e.target.parentElement.remove();
            library.booklist.splice(library.booklist.findIndex( book => book.title === (e.target.dataset.book))); //find the array index for the objecft containing the button, and splice
    }))
}
}

let library = new LibraryObject();
library.displayBook();
