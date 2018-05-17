const clickCat =  document.querySelector(".cat");
let numOfClicks = document.querySelector(".click");
let clicks = 0;

clickCat.addEventListener('click', function increaseClicks() {
    
    clicks++;
    numOfClicks.textContent = clicks;
})