const openAbook = document.querySelectorAll('[data-addBook-target]')
const closeAbook = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openAbook.forEach(button => {
    button.addEventListener('click', () => {
        const book = document.querySelector(button.dataset.addbookTarget)
        openAddb(book)

    })
})

closeAbook.forEach(button => {
    button.addEventListener('click', () => {
        const book = button.closest('.addBook')
        closeAddb(book);
    })
})
overlay.addEventListener("click", () => {
    const books = document.querySelectorAll('.addBook.active')
    books.forEach (book => {
        closeAddb(book);

    })
})

function openAddb(book){
    if (book == null) return console.log("null")
    book.classList.add('active');
    overlay.classList.add('active');
}

function closeAddb(book){
    if (book == null) return
    book.classList.remove('active');
    overlay.classList.remove('active');
}