class Location {
    constructor(name, rate, address, recommend, url, img, latitude, longitude) {
        this.name = name
        this.rate = rate
        this.address = address
        this.recommend = recommend
        this.url = url
        this.img = img
        this.latitude = latitude
        this.longitude = longitude

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
                shops.push(new Location(sh.name, sh.rate, sh.address, sh.recommend, sh.url, sh.img, sh.latitude, sh.longitude))
            })
            pinMarkersCluster(shops)
            // pinMarkers(shops)
            // console.log(shops.length)
        })
}

// forEach
// function pinMarkers(shops) {
//     shops.forEach(function (sh) {
//         new google.maps.Marker({
//             position: sh.center,
//             map: map,
//             label: sh.rate
//         })
//     })
// }

// for 單一
// function pinMarkers(shops) {
//     for (i = 0; i < shops.length; i++) {
//         let shop = shops[i]
//         marker = new google.maps.Marker({
//             position: shop.center,
//             map: map,
//             label: shop.rate
//             // content: shop.title
//             // title: shop.title,
//         })
//         // let content =  `${shop.title}<br/>★ ${shop.rate}<br/><img src="${shop.img}" style="height: 100px;"/>`
//         // infowindowFun(marker, content)
//         let info = `
//         <h2>${shop.title}</h2>
//         ★ ${shop.rate}<br/>
//         地址：${shop.address}<br/>
//         推薦品項：${shop.recommend}<br/>
//         食記連結：<a href="../project/memo/${shop.url}">Click me</a><br/>
//         <img src="${shop.img}" style="height: 250px;"/>`
//         intro(marker, info)
//         // console.log(shops[i])
//         // infowindow = new google.maps.InfoWindow({
//         //     content: shop.getTitle()
//         // })
//     }
// }

// for 叢集
function pinMarkersCluster(shops) {
    let markers = []
    for (i = 0; i < shops.length; i++) {
        let shop = shops[i]
        // const image = "http://localhost/project/img/marker-40.png";
        markers.push(
            marker = new google.maps.Marker({
                position: shop.center,
                map: map,
                // icon: image,
                label: shop.rate
                // content: shop.title
                // title: shop.title,
            })
        )

        // var mcOptions = {
        //     styles: [{
        //         url: "http://localhost/project/img/marker-40.png",
        //         // width: 53,
        //         // height: 53,
        //         // fontFamily: "comic sans ms",
        //         // textSize: 15,
        //         // textColor: "red",
        //         //color: #00FF00,
        //     }]

        // };

        if (shop.url == "#") {
            info = `
                <h2>${shop.title}</h2>
                ★ ${shop.rate}<br/>
                地址：${shop.address}<br/>
                推薦品項：${shop.recommend}<br/>
                食記連結：撰寫中 (ㆆᴥㆆ )<br/>
                <img src="${shop.img}" style="height: 250px;"/>`
        } else {
            info = `
                <h2>${shop.title}</h2>
                ★ ${shop.rate}<br/>
                地址：${shop.address}<br/>
                推薦品項：${shop.recommend}<br/>
                食記連結：<a href="../project/memo/${shop.url}">Click me</a><br/>
                <img src="${shop.img}" style="height: 250px;"/>`
        }


        // let info = `
        // <h2>${shop.title}</h2>
        // ★ ${shop.rate}<br/>
        // 地址：${shop.address}<br/>
        // 推薦品項：${shop.recommend}<br/>
        // 食記連結：<a href="../project/memo/${shop.url}">Click me</a><br/>
        // <img src="${shop.img}" style="height: 250px;"/>`
        intro(marker, info)
    }
    new markerClusterer.MarkerClusterer({ markers, map })
}


// 地圖上的infowindow（沒有用到） 
// function infowindowFun(marker, content) {
//     infowindow = new google.maps.InfoWindow({
//         content: content
//     })

//     marker.addListener("click", function () {
//         infowindow.setContent(content)
//         infowindow.open({
//             anchor: marker,
//             map
//         })
//     })
// }

function intro(marker, info) {
    let intro = document.getElementById("intro")
    marker.addListener("click", function () {
        intro.innerHTML = info
    })
}

// function clickInfoWindow(shops) {
//     shops.forEach(function (sh) {
//         sh.onclick = () => {
//             infowindow.open({
//                 anchor: sh,
//                 map
//             })
//         }
//     })
// }

// function pinMarkersCluster(shops) {
//     let markers = []
//     shops.forEach(function (sh) {
//         markers.push(
//             new google.maps.Marker({
//                 position: sh.center,
//                 map: map,
//                 label: sh.rate
//             })
//         )
//     })
//     new markerClusterer.MarkerClusterer({ markers, map })
// }

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 24.147672, lng: 120.673496 },
        zoom: 13,
    });
}


window.initMap = initMap;

