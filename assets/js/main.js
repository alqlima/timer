function clock() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;

    function startWatch() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const elements = e.target;

        if (elements.classList.contains('start')) {
            clock.classList.remove('paused');
            clearInterval(timer);
            startWatch();
        }
        if (elements.classList.contains('pause')) {
            clearInterval(timer);
            clock.classList.add('paused');
        }
        if (elements.classList.contains('reset')) {
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            clock.classList.remove('paused');
            seconds = 0;
        }
    });
}
clock();