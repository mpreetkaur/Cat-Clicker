const cats = document.getElementsByClassName("cat");
let allCats = document.querySelectorAll(".catC");
for (let i = 0; i < allCats.length; i++) {
    let mySelectedCat = document.querySelector(`.cat[data-cat-id='${allCats[i].dataset.catId}']`)
    allCats[i].addEventListener("click", function () {
        for (cat of cats) {
            cat.style.display = "none";
        }
        mySelectedCat.style.display = "inline";
    })
    mySelectedCat.querySelector(".catI").addEventListener('click', function () {
        mySelectedCat.querySelector(".click1").textContent++;
    })
}