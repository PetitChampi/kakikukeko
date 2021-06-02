let item = document.getElementsByClassName("multiselect-item")

Object.keys(item).forEach((i) => {
  item[i].addEventListener('click', () => {
    item[i].classList.toggle("active")
  })
})