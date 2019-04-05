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

    $("#tabs").tabs();

    $("#planIn").tabs();

    $('#valueRange2').ionRangeSlider({
        grid: true,
        min: 50,
        max: 100000,
        from: 500,
        step: 100,
        grid_num: 16,
        grid_matgin: false,
        onStart: function (data) {
            $('#enterAmout2').val(data.from);
        },
        onChange: function (data) {
            $('#enterAmout2').val(data.from);
        }
    });
    var sumRange = $('#valueRange2').data('ionRangeSlider'),
        min = 50,
        max = 100000;
    $('#enterAmout2').on('change keyup', function () {
        var val = $(this).prop('value');
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        sumRange.update({
            from:val
        })
    })

    $(".slider").owlCarousel({
        margin: 10,
        dots: false,
        nav: true,
        navText: ["<", ">"],
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000
    })

}