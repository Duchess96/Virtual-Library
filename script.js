const openAbook = document.querySelectorAll('[data-addBook-target]')
const closeAbook = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const clr = document.getElementById("clearLocal");
let arr = new Array();
const submitData = document.getElementById('submit');


showData();
const removeBtn = document.getElementById('btn');
// reMove();

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

submitData.addEventListener("click", () =>{
    addData();
})

clr.addEventListener("click", () =>{
    localStorage.clear();
    location.reload();
})

// Object.keys(arr).forEach(button => {
//     button.addEventListener("click",)
// })
// removeBtn.keys(arr).forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("hello");
//     })
// })
// removeBtn.addEventListener("click", () =>{
//     console.log("hello");
// })

// function reMove(){
//     removeBtn.forEach(input => {
//         input.addEventListener("click")
//     })

//     removeBtn.keys(arr).forEach(button => {
//     button.addEventListener('click', () => {
//         console.log("hello");
//     })
// })


//     removeBtn.addEventListener("click", () =>{
//         console.log("hello");
//     })
// }



function addData(){
    const books = document.querySelectorAll('.addBook.active')
    books.forEach (book => {
        closeAddb(book);
    })

    getData();
    
    let chb = document.getElementById("checkbox");


    if(chb.checked){
        console.log("Yes");
        arr.push({
            bookID: document.getElementById("bTitle").value,
            authorID: document.getElementById("aName").value,
            noPages: document.getElementById("nPages").value,
            rStat: "Yes"
        })
        
    }else{
        console.log("No");
        arr.push({
            bookID: document.getElementById("bTitle").value,
            authorID: document.getElementById("aName").value,
            noPages: document.getElementById("nPages").value,
            rStat: "No"
        })
    }

    // arr.push({ 
    //     bookID: document.getElementById("bTitle").value,
    //     authorID: document.getElementById("aName").value,
    //     noPages: document.getElementById("nPages").value,
    // })
    
    localStorage.setItem("localData", JSON.stringify(arr));
    showData();
    
    

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
        const btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn";
        btn.id = "btn";
        btn.onclick = console.log("hello");
        console.log(btn);

        let cell1 = r.insertCell();
        let cell2 = r.insertCell();
        let cell3 = r.insertCell();
        let cell4 = r.insertCell();
        let cell5 = r.insertCell();

        cell1.innerHTML = arr[i].bookID;
        cell2.innerHTML = arr[i].authorID;
        cell3.innerHTML = arr[i].noPages;
        cell4.innerHTML = arr[i].rStat;
        cell5.appendChild(btn);
    }
    
}

function getData(){
    let str = localStorage.getItem("localData");
    if (str != null){
        arr=JSON.parse(str);
    }

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
