
let myLib = [];
function objec(name ,author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages
}
function newbook(name ,author, pages){
    let newbook = new objec(name ,author, pages);
    myLib.push(newbook);
}
document.getElementById("add").addEventListener("click", ()=>{
    document.getElementById("form-div").style.display = "block";
})
document.getElementById("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let form = document.getElementById("form");
    const name = form.name.value;
    const author = form.author.value;
    const pages = form.pages.value;
    newbook(name, author, pages);
    console.log(name + author + pages);
    form.display="none";
    rm()
   arrLoop();
})
function arrLoop(){
    for(i = 0; i < myLib.length; i++){
        let grid = document.getElementById("grid");
        let child = document.createElement("div");
        child.className = "item";
        child.id = i ;
        child.innerHTML = `name: ${myLib[i].name} author: ${myLib[i].author} pages: ${myLib[i].pages}`
        grid.appendChild(child);
        myLib[i].index = i;
    }
}
function rm(){
    document.getElementById("grid").innerHTML = "";
}