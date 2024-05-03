//I AAM VIOLENTLY DRRUNK AND IDK WHAT TO DO SO IM WRITING COMMENTS
let n = 0;
let myLib = [];
function object_constructor(name ,author, pages,id){  //constructor of a book
    this.name = name;
    this.author = author;
    this.pages = pages
    this.id = id;

}

function newbook(name ,author, pages, id){
    let newbook = new object_constructor(name ,author, pages, id);
    newbook.remove = function(x){
        let ind = x;
        myLib.splice(ind,1);
        rm();
        arrLoop();
        n = myLib.length;
    }
    myLib.push(newbook);
}

document.getElementById("add").addEventListener("click", ()=>{
    document.getElementById("form-div").style.display = "block";
})

document.getElementById("form").addEventListener("submit", (e)=>{
    n += 1;
    e.preventDefault();
    let form = document.getElementById("form");
    const name = form.name.value;  
    const author = form.author.value;
    const pages = form.pages.value;
    newbook(name, author, pages, n);  //creates a book object and pushes it into myLib  array
    console.log(name + author + pages);
    document.getElementById("form-div").style.display="none";
    rm()  //remove all old items
   arrLoop();  //add new array of boos into grid
})
function arrLoop(){    //redraw all array items into grid
    for(i = 0; i < myLib.length; i++){
        let grid = document.getElementById("grid");
        let child = document.createElement("div");
        child.className = "item";
        child.id = i ;
        child.innerHTML = `name: ${myLib[i].name} <br> author: ${myLib[i].author} <br> pages: ${myLib[i].pages} <br> id = ${myLib[i].id} <br><br> <button onclick="myLib[${i}].remove(${i})" class="btn btn-info">remove</button>`
        grid.appendChild(child);
        myLib[i].index = i;
    }
}
function rm(){   //remove all grid items
    document.getElementById("grid").innerHTML = "";
}
