
function countdown () {
    var seconds = document.getElementById("seconds").Value;

    function tick() {
        seconds = seconds - 1;
        TimeRanges.innerHTML = seconds;
        var time = setTimeout (tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = ""; 
        }
    }
    tick();


}

