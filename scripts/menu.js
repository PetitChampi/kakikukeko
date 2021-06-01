let menuBurger = document.getElementById("menuburger")
let menuNavlist = document.getElementById("menunavlist")

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("nav-header-hamburger-open")
  menuNavlist.classList.toggle("nav-container-open")
})

// Dropdown submenu
let menuDropdown = document.getElementById("menudrop")
let menuDroplist = document.getElementById("menudroplist")
let menuDropIcon = document.getElementById("menudropicon")

menuDropdown.addEventListener("click", () => {
  menuDroplist.classList.toggle("menulist-expanded")
  if (menuDroplist.style.maxHeight) {
    menuDroplist.style.maxHeight = null;
    menuDropIcon.classList.remove("icon-chevron-left-rotated")
  } else {
    menuDroplist.style.maxHeight = menuDroplist.scrollHeight + "px"
    menuDropIcon.classList.add("icon-chevron-left-rotated")
  }
})