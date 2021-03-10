const openAbook = document.querySelectorAll('[data-addBook-target]')
const closeAbook = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const clr = document.getElementById("clearLocal");
let arr = new Array();
const submitData = document.getElementById('submit');

showData();

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
    console.log(arr);
    for (i=0;i<arr.length;i++){
        let r = tbl.insertRow();
        r.id = i;

        const btn = document.createElement('input');
        btn.type = "button";
        btn.className = "btn";
        btn.id = "btn";
        btn.value = "X";
        btn.onclick = myFunction;
        
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

function myFunction(event){
    let index = event.target.parentNode.parentNode.id;
    arr.splice(index,1);
    localStorage.setItem("localData", JSON.stringify(arr));
    location.reload();
    
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