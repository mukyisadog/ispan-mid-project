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

            // array.find()
            // let btn = document.getElementById("btn");
            // let search = document.getElementById("search");
            // btn.addEventListener("click", function() {
            //     let data = shops.find(function(item) {
            //         // console.log(item.name)
            //         return item.name === search.value
            //     })
            //     // console.log(data)
            //     document.getElementById("result").innerHTML = `<a href="/project/memo/${data.url}" class="listLink"><div id="outSide"><img src="${data.img}"><div id="inSide">${data.name}</div></div>
            //     </a>`
            // })

            // search in array.type
            // let btn = document.getElementById("btn");
            // let search = document.getElementById("search");
            // btn.addEventListener("click", function() {
            //     let data = shops.filter(function(item) {
            //         // console.log(item.type)
            //         return item.type === search.value
            //     })
            //     console.log(data)
            //     let result = document.getElementById("result").innerHTML
            //     for (i = 0 ; i < data.length ; i++) {
            //         result += `<a href="/project/memo/${data[i].url}" class="listLink"><div id="outSide"><img src="${data[i].img}"><div id="inSide">${data[i].name}</div></div>
            //         </a>`    
            //     }
            //     document.getElementById("result").innerHTML = result
            // })

            // not working
            // let btns = document.getElementsByClassName("btn");
            // let num = btns.index
            // // console.log(btns[0].value)
            // btns[num].addEventListener("click", function() {
            //     console.log(this.value)
            // })

            document.querySelectorAll("input[type='button']").forEach((bn) => {
                bn.onclick = function () {
                    document.getElementById("list-of-shop").innerHTML = ""
                    let data = shops.filter(function (item) {
                        if (bn.value == "全部") {
                            return item
                        } else {
                            return item.type === bn.value
                        }
                    })
                    console.log(data)
                    let result = document.getElementById("list-of-shop").innerHTML
                    for (i = 0; i < data.length; i++) {
                        result += `<a href="/project/memo/${data[i].url}" class="listLink"><div id="outSide"><img src="${data[i].img}"><div id="inSide">${data[i].name}</div></div>
                            </a>`
                    }
                    document.getElementById("list-of-shop").innerHTML = result

                }
            })

            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("searchIcon");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            btn.onclick = function () {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            // search
            a = document.getElementById("KeyInSearch")
            searchWord = document.getElementById("searchWord")
            searchResult = document.getElementById("searchResult")
            document.getElementById("searchClick").onclick = function () {
                searchResult.innerHTML = ""
                let reg1 = /\w/g
                let reg2 = /[\u4E00-\u9FFF]/g
                // console.log(reg2.test(a.value.trim()) + "reg2")
                if (reg1.test(a.value.trim()) == true || reg2.test(a.value.trim()) == true) {
                        b = new RegExp(`${a.value.trim()}`, 'gi')
                        // console.log(b)
                        let arr = []
                        for (let i = 0; i < shops.length; i++) {
                            result = shops[i].name.matchAll(b)
                            // console.log(Array.from(result))
                            if (Array.from(result).length > 0) {
                                arr.push(shops[i])
                            }
                        }
                        if (arr == "") {
                            searchWord.innerHTML = a.value
                            searchResult.innerHTML = "查無相關文章，輸入別的東西看看吧(ㆆᴥㆆ )"
                        }
                        else {
                            // console.log(arr)
                            searchWord.innerHTML = a.value
                            for (i = 0; i < arr.length; i++) {
                                searchResult.innerHTML += `<a href="/project/memo/${arr[i].url}" class="listLink"><div id="outSide"><img src="${arr[i].img}"><div id="inSide">${arr[i].name}</div></div>
                                </a>`
                                // console.log(arr[i])
                            }
                        }
                } else {
                    searchWord.innerHTML = a.value
                    searchResult.innerHTML = "輸入一些人類的語言吧 (ㆆᴥㆆ )"
                }
            }

        })

    // let list = document.getElementById("list-of-shop")
    // list.innerHTML = `<h1>hello</h1>`
}

function listOfShop(shops) {
    let list = ""
    // let list = `<table><tr>`
    shops.forEach(function (sh) {
        // list +=  `<td><img src="${sh.img}" alt=""><br><a href="${sh.url}">${sh.name}</a></td>`
        list += `<a href="/project/memo/${sh.url}" class="listLink"><div id="outSide"><img src="${sh.img}"><div id="inSide">${sh.name}</div></div>
        </a>`
    })
    // list += `</tr></table>`
    document.getElementById("list-of-shop").innerHTML = list
}
