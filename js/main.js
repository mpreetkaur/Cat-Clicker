const clickCat1 =  document.querySelector(".cat1");
const clickCat2 = document.querySelector(".cat2")
let numOfClicks1 = document.querySelector(".click1");
let numOfClicks2 = document.querySelector(".click2");
let name1 =  document.querySelector(".cat1Name");
let name2 = document.querySelector(".cat2Name");

name1.textContent = "Missy";
name2.textContent = "Molly";

clickCat1.addEventListener('click', function increaseClicks() {
    numOfClicks1.textContent++;
})

clickCat2.addEventListener('click', function increaseClicks() {
    numOfClicks2.textContent++;
})