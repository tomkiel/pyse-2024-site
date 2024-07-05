//Counter start date
const startDateElement = document.getElementById("counter-start-date");
const startDate = new Date(startDateElement.getAttribute("data-start"));

//Counter elements
const counterDays = document.getElementById("counter-days");
const counterHours = document.getElementById("counter-hours");
const counterMinutes = document.getElementById("counter-minutes");
const counterSeconds = document.getElementById("counter-seconds");

function heroCounter() {
  //basic time data
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Current date
  const currentDate = new Date();

  //the difference between the dates
  const distance = startDate - currentDate;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  //determine the counter values
  counterDays.innerHTML = days + "<span>" + (days === 1 ? i18n("time.day") : i18n("time.days")) + "</span>";
  counterHours.innerHTML = hours + "<span>" + (hours === 1 ? i18n("time.hour") : i18n("time.hours")) + "</span>";
  counterMinutes.innerHTML = minutes + "<span>" + (minutes === 1 ? i18n("time.minute") : i18n("time.minutes")) + "</span>";
  counterSeconds.innerHTML = seconds + "<span>" + (seconds === 1 ? i18n("time.second") : i18n("time.seconds")) + "</span>";
};

//Run the script onload
document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete") {
    if ((startDate - new Date()) > 0) {
      setInterval(() => { heroCounter(); }, 1000);
    };
  };
});