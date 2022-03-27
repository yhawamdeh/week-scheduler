const timeOfDay = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]

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
        console.log(timeValue);
        document.getElementById(`${time}-text`).value = timeValue;
    })
}
setSchedule();

function scheduleTimeofDay() {
    console.log("random")
}

function callEveryHour() {
    setInterval(scheduleTimeofDay, 1000*60*60)
}
callEveryHour()

const timeBlocks = Array.from(document.getElementsByClassName('description'));
// assigning timeBlocks based on time.

for (let i = 0; i < timeBlocks.length; i++) {

    //  gets the current hour to connect the color changing feature in the text area element based on the 24hr format.
    const t = new Date().getHours();

    // converts timeBlocks 'id' into an integer.
    let timeBlocksId = parseInt(timeBlocks[i].id);
    // convert hour into an integer.
    let now = parseInt(t);

    //  if statement's to change the color of the blocks based on time using the 24hr time format.
    if (timeBlocksId < now) {
        timeBlocks[i].classList.add('past');
    } else if (timeBlocksId === now) {
        timeBlocks[i].classList.add('present')
    } else {
        timeBlocks[i].classList.add('future');
    }
};