const navbar=document.getElementById("navbar")
const bar=document.getElementById("bar")
const closes=document.getElementById("close")
if (bar) {
    bar.addEventListener("click",()=>{
        navbar.classList.add("active")
    })
}
if (closes) {
    closes.addEventListener("click",()=>{
        navbar.classList.remove("active")
    })
}