function mytime() {
  var date = new Date();

  var h = date.getHours();

  var m = String(date.getMinutes()).padStart(2, "0");
  var s = String(date.getSeconds()).padStart(2, "0");

  var ap = "AM";

  if (h >= 12) {
    ap = "PM";
  }

  document.getElementById("time").innerHTML = h + ":" + m + ":" + s + " " + ap;

  setTimeout(mytime, 1000);
}
mytime();

//////////////////////////////////////////////////////////////

//////////////////////// alarm part //////////////////////////

var inhours = document.getElementById("hours");
var inmin = document.getElementById("minutes");

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let gHours = inhours.value;

  let gMinutes = inmin.value;

  let alarmSession = "AM";
  if (gHours >= 12) {
    alarmSession = "PM";
  }
  let alarmElement = document.getElementById("alarm-hours");

  alarmElement.innerHTML =
    "Alarm Time:" + " " + gHours + ":" + gMinutes + " " + alarmSession;
  checkAlarm();
});

// check alarm

function checkAlarm() {
  var date = new Date();

  var h2 = date.getHours();

  var m2 = date.getMinutes();
  var s2 = date.getSeconds();

  var gHours = inhours.value;

  var gMinutes = inmin.value;
  const Checker = setTimeout(checkAlarm, 1000);

  if (h2 == gHours && m2 == gMinutes) {
    const a = new Audio("sound/alarm.mp3");
    a.play();
    var i = 0;

    const repeater = setInterval(reap, 8000);

    function reap() {
      i++;
      if (i == 3) {
        clearInterval(repeater);
        location.reload();
      }
      const a = new Audio("sound/alarm.mp3");
      a.play();
    }

    // stop alarm

    const stop = document.getElementById("stop");

    stop.classList.remove("hide");

    stop.addEventListener("click", function () {
      a.pause();
      clearInterval(repeater);
      stop.classList.add("hide");
      location.reload();
    });

    clearTimeout(Checker);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
