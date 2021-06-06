const daysEl = document.getElementById('days');
const hourseEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';
function countdown(){
    const newYearsDate= new Date(newYears);
    const currnetDate = new Date();
    const totalSeconds = (newYearsDate - currnetDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hourseEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}


// initial call
setInterval(countdown,1000)

countdown();