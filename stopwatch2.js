const timer = document.getElementById("stopwatch");

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timeCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timeCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr
        }

        timer.innerHTML = hr + " : " + min + " : " + sec;

        setTimeout(timeCycle, 1000);
    }
}


function resetTimer() {
    timer.innerHTML = '00 : 00 : 00';
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
}

// Overview: sabse phle stopwatch naam k div ko yaha le aae. uske baad sbse main kaam hai timecycle function ko banana kyuki vhi clock hai. timecycle me sbse phle ye btaya ki agr stoptime jo boolean hmne bnaya hai, agr uski value false hai to hi isko execute karvana hai. fir sec, min or hr ko parseInt ki help se integer banana hai. fir sbse phle sec ki value deni hai ki sec ko 1 badha do. uske baad vhi stopwatch ka normal function banana hai ki sec ko 60 hote hi min to 1 badha do or sec ko 0 kr do. aise hi hr k saath karna hai. uske baad ye btana hai ki agr sec ki value 10 se km ho ya 0 ho to usko 0 + sec kr dena hai ek string k tor pe jodna hai number k tor pe nhi. uske baad aise hi min or hr k saath karna hai. fir timer ki inner html ko change krke ye bol dena hai ki min hr or sec ko dikhao agr timeCycle function chl rha ho. uske baad timeCycle pe setTimeout set karna hai 1000 miliseconds ka jisse ye function 1 sec k baad chle. uske baad startTime or stopTime functions ko banana hai. Starttime me batana hai ki agr stoptime agr on ho to usko off kr do or timeCycle function ko on kr do or stoptimer me btatna hai ki agr stoptime off ho to use on kr do. fir resetTimer me btana hai ki timer ka inner html change kr do or 00:00:00 likh do (ye sirf likha jaega ek string k tor pr, ye koi value nhi hai) or stoptime ko on kr do taaki ghadi ruk jae fir uske baad hr min or sec ko value ko bhi 0 karna hai taaki jb reset kre to time 00:00:00 real me bhi ho jae taaki jb user stopwatch ko dobara on kre to stopwatch dobara 00:00:00 se hi suru ho.