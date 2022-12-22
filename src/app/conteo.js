export const countdown = () => {
  let endDate = new Date("Jan 01, 2023 00:00:00").getTime();
  let now = new Date().getTime();

  let difference = endDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};

setInterval(countdown, 1000);
