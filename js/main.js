const model = {
    getCat: (catId) => {
        const allCats = model.giveCats();
        //find the cat with the corresponding catId in the allCats array
        // and return it
        return allCats.find(function (element) {
            return element.catId == catId;
        })
    },
    giveCats: () => {
        return [{
                imageUrl: "https://i.pinimg.com/736x/d9/65/14/d96514f3952bb90c33c5005b8456ae1a--cats-in-costumes-happy-easter.jpg",
                name: "Missy",
                clicks: 0,
                catId: 'catT1'
            },
            {
                imageUrl: "http://imagenes.gratis/galerias/var/resizes/Gatitos-tiernos/imagenes-gatitos-tiernos-gatos-fotos-gratis%20%2854%29.jpg?m=1511359291",
                name: "Smokey",
                clicks: 0,
                catId: 'catT2'
            },
            {
                imageUrl: "http://imagenes.gratis/galerias/var/resizes/Gatitos-tiernos/imagenes-gatitos-tiernos-gatos-fotos-gratis%20%2849%29.jpg?m=1511359276",
                name: "Misty",
                clicks: 0,
                catId: 'catT3'
            },
            {
                imageUrl: "https://i.pinimg.com/originals/da/18/89/da1889f4840438288246781bb16d68b8.jpg",
                name: "Smudge",
                clicks: 0,
                catId: 'catT4'
            },
            {
                imageUrl: "https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn_400x400.jpeg",
                name: "Jasper",
                clicks: 0,
                catId: 'catT5'
            }
        ]
    }
}
const octopus = {
    bringCats: () => {
        return model.giveCats();
    },
    init: () => {
        view.renderCats();
    },

    getCat: (catId) => {
        const myCat = model.getCat(catId);
        view.showCat(myCat);
        view.increaseCount(myCat)
    }

}
const view = {
    renderCats: () => {
        let htmlString = '';
        for (cat of octopus.bringCats()) {
            htmlString += `<div class="catC" data-cat-id="${cat.catId}">${cat.name}</div>`
        }
        document.querySelector(".catNames").innerHTML = htmlString;

        let allMyCats = document.querySelectorAll('.catC')

        for (let i = 0; i < allMyCats.length; i++) {
            allMyCats[i].addEventListener("click", function (e) {
                octopus.getCat(e.target.dataset.catId);
            })
        }
    },

    showCat: (cat) => {
        // for (cat of octopus.bringCats()) {
        let htmlStr = "";
        htmlStr += `<div class="cat" data-cat-id="catT1">
                        <div class="catT1">

                            <h2 class="catName">${cat.name}</h2>
                            <div class="for">Number of clicks =
                                <span class="clickAmount">${cat.clicks}</span>
                            </div>
                            <img class="catI" src="${cat.imageUrl}">
                        </div>
                    </div>`
        document.querySelector(".catsList").innerHTML = htmlStr;
    },
    increaseCount: (cat) => {
        let updateCount = document.querySelector(".clickAmount");
        let catImg = document.querySelector(".catI")
        catImg.addEventListener("click", function () {
            updateCount.textContent++;
        })
    }
}
// }
octopus.init();