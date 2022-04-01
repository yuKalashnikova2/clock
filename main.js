window.onload = function() {
    window.setInterval(function() {
        let date = new Date();

        let hours = date.getHours();
        let min = date.getMinutes();
        let second = date.getSeconds();


        if(min < 10) min = "0" + min;
        if(second < 10) second = "0" + second;
        if(hours < 10) hours = "0" + hours;
        let clock = hours + ":" + min + ":" + second;
        document.getElementById("clock").innerHTML = clock;
    });
}