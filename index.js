const input = document.querySelector(".operation-area__input")

input.addEventListener("keyup", ()=>{
    let inputUnit = document.querySelectorAll(".unit")
    for(let i = 0; i < inputUnit.length; i++){
        inputUnit[i].textContent = input.value
    }
    // if(input.value > 6){
    //     input.style.width = "max-content"
    //     console.log(input.value)
    // } else{
    //     input.style.width = "80px"
    // }
    lengthConversion()
    volumeConversion()
    massConverstion()
})

function lengthConversion(){
    let meterToFeet = input.value * 3.281
    document.getElementById("feet").textContent = meterToFeet.toFixed(3)
    let feetToMeter = input.value / 3.281
    document.getElementById("meters").textContent = feetToMeter.toFixed(3)
}

function volumeConversion(){
    let litersToGallons = input.value * 0.264172
    document.getElementById("gallons").textContent = litersToGallons.toFixed(3)
    let gallonsToLiters = input.value / 0.264172
    document.getElementById("liters").textContent = gallonsToLiters.toFixed(3)
}

function massConverstion(){
    let kilogramsToPounds = input.value * 2.20462
    document.getElementById("pounds").textContent = kilogramsToPounds.toFixed(3)
    let poundsToKilograms = input.value / 2.20462
    document.getElementById("kilograms").textContent = poundsToKilograms.toFixed(3)
}


//Dark Mode
const darkModeBtn = document.getElementById("dark-mode")
const lightModeBtn = document.getElementById("light-mode")
const displayBox =  document.querySelectorAll(".render")
const displayBoxTitle = document.querySelectorAll(".render__title")
const displayBoxText = document.querySelectorAll(".render__text")
darkModeBtn.addEventListener("click", ()=>{
    document.querySelector(".display-area").classList.add("bottom-section-dark")
    document.querySelector("body").style.background = "#374151"
    darkModeBtn.style.display = "none"
    lightModeBtn.style.display = "block"
    for(let i = 0; i < displayBox.length; i++ ){
        displayBox[i].classList.add("render-dark")
    }
    for(let i = 0; i < displayBoxTitle.length; i++ ){
        displayBoxTitle[i].classList.add("render-dark__title")
    }
    for(let i = 0; i < displayBoxTitle.length; i++ ){
        displayBoxText[i].classList.add("render-dark__text")
    }
})

//Light Mode
lightModeBtn.addEventListener("click", ()=>{
    darkModeBtn.style.display = "block"
    lightModeBtn.style.display = "none"
    document.querySelector(".display-area").classList.remove("bottom-section-dark")
    document.querySelector("body").style.background = "white"
    for(let i = 0; i < displayBox.length; i++ ){
        displayBox[i].classList.remove("render-dark")
    }
    for(let i = 0; i < displayBoxTitle.length; i++ ){
        displayBoxTitle[i].classList.remove("render-dark__title")
    }
    for(let i = 0; i < displayBoxTitle.length; i++ ){
        displayBoxText[i].classList.remove("render-dark__text")
    }
})