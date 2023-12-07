let screenWith = window.screen.width
const sliderItem = document.getElementsByClassName("slider-item")

let start = screenWith;
let startIndex = 0;
let sliderLength = sliderItem.length
// setInterval(function () {
//     StartSlider()
// }, 4000)




function StartSlider() {
    startIndex++
    if (startIndex == sliderLength) {
        start = screenWith
        startIndex = 0
        console.log(startIndex);
    }
    sliderItem[0].style.marginLeft = `-${start}px`
    start = start + 1920

}


function Next() {
    startIndex++
    if (startIndex == sliderLength) {
        start = 0
        startIndex = 0
        console.log(start);

    }
    sliderItem[0].style.marginLeft = `-${start}px`
    start = start + 1920
    console.log(start);

  

}

// function Prev() {
//     startIndex--
//     if (startIndex == 0) {
//         start = 3840
//         startIndex = sliderLength-1
//         sliderItem[0].style.marginLeft = `-${start}px`
//         console.log("plus"+start);

//     } else {
//         start = start - 1920
//         sliderItem[0].style.marginLeft = `-${start}px`
//         console.log(start);
//     }



// }





