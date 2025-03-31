"use strick"
const search_input = document.querySelector(".search-input")
const search = document.querySelector(".search-bar img")

search.addEventListener("click",()=>{
    search_input.classList.toggle("active")
})


const register_link=document.querySelector(".register-link")
const login_link = document.querySelector(".login-link")
const cross=document.querySelector(".cross")
const log_btn=document.querySelector(".log-btn")
const register=document.querySelector(".register")
const container1=document.querySelector(".container1")
const form_box=document.querySelector(".form-box")
const regis_cross = document.querySelector(".regis-cross")
const container = document.querySelector(".container")
const header = document.querySelector("header")
const home = document.querySelector(".home")
const image = document.querySelector(".home img")

log_btn.addEventListener("click",()=>{
    container1.classList.add("active")
   container.style.visibility = "hidden"
   header.style.visibility = "hidden"
   image.style.visibility= "hidden";
  
})

register_link.addEventListener("click",()=>{
    register.style.visibility="visible"
   form_box.style.visibility="hidden"

})
login_link.addEventListener("click",()=>{
     register.style.visibility="hidden"
   form_box.style.visibility="visible"
})

cross.addEventListener("click",()=>{
    container1.classList.remove("active")
    container.style.visibility = "visible"
   header.style.visibility = "visible"
   image.style.visibility= "visible";
})

regis_cross.addEventListener("click",()=>{
    container1.classList.remove("active")
    container.style.visibility = "visible"
   header.style.visibility = "visible"  
   image.style.visibility= "visible";
})

const left_img = document.querySelector(".left img")

const img_array = [
   'Images/psta dish.jpg',
   'Images/pizza dish.jpg',
   'Images/italian dish.jpg',
   'Images/dhhosa dish.jpg',
   'Images/dhokla-dish.jpg',
   'Images/idly-idli-south-indian-main-.jpg'
 ]
 let currentIndex = 0
 
function changeImg(){
   currentIndex = (currentIndex + 1) % img_array.length
      left_img.src = img_array[currentIndex]
}

   setInterval(changeImg,3000)

const product_img = document.querySelector(".i1 img")
const product_title = document.querySelector(".latest .i1_text")

const product_img_array = [
   "Images/gulab jambu.jpg",
   "Images/Kaju katari2.0.jpg",
   "Images/Modak2.jpg",
   "Images/bundi-laddoo-motichoor-laddu-.jpg"
]
const text= [
   "Gulab Jamun",
   "Kaju Katari",
   "Modak",
   "Bundi Laddoo"
]
let index = 0
let text_index = 0
function changeImageWithText(){
   index = (index + 1) % product_img_array.length
   text_index = (text_index + 1) % text.length
   product_img.src = product_img_array[index]
   product_title.innerHTML = text[text_index]
}

setInterval(changeImageWithText,3000)

const product_img2 = document.querySelector(".i2 img")
const product_title2 = document.querySelector(".latest .i2_text")

const product_img2_array2 = [
   "Images/basundi-rabri-rabdi-dessert-.jpg",
   "Images/Lachcha rabari or basundi.jpg",
   "Images/Basundi-.jpg"
]
const text2 =[
   "Rabri Basundi",
   "Lachcha Basundi",
   "Basundi"
]
let index2 = 0
let text_index2 = 0

function changeImageWithText2(){
   index2 = (index2 + 1) % product_img2_array2.length
   text_index2 = (text_index2 + 1) % text2.length
   product_img2.src = product_img2_array2[index2]
   product_title2.innerHTML = text2[text_index2]
}

setInterval(changeImageWithText2,3000)

const product_img3 = document.querySelector(".i3 img")
const product_title3 = document.querySelector(".latest .i3_text")
const product_img3_array3 = [
   "Images/Moong-dal-halwa.png",
   "Images/gajar-halwa-carrot-halwa.jpg",
   "Images/Suji-ka-Halwa2.0.jpg",
   "Images/Dudhi Halwa.jpg"
]
const text3 = [
   "Moong-Dal Halwa",
   "Carrot Halwa",
   "Suji Halwa",
   "Bottle Gourd Halwa"
]
let index3 = 0
let text_index3 = 0

function changeImageWithText3(){
   index3 = (index3 + 1) % product_img3_array3.length
   text_index3 = (text_index3 + 1) % text3.length
   product_img3.src = product_img3_array3[index3]
   product_title3.innerHTML = text3[text_index3]
}

setInterval(changeImageWithText3,3000)

const microphone = document.querySelector("#microphone")
const search_input_input = document.querySelector(".search-input input")
var recognition = new webkitSpeechRecognition()

recognition.lang = window.navigator.language
recognition.interimResults = true
microphone.addEventListener("click",()=>{
   recognition.start()

   microphone.addEventListener("click",()=>{recognition.stop()})
})

recognition.addEventListener('result',(e)=>{
   const result = e.results[e.results.length-1][0].transcript
   search_input_input.textContent = result
})

const touch_form_input = document.querySelector("#user1")
const span1 = document.querySelector(".form1")

   touch_form_input.addEventListener("focus",()=>{
      span1.classList.add("bg")
   })
   
   touch_form_input.addEventListener("blur",()=>{
      span1.classList.remove("bg")
   })

   const touch_form_input2 = document.querySelector("#email1")
   const span2 = document.querySelector(".form2")
   
      touch_form_input2.addEventListener("focus",()=>{
         span2.classList.add("bg")
      })
      
      touch_form_input2.addEventListener("blur",()=>{
         span2.classList.remove("bg")
      })

 const touch_form_input3 = document.querySelector("#number")
 const span3 = document.querySelector(".call")

   touch_form_input3.addEventListener("focus",()=>{
      span3.classList.add("bg")
   })
   
   touch_form_input3.addEventListener("blur",()=>{
      span3.classList.remove("bg")
   })
