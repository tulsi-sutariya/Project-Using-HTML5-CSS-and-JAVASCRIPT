const express = require('express');
var app1 = express();

const cors = require('cors')

app1.use(cors({origin : 'https://foo.com'}))

app1.get('/',(res)=>{
  res.status(200).json({title : "Hello World"})
})


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries


  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8q20KJcDXW201yU6OoEHEGVukzJkvdDw",
    authDomain: "login-example-71d15.firebaseapp.com",
    projectId: "login-example-71d15",
    storageBucket: "login-example-71d15.firebasestorage.app",
    messagingSenderId: "858696976441",
    appId: "1:858696976441:web:fd2b38bc717e6dfa5965e8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


 

  const submit = document.querySelector(".btn")

  submit.addEventListener("click",(e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value
  const password = document.querySelector("#password").value

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Create account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  })














