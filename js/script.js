window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();
            sec = date.getSeconds()


        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (month < 10) month = "0" + month;
        if (sec < 10) sec = "0" + sec;
        document.getElementById("date").innerHTML = day + "/" + month;
        document.getElementById("yers").innerHTML = year;
        document.getElementById("time").innerHTML = hour + " : " + min + " : " + sec;
    }
    var timer;
    function clockStart() {
        timer = setInterval(clock, 1000);
        clock()
    }
    clockStart()

}