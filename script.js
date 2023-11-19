var followStatus = document.querySelector("h5")
var followButton = document.querySelector("button")

var flag = 0

// followButton.addEventListener("click", function(){

//     if(flag==0){
//         console.log("i am fine")
//         followStatus.innerHTML = "Following"
//         followStatus.style.color = "green"
//         followButton.innerHTML = "Unfollow"
//         flag = 1
//     }else{
//         console.log("else")
//         followStatus.innerHTML = "Follow"
//         followStatus.style.color = "Red"
//         followButton.innerHTML = "Follow"

//         flag = 0
//     }
// })

followStatus.addEventListener("click", function(){
    if(flag==0){

        console.log("toggle is working")
        // followStatus.style.backgroundColor ="pink"
        followStatus.innerHTML ="Unfollow"
        flag=1;
    }else{
        followStatus.innerHTML ="Follow"
        flag=0;
    }
})

let card = document.getElementById("card")
let heart = document.querySelector("i")

card.addEventListener("dblclick", function(){
    heart.style.opacity = .8;
    heart.style.transform = "translate( -50%, -50%) scale(1.5)";

    console.log("heart is on ")
    setTimeout(function(){
        heart.style.opacity = 0;
    },1000)
    // heart.style.color ="red";
})
