setInterval(function () {
    let date = new Date();
    var time = date.toLocaleTimeString();
    var current_day = date.toLocaleDateString('en-US', {
        weekday:'long',
        day:'numeric',
        month:'short',
        year:'numeric'
    });

    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = current_day;
}, 1000);