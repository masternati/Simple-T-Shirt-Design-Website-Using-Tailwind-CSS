// const menu = document.querySelector("#menu")
const menuBar = document.querySelector("#menuBar")
const mymenu = document.querySelector("#mymenu")
mymenu.style.visibility = "hidden"


let meNu = document.createElement("div")
meNu.classList.add("mylist")
let li1 = document.createElement("li")
li1.innerText = "About Us"
li1.classList.add("list")
let li2 = document.createElement("li")
li2.innerText = "Services"
li2.classList.add("list")
let li3 = document.createElement("li")
li3.innerText = "Contract"
li3.classList.add("list")
meNu.appendChild(li1)
meNu.appendChild(li2)
meNu.appendChild(li3)

menuBar.addEventListener("click", () =>{

    if (mymenu.style.visibility == "visible"){
        mymenu.removeChild(meNu)
        mymenu.style.visibility = "hidden"
    }else{
        mymenu.appendChild(meNu)
        mymenu.style.visibility = "visible"
    }
})
