"use strict";
const modal=document.querySelector(".modal")
const openButton=document.querySelector(".modal-btn")
const closeButton=document.querySelector(".close-btn")
const noButton=document.querySelector(".btn2")
const yesButton=document.querySelector(".btn1")

const openModal=()=>{
    modal.classList.remove("close")
}

function closeButton1(){
    modal.classList.add("close")
}

openButton.addEventListener("click",()=>{
    openModal()
})

closeButton.addEventListener("click",()=>{
    closeButton1()
})

yesButton.addEventListener("click",()=>{
    const body=document.body
    body.style.display="none"
})

noButton.addEventListener("click",()=>{
    modal.classList.add("close")
})


