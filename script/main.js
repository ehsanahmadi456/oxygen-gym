const navBtn = document.querySelector(".nav-button");
const navBar = document.querySelector(".nav-menu");
const awardText = document.querySelector(".award-text");
const awardImg = document.querySelector(".award-img");
const galleryList = document.querySelector(".list-gallery");
const galleryListItem = document.querySelectorAll(".filter");
const cardLeft = document.querySelector(".card-1")
const cardBottom = document.querySelector(".card-2")
const cardRight = document.querySelector(".card-3")

window.addEventListener("load", clickHandler);
window.addEventListener("scroll", navAnim);
window.addEventListener("scroll", awardAnim);
galleryList.addEventListener("click", gallery);
window.addEventListener("scroll", cardAnim);

function clickHandler() {
    navBtn.addEventListener("click", () => {
        navBtn.classList.toggle("change")
    })
}

function navAnim() {
    let position = window.scrollY;
    if (position >= 200) {
        navBar.classList.add("custom-navbar")
    } else {
        navBar.classList.remove("custom-navbar")
    }
}

function awardAnim() {
    let position = window.scrollY;
    if (position >= 700) {
        awardImg.classList.add("fromLeft");
        awardText.classList.add("fromRight");
    } else {
        awardText.classList.remove("fromRight");
        awardImg.classList.remove("fromLeft");
    }
}

function gallery(e) {
    let value = e.target.getAttribute("data-bs-filter");
    let galleryCate1 = document.querySelectorAll(".cate1");
    let galleryCate2 = document.querySelectorAll(".cate2");
    let galleryCate3 = document.querySelectorAll(".cate3");
    let txtHeadGallery = document.querySelectorAll(".head-gallery")
    txtHeadGallery.forEach(itemLi => itemLi.classList.remove("active-item"))
    e.target.classList.add("active-item")
    if (value === "all") {
        galleryListItem.forEach(item => item.style.display = "block")
    } else if (value === "cate1") {
        galleryListItem.forEach(item => item.style.display = 'none');
        galleryCate1.forEach(item => item.style.display = 'block')
    } else if (value === "cate2") {
        galleryListItem.forEach(item => item.style.display = 'none');
        galleryCate2.forEach(item => item.style.display = 'block')
    } else {
        galleryListItem.forEach(item => item.style.display = 'none');
        galleryCate3.forEach(item => item.style.display = 'block')
    }
}

function cardAnim() {
    let position = window.scrollY;
    if (position >= 4400) {
        cardLeft.classList.add("moveFromLeft");
        cardBottom.classList.add("moveFromBottom");
        cardRight.classList.add("moveFromRight");
    } else {
        cardLeft.classList.remove("moveFromLeft");
        cardBottom.classList.remove("moveFromBottom");
        cardRight.classList.remove("moveFromRight");
    }
}