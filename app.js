function clock() {
    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = "AM"

    //convert 24 hours time to 12 hour with AM PM indicator
    if (h > 12) {
        h = h - 12;
        var am = "PM"
    }

    //add 0 to the begining of number if number is less than 10
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

let interval = setInterval(clock , 1000);
