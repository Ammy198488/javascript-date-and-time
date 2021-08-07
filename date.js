// Date
let clock = document.getElementById("clock");

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleDateString();
});

// time
let time = document.getElementById("time");

setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000);