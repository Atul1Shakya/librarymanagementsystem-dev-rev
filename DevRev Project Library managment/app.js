var logsignDialog = false;

const logsignBtn = document.querySelector("#logsign-btn")
const logsignContainer = document.querySelector("#login-container");
logsignBtn.addEventListener("click",()=>{
    logsignDialog = true;
    logsignContainer.setAttribute("style","display:flex")
})

var logsignToggle = false;

const logsignBox = document.querySelector("#logsign-box")

const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

signupForm.addEventListener("click",()=>{
    document.querySelector("#signup-box").classList.add("active")
    document.querySelector("#login-box").classList.remove("active");
    document.querySelector(".signup-form").classList.add("active")
    document.querySelector(".login-form").classList.remove("active");
    logsignBox.classList.add("signup")
    logsignBox.classList.remove("login")
})
loginForm.addEventListener("click",()=>{
    document.querySelector("#signup-box").classList.remove("active");
    document.querySelector("#login-box").classList.add("active");
    document.querySelector(".signup-form").classList.remove("active");
    document.querySelector(".login-form").classList.add("active");
    logsignBox.classList.remove("signup")
    logsignBox.classList.add("login")
})


// logsignContainer.addEventListener("click",()=>{
//     var tog = true;
//     logsignBox.addEventListener("click",()=>{
//         tog=false;
//     });
//     if(tog)
//     {
//         logsignContainer.setAttribute("style","display:none")
//     }
// })
window.onclick= function(event){
    if(event.target.contains(logsignBox)&&event.target!==logsignBox){
        logsignContainer.setAttribute("style","display: none");
    }
}