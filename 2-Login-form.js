var form1=document.querySelector(".form1")

form1.addEventListener('mousemove',()=>{
    form1.style.transform="rotate(-10deg)"
    form1.style.transform="rotateY(15deg)"
});

form1.addEventListener("mouseleave",()=>{
    form1.style.transform="rotate(0deg)"
})
