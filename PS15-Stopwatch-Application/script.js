let ms = 0, sec = 0, min = 0, hr = 0;
let timer = null;

function update() {
    time.innerText =
        String(hr).padStart(2, '0') + ":" +
        String(min).padStart(2, '0') + ":" +
        String(sec).padStart(2, '0') + ":" +
        String(ms).padStart(2, '0');
}

function start() {
    if (timer) return;

    timer = setInterval(() => {
        ms++;

        if (ms == 100) {
            ms = 0;
            sec++;
        }

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        update();
    }, 10); // 10ms interval
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    ms = sec = min = hr = 0;
    update();
}