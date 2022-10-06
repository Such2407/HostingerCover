const times= document.querySelector(".time")
const header = document.querySelector(".header")

header.addEventListener("click", function(e){
    let hk = e;
    console.log(hk)
    let mytarget = e.target.classList.value
    console.log(mytarget)
    let id = document.getElementById(mytarget);
    console.log(id);
    if(id){
        id.classList.toggle("active")
    }
    let=otherbtn = document.querySelectorAll(".active");
    console.log(otherbtn)
    otherbtn.forEach(previuosbtn=>{
        if(previuosbtn === id){
            return;   
        }
        if(id){
            previuosbtn.classList.toggle("active")
        }
        else{
            previuosbtn.classList.remove("active")
        } 
    })
})

function secsf(){
    let time=new Date()
    let sect=time.getSeconds()
    let mints=time.getMinutes()
    let hours=time.getHours()
    let days=time.getDay()
    if(days<10){
        days="0"+days
    }
    if(hours<10){
        hours="0"+hours
    }
    if(mints<10){
        mints="0"+mints
    }
    if(sect<10){
        sect="0"+sect
    }
   times.innerHTML=`<div>${days}</div><div>${hours}</div><div>${mints}</div><div>${sect}</div>`

    
}
setInterval(secsf, 1000)
secsf()

const seeAll = document.querySelector(".see-all")
const seeLess = document.querySelector(".see-less")
const planFeatures = document.querySelector(".plan-features")

seeAll.addEventListener("click", function(){
    planFeatures.classList.add("addplan-features")
})
seeLess.addEventListener("click", function(){
    planFeatures.classList.remove("addplan-features")
})

const menuHost = document.querySelectorAll(".menu-host")
menuHost.forEach(function(e){
    let next = e.nextElementSibling
    e.addEventListener("click", function(){
        next.classList.toggle("active")
    })
})

const arrowDownIcon = document.querySelector(".arrow-down-icon")
const host = document.querySelector(".host")

host.addEventListener("click", function(){
    let me=host.lastElementChild
    console.log(me);
    me.classList.toggle("rotate")
})


// host.addEventListener("click", function(){
//     arrowDownIcon.classList.toggle("rotate")
// })
// menuHost2.forEach(function(e){
//     let next = e.nextElementSibling
//     let mNext = e.nextElementSibling
//     e.addEventListener("click", function(){
//         next.classList.toggle("active")
//         mNext.classList.add("rotate")
//     })
// })