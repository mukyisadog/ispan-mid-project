function Food(name, id) {
    this.name = name
    this.id = id
}

window.onload = () => {
    let wantToEat = document.getElementById("wantToEat") // 輸入框
    let addList = document.getElementById("addList") // 新增選項
    let prompt = document.getElementById("prompt") // 加入成功或失敗
    let foodList = document.getElementById("foodList") // 清單區塊
    let list = [
        new Food("牛肉麵", "food0"),
        new Food("咖哩飯", "food1"),
        new Food("炒飯", "food2"),
        new Food("鍋貼", "food3"),
        new Food("燒臘便當", "food4")
    ]

    // 一開始生成
    for (i = 0; i < list.length; i++) {
        foodList.innerHTML += `<div class="option ${list[i].id}">
        <span class="foods">${list[i].name}</span>
        <button type="button" class="deleteBtn ${list[i].id}"><img src="./img/bin.png"></button>
        </div>`
    }

    // 按新增選項
    addList.onclick = () => {
        if (wantToEat.value !== "") {
            foodList.innerHTML = ""
            // list.splice(0, 0, new Food(wantToEat.value, list.length))
            list.push(new Food(wantToEat.value, new Date().getTime()))
            console.log(list)
            for (i = 0; i < list.length; i++) {
                foodList.innerHTML += `<div class="option ${list[i].id}">
                <span class="foods">${list[i].name}</span>
                <button type="button" class="deleteBtn ${list[i].id}"><img src="./img/bin.png"></button>
                </div>`
            }
            // let newFood = new Food(wantToEat.value, list.length)
            // let em = document.createElement('em')
            // em.textContent = newFood.name
            // em.setAttribute
            // foodList.appendChild(new Food(wantToEat.value, list.length))
            // console.log(list)
            prompt.innerText = `${wantToEat.value} 加入成功(๑و•̀ω•́)و`
            wantToEat.value = ""
            console.log(document.getElementsByClassName("option"))
        } else {
            prompt.innerText = "請輸入想增加的選項再按下按鈕(ㆆᴥㆆ )"
        }
    }

    let deleteBtns = document.getElementsByClassName("deleteBtn")
    let arrDeleteBtns = [...deleteBtns]
    console.log(arrDeleteBtns)
    let options = document.getElementsByClassName("option")
    // console.log(options)
    // console.log(deleteBtns)
    // console.log(arrDeleteBtns)
    arrDeleteBtns.forEach((bn) => {
        bn.onclick = function(e) {
            // let targetFoodId = e.target.classList.value.split(" ")
            // console.log(targetFoodId[1])
            let optionId = e.target.closest(".option").getAttribute("class").split(" ")
            console.log(optionId[1])
        }
    });

    // let deleteImgs = document.getElementsByClassName("deleteImg")
    // let arrDeleteImgs = [...deleteImgs]
    // // console.log(deleteBtns)
    // // console.log(arrDeleteBtns)
    // arrDeleteImgs.forEach((bn) => {
    //     bn.onclick = function(e) {
    //         // console.log(e.target.closest(".option").attr("class"))
    //         console.log(e.target.classList[1])
    //     }
    // });

    // console.log(deleteBtns[1].classList)
    // deleteBtns.array.forEach((bn) => {
    //     bn.onclick = function() {
    //         console.log("A")
    //     }
    // });





    // test = document.getElementById("test")
    // test.onclick = () => {
    //     options[0].remove()
    //     list.splice(0, 1)
    // }

    // [].forEach.call(foodList, function(el) {
    //     el.onclick = function() {
    //         lejt index = this.index()
    //         console.log("A")
    //     }
    // })

}

// function doDelete() {
//     let test = document.getElementById("test")
//     test.onclick = function() {
//         console.log(document.getElementsByClassName("option"))
//     }
// }

// function hello() {
//     let foods = document.getElementsByClassName("foods")
//     let test = document.getElementById("test")
//     let foodsArr = Array.from(foods)
//     test.onclick = () => {
//         arr2 = []
//         for ( let j = 0 ; j < foodsArr.length ; j++) {
//             // console.log(foodsArr[j].innerText)
//             arr2.push(foodsArr[j].innerText)
//         }
//         console.log(arr2)
//     }    
// }

