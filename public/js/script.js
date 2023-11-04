document.addEventListener("DOMContentLoaded", function () {
    const allButtons = document.querySelectorAll(".searchBtn");
    const searchBar = document.querySelector(".searchBar");
    const searchInput = document.getElementById("searchInput");
    const searchClose = document.getElementById("searchClose");

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", function () {
            searchBar.style.visibility = "visible";
            searchBar.classList.add("open");
            this.setAttribute("aria-expanded", "true");
        });
    }

})

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("open")
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
})

var slider_img = document.querySelector(".slider_img");
var images = ["book lover.svg", "mobile.svg", "reading.svg"];
var i = 0; 

function prev() {
    document.querySelector("#word").textContent = "Comfort";
    document.querySelector("#wordd").textContent = "Providing Comfort";
    document.querySelector("#word-el").textContent = "Get curl up with a good book, and get lost in the pages of a captivating story. Escape the stresses of everyday life with a good book.";
    if (i <= 0) i = images.length;
    i--;
    return setImg(); 
}

function next() {
    document.querySelector("#word").textContent = "Delight";
    document.querySelector("#wordd").textContent = "Providing Delight";
    document.querySelector("#word-el").textContent = "Discovering the latest release, explore your favorite genres, and find your next favorite author on bookwave.";
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg(); 
}  

function setImg() {
    return slider_img.setAttribute("src", "img/" + images[i]);
}

document.querySelector("#prev").addEventListener("click", prev);
document.querySelector("#next").addEventListener("click", next); 


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;
        if(pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    });
}

const accord = document.getElementById("accord");
accord.addEventListener("click", function() {
    const icon = document.querySelector("#icon-1");
        icon.classList.toggle("bi-chevron-up");
})

const accord2 = document.getElementById("accord-2");
accord2.addEventListener("click", function() {
    const icon2 = document.querySelector("#icon-2");
        icon2.classList.toggle("bi-chevron-up");
})

const accord3 = document.getElementById("accord-3");
accord3.addEventListener("click", function() {
    const icon3 = document.querySelector("#icon-3");
        icon3.classList.toggle("bi-chevron-up");
})

const accord4 = document.getElementById("accord-4");
accord4.addEventListener("click", function() {
    const icon4 = document.querySelector("#icon-4");
        icon4.classList.toggle("bi-chevron-up");
})

