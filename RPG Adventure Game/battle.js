function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ?  + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            clearInterval(timer);
            document.querySelector('#time').innerHTML = ' '
        } 

        if(timer == -1) {
            console.log('time is up');
        }


    }, 1000);
}

