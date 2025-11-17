const menuBtn = document.querySelector('.header__menu');
const menuModal = document.querySelector('.menu-modal');
const closeModal = document.querySelector('.menu-modal__close');

const overlay = document.querySelector(".menu-modal-overlay")


menuBtn.addEventListener("click", function () {
    console.log("open");
    menuModal.classList.add("open")
    menuModal.classList.remove("close")
    overlay.style.display = "block"
    
})

closeModal.addEventListener("click", function () {
    menuModal.classList.remove("open")
    menuModal.classList.add("close")
    overlay.style.display = "none"
    console.log("close");
})