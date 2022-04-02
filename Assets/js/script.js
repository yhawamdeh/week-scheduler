const timeOfDay = Array.from(document.getElementsByClassName('saveBtn')).map(time => time.id);

document.addEventListener("click", function(event) {
    event.preventDefault();
    const id = event.target.id;
    if(timeOfDay.includes(id)){ 
        const text = document.getElementById(`${id}-text`).value
        localStorage.setItem(id, text);
    }
})

function setSchedule() {
    timeOfDay.map(function(time){
        const timeValue = localStorage.getItem(time);
        document.getElementById(`${time}-text`).value = timeValue;
    })
}

function convertTime(time) {
    if(time < 9) {
        return time + 12
    } else {
        return time
    }
}

function scheduleTimeofDay() {
    const date = new Date().getHours() //toLocaleTimeString([], {hour: "numeric"})
    const hour = parseInt(date)
    const times = $('.time-string')
    times.each(function() {
        const timeHour = convertTime(parseInt($(this).attr('time')))
        console.log(timeHour)
        if (timeHour < hour) {
            $(this).addClass('past');
        } else if (timeHour === hour) {
            $(this).addClass('present');
        } else  {
            $(this).addClass('future');
        }
    })
}

function callEveryHour() {
    scheduleTimeofDay();
    setInterval(scheduleTimeofDay, 1000*60*60)
}

setSchedule();
callEveryHour();