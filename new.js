let n = 0;
let myLib = [];
function objec(name ,author, pages,id){
    this.name = name;
    this.author = author;
    this.pages = pages
    this.id = id;

}

function newbook(name ,author, pages, id){
    let newbook = new objec(name ,author, pages, id);
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
    newbook(name, author, pages, n);
    console.log(name + author + pages);
    document.getElementById("form-div").style.display="none";
    rm()
   arrLoop();
})
function arrLoop(){
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
function rm(){
    document.getElementById("grid").innerHTML = "";
}