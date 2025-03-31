const start_btn=document.querySelector(".start-btn button")
const continue_btn = document.querySelector(".restart")
const rules_box = document.querySelector(".second")
const quit_btn=rules_box.querySelector(".quit")
const quiz_box = document.querySelector(".third")
const quit_btn1= quiz_box.querySelector(".quit")
const timeCount = quiz_box.querySelector(".times .time_sec")
const time_line = quiz_box.querySelector(".time_line")
const result_box = document.querySelector(".win_box")
const replay_quiz_btn = result_box.querySelector(".buttons .restart")
const quit_btn2 = result_box.querySelector(".buttons .quit")

start_btn.addEventListener("click",()=>{
    rules_box.classList.add("activeRules")
    start_btn.classList.remove("activeStart")
})

quit_btn.addEventListener("click",()=>{
    rules_box.classList.remove("activeRules")
})

quit_btn1.addEventListener("click",()=>{
    start_btn.classList.add("activeStart")
    quiz_box.classList.remove("activeQuiz")
    rules_box.classList.remove("activeRules")
    
})

replay_quiz_btn.addEventListener("click",()=>{
    result_box.classList.remove("activeResult")
    quiz_box.classList.add("activeQuiz")
    let que_count = 0
    let counter
    let que_numb = 1
    let timeValue = 15
    let widthValue = 0
    let userScore = 0
   
    showQuestion(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    clearInterval(counterLine)
    startTimerLine(widthValue)
})

quit_btn2.addEventListener("click",()=>{
    window.location.reload()
})


continue_btn.addEventListener("click",()=>{
    quiz_box.classList.add("activeQuiz")
    rules_box.classList.remove("activeRules")
    showQuestion(0)
    queCounter(1)
    startTimer(15)
    startTimerLine(0)
  
})

let questions= [
    {
        numb : 1,
        question: "What does HTML stand for?",
        answer:"Hyper Text Markup Language",
        list:
        ["Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Text Multiple Language"
        ]
    },
    {
        numb :2,
        question:"What does CSS stand for?",
        answer:"Cascading Style Sheet",
        list:[
            "Common Style Sheet",
            "Colourful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb:3,
        question:"What does PHP stand for?",
        answer:"Hypertext Preprocessor",
        list:[
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb:4,
        question:"What does SQL stand for?",
        answer:"Structured Query Language",
        list:[
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb:5,
        question:"What does XML stand for?",
        answer:"extensible Markup Language",
        list:[
            "extensible Markup Language",
            "executable Multiple Language",
            "extra Multi-Program Language",
            "examine Multiple Language"
        ]
    }
]


let que_count = 0
let que_numb = 1
let counter
let timeValue = 15
let widthValue = 0
let userScore = 0

const next_btn = quiz_box.querySelector(".next")

next_btn.addEventListener("click",()=>{
   if(que_count < questions.length - 1){
    que_count++
    que_numb++
    showQuestion(que_count)
    queCounter(que_numb)
    clearInterval(counter)
    startTimer(timeValue)
    clearInterval(counterLine)
    startTimerLine(widthValue)
   }
   else{
    showResultBox()
   }
})


function showQuestion(index){
    const que_text = document.querySelector(".question")
    let que_tag = '<h1>'+questions[index].numb + "." + questions[index].question+'</h1>'
    que_text.innerHTML = que_tag
    const option_list = document.querySelector(".option_list")
    let option_tag = '<div class="list">' + questions[index].list[0] +'<span></span></div>'
                    +'<div class="list">' + questions[index].list[1] +'<span></span></div>' +
                    '<div class="list">' + questions[index].list[2] +'<span></span></div>' +
                    '<div class="list">' + questions[index].list[3] +'<span></span></div>'
    option_list.innerHTML = option_tag
    const option = option_list.querySelectorAll(".list")
    for(let i=0; i < option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)")
    
    }

}

let cross = '<div class="cross"><img src="Images/icons8-cross-30.png" alt=""></div>'
let tick = '<div class="tick"><img src="Images/tick-icon.png" alt="" ></div>'
function optionSelected(answer){
    clearInterval(counter)
    clearInterval(counterLine)
    let userAns = answer.textContent
    const option_list = document.querySelector(".option_list")
    let correctAns = questions[que_count].answer
    let allOption = option_list.children.length

    if(userAns == correctAns ){
        userScore++
        console.log(userScore)
        answer.classList.add("correct")
        answer.insertAdjacentHTML("beforeend",tick)
        
    }
    else{
        answer.classList.add("incorrect")
        answer.insertAdjacentHTML("beforeend",cross)

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOption ;i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class","list correct")
                option_list.children[i].insertAdjacentHTML("beforeend",tick)

            }
        }
    }

    //once user selected disabled all option
    for(let i = 0;i < allOption; i++){
        option_list.children[i].classList.add("disabled")
    }
}

function queCounter(index){
    const bottom_que_counter = document.querySelector(".left")
    let totalQueCounter = '<p> <span>'+ index +' </span> of <span>'+ questions.length +' </span> Questions</p>'
    bottom_que_counter.innerHTML = totalQueCounter
}


function startTimer(time){
    counter =setInterval(timer,1000)
    function timer(){
        timeCount.textContent = time
        time--
        if(time < 9){
            let addZero = timeCount.textContent
            timeCount.textContent = "0" + addZero
        }
        if(time < 0){
            clearInterval(counter)
            timeCount.textContent = "00"
        }
    }
}

function startTimerLine(time){
    counterLine =setInterval(timer,29)
    function timer(){
        time += 1
         time_line.style.width=  time + "px"
        if(time > 549){
            clearInterval(time_line)
        }
    }
}

function showResultBox(){
    quiz_box.classList.remove("activeQuiz") // hide the info box
    rules_box.classList.remove("activeRules") // hide the quiz box
    result_box.classList.add("activeResult") //show the result_box
    const scoreText = result_box.querySelector(".right")
    if(userScore > 3){
        let scoreTag = '<p> Congrats! 🥳 ,You got <span>'+  userScore +'</span>out of<span>'+ questions.length +'</span></p>'
        scoreText.innerHTML = scoreTag
    }
    else if(userScore ==  3){
        let scoreTag = '<p> nice 👌,You got <span>'+  userScore +'</span>out of<span>'+ questions.length +'</span></p>'
        scoreText.innerHTML = scoreTag
    }
    else if(userScore ==  2){
        let scoreTag = '<p> good 👏,You got <span>'+  userScore +'</span>out of<span>'+ questions.length +'</span></p>'
        scoreText.innerHTML = scoreTag
    }
    else{
        let scoreTag = '<p>and sorry 😞 ,You got <span>'+  userScore +'</span>out of<span>'+ questions.length +'</span></p>'
        scoreText.innerHTML = scoreTag
    }
}