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

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}

let interval = setInterval(clock , 1000);
