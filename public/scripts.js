
const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for(item of menuItems) {
  if (currentPage.includes(item.getAttribute("href"))) {
    item.classList.add("active")
  }
}











// const modalOverlay = document.querySelector('.modal-overlay')

// const cards = document.querySelectorAll('.card')




// for (let card of cards) {

//   card.addEventListener("click", function(){
//     const videoId = card.getAttribute("id")
//     window.location.href = `/video?id=${videoId}`

//   })
// }
