var departDate = "2018-06-15";

function getTimeRemaining(e) {
	var t = Date.parse(e) - Date.parse(new Date());
	var days = Math.floor( t/(1000*60*60*24) );
	var hours = Math.floor( (t/(1000*60*60))%24 );
	var mins = Math.floor( (t/(1000*60))%60 );
	var secs = Math.floor( (t/(1000))%60 );
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'mins': mins,
		'secs': secs,
		'print': function printTime(val) {
			var timeString = "<ul><li>" + val.days + " days</li>";
			timeString += "<li>" + val.hours + " hours</li>";
			timeString += "<li>" + val.mins + " mins</li>";
			timeString += "<li>" + val.secs + " secs</li></ul>";
			document.getElementById("ct-timer").innerHTML = timeString;
		}
	}
}

// function initializeClock(id, endtime) {
// 	var clock = document.getElementById(id);
// 	var timerInterval = setInterval(function() {
		
// 	});
// }

// document.getElementById("ct-timer").innerHTML = "changed!";

var run = function() {
	var timeLeft = getTimeRemaining(departDate);
	timeLeft.print(timeLeft);
	// document.getElementById("ct-timer").innerHTML = daysLeft.total;
	// return daysLeft;
}

window.onload = function() { //run the code after the DOM is constructed, resulting in the document element "ct-timer" having a value
	setInterval(run, 100);	
}

