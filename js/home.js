class Location {
    constructor(name, rate, address, recommend, url, img, type, latitude, longitude) {
        this.name = name
        this.rate = rate
        this.address = address
        this.recommend = recommend
        this.url = url
        this.latitude = latitude
        this.longitude = longitude
        this.img = img
        this.type = type

        this.title = name
        this.center = { lat: parseFloat(latitude), lng: parseFloat(longitude) }
    }
}

window.onload = function () {
    fetch("./js/data.php")
        .then(function (response) {
            return response.json()
        })
        .then(function (jsonObj) {
            let shops = [];
            jsonObj["shops"].forEach(function (sh) {
                shops.push(new Location(sh.name, sh.rate, sh.address, sh.recommend, sh.url, sh.img, sh.type, sh.latitude, sh.longitude))
            })
            listOfShop(shops)
        })

    // let slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //     let i;
    //     let slides = document.getElementsByClassName("mySlides");
    //     let dots = document.getElementsByClassName("dot");
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     slideIndex++;
    //     if (slideIndex > slides.length) { slideIndex = 1 }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex - 1].style.display = "block";
    //     dots[slideIndex - 1].className += " active";
    //     setTimeout(showSlides, 3000); // Change image every 2 seconds
    // }

}



function listOfShop(shops) {
    let list = ""
    // shops.forEach(function (sh) {
    //     // list +=  `<td><img src="${sh.img}" alt=""><br><a href="${sh.url}">${sh.name}</a></td>`
    //     list += `<a href="/project/memo/${sh.url}" class="listLink"><div id="outSide"><img src="${sh.img}"><div id="inSide">${sh.name}</div></div>
    //     </a>`
    // })

    for (i = 0; i < 3; i++) {
        let shop = shops[i]
        list += `<a href="/project/memo/${shop.url}" class="listLink"><div id="outSide"><img src="${shop.img}"><div id="inSide">${shop.name}</div></div>
        </a>`
    }
    document.getElementById("memolist").innerHTML = list
}
