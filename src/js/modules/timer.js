function timer() {

    const deadline = "2020-03-12";

    getRemainTime = time => {
            let t = Date.parse(time) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor(t / 1000 / 60 / 60);
        
            if (t <= 0) {
              seconds = 0;
              minutes = 0;
              hours = 0;
            }
            return {
              total: t,
              seconds: seconds,
              minutes: minutes,
              hours: hours
            };
          };
        
    setClock = (id, endtime) => {
        const timer = document.getElementById(id),
              hours = timer.querySelector(".hours"),
              minutes = timer.querySelector(".minutes"),
              seconds = timer.querySelector(".seconds"),
              timeInterval = setInterval(changeTimer, 1000);
        
            function changeTimer() {
              let t = getRemainTime(endtime);
        
              if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
              } else {
                seconds.textContent = t.seconds;
              }
        
              if (t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
              } else {
                minutes.textContent = t.minutes;
              }
        
              if (t.hours < 10) {
                hours.textContent = "0" + t.hours;
              } else {
                hours.textContent = t.hours;
              }
        
              if (t.total <= 0) {
                clearInterval(timeInterval);
              }
            }
          };
        
    setClock("timer", deadline);
}

module.exports = timer;