const openAbook = document.querySelectorAll('[data-addBook-target]')
const closeAbook = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
// const clr = document.get.querySelector("deleteAll");
let arr = new Array();
// const submitData = document.getElementById('submit')

showData();




openAbook.forEach(button => {
    button.addEventListener('click', () => {
        const book = document.querySelector(button.dataset.addbookTarget)
        openAddb(book)


    })
})
// clr.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("hello6");


//     })
// })


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

// submitData.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("hello");
//     })
// })

function myFunction(){
    console.log("hello1");
    const books = document.querySelectorAll('.addBook.active')
    books.forEach (book => {
        closeAddb(book);
    })

    getData();
    arr.push({
        
        bookID: document.getElementById("bTitle").value,
        authorID: document.getElementById("aName").value,
        noPages: document.getElementById("nPages").value,
        // rStat: document.getElementById("bTitle").nodeValue,

    })
    console.log("hello2");
    localStorage.setItem("localData", JSON.stringify(arr));
    showData();

}

function clearData(){
    localStorage.clear();
    location.reload();

}

function showData(){
    getData();
    let tbl = document.getElementById("myTable")

    let x = tbl.rows.length;
    while (--x){
        tbl.deleteRow(x);
    }
    
    for (i=0;i<arr.length;i++){
        let r = tbl.insertRow();

        let cell1 = r.insertCell();
        let cell2 = r.insertCell();
        let cell3 = r.insertCell();
        // let cell1 = r.insertCell();

        cell1.innerHTML = arr[i].bookID;
        cell2.innerHTML = arr[i].authorID;
        cell3.innerHTML = arr[i].noPages;
        console.log("hello3");
    }
    
}
function getData(){
    console.log("hello4");
    let str = localStorage.getItem("localData");
    if (str != null){
        arr=JSON.parse(str);
    }
    console.log(arr);
    console.log("hello5");
}

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

/*
useful youtube links
https://www.youtube.com/watch?v=FTiOWOrGODI&ab_channel=OnlineCourses
https://www.youtube.com/watch?v=MBaw_6cPmAw&t=655s&ab_channel=WebDevSimplified
*/
