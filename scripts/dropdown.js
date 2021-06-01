const dropList = document.getElementsByClassName("button-dropdown-content")
const dropBtns = document.getElementsByClassName("button-dropdown")

Object.keys(dropBtns).forEach((i) => {
  dropBtns[i].addEventListener('click', () => {
    dropList[i].classList.toggle("show-dropdown")
  })
})

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button-dropdown') && !event.target.matches('.button-dropdown-content--item') && !event.target.matches('.check-container') && !event.target.matches('.check-container--checkbox')) {
    for (i = 0; i < dropList.length; i++) {
      let openDropdown = dropList[i];
      if (openDropdown.classList.contains('show-dropdown')) {
        openDropdown.classList.remove('show-dropdown')
      }
    }
  }
}