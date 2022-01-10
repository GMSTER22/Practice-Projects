const images = document.querySelectorAll(".img");
const menuIcons = document.querySelectorAll(".mobile__options");

for (let i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener("click", () => {
        menuIcons.forEach(icon => {
            icon.classList.remove("active")
        })
        images.forEach(image => {
            image.classList.remove("active")
        })
        menuIcons[i].classList.add("active")
        images[i].classList.add("active")
    })
}