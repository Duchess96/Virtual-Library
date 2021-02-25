const openAbook = document.querySelectorAll('[data-addBook-target]')
const closeAbook = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openAbook.forEach(button => {
    button.addEventListener('click', () => {
        const book = document.querySelector(button.dataset.addBookTarget)
        console.log("Butt")
        openAddb(book)
        console.log("Butt2")

    })
})

closeAbook.forEach(button => {
    button.addEventListener('click', () => {
        const book = button.closest('.addBook')
        closeAddb(book);
    })
})

function openAddb(book){
    console.log("Butt3")
    book.classList.add('active');
    overlay.classList.add('active');
}

function closeAddb(book){
    if (book ==null) return
    book.classList.remove('active');
    overlay.classList.remove('active');
}