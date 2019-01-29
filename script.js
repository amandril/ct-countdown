var departDate = "2018-06-15";

// gets the remaining time until the date which is passed as a parameter
function getTimeRemaining(e) {
	let t = Date.parse(e) - Date.parse(new Date());

	// saves the dom element "ct-timer" to variable for re-use
	const timer = document.getElementById("ct-timer");
	// checks if we've passed the date yet
	if (t <= 0) {
		return {
			'print': function printTime(e) {
				timer.innerHTML = "Out on the trail!";
			}
		}
	}
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
			timer.innerHTML = timeString;
		}
	}
}

// saves the return value of getTimeRemaining into a function expression for use below / on page load
var run = function() {
	let timeLeft = getTimeRemaining(departDate);
	// runs the method returned in the getTimeRemaining function
	timeLeft.print(timeLeft);
}

window.onload = function() { //run the code after the DOM is constructed, resulting in the document element "ct-timer" having a value
	setInterval(run, 100);	
}