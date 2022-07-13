// Timer to develop
const pomodoroTab=document.getElementById("pomodoro");
const shortbreakTab=document.getElementById("shortBreak");
const longbreakTab=document.getElementById("longBreak");

const pomodoroTabContent=document.getElementById("pomodoro-content");
const shortbreakTabContent=document.getElementById("shortbreak-content");
const longbreakTabContent=document.getElementById("Longbreak-content");

//console.log(pomodoroTab);
//console.log(pomodoroTabContent);
pomodoroTab.addEventListener("click",function(){
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");
    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.add("active");
});
shortbreakTab.addEventListener("click",function(){
    shortbreakTab.classList.add("active");
    longbreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");
    shortbreakTabContent.classList.add("active");
    longbreakTabContent.classList.remove("active");
    pomodoroTabContent.classList.remove("active");
    
});
longbreakTab.addEventListener("click",function(){
    shortbreakTab.classList.remove("active");
    longbreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");
    shortbreakTabContent.classList.remove("active");
    longbreakTabContent.classList.add("active");
    pomodoroTabContent.classList.remove("active");
});
// timer to develop
//setInterval(function(){
    //console.log(new Date().toISOString())
//}, 1000)
function timer(seconds){
    //console.log(Date.now());
    const now = Date.now();
    const then = now + (seconds*1000);

    const timerinterval=setInterval(function() {
        const secondsLeft = Math.round((then -Date.now())/1000);
        console.log(secondsLeft);

        if(secondsLeft<1){
            clearInterval(timerinterval)
        }

    }, 1000);

};
timer(10);