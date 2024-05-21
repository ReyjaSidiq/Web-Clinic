const menuList = document.getElementById("menu-list")
const menuIcon = document.getElementById("menu-icon")

menuIcon.addEventListener("click", () => (
    menulist.classList.toggle("hidden")
))

document.addEventListener("scroll", () =>{
    const header = document.querySelector("header")

    if (window.scrollY > 50) {
        header.classList.add("scrolled")
    }
    else {
        header.classList.remove("scrolled")
    }
 })

 