let counter = 0;
let timeOut;

// IIFE that updates the GUI
var increaseCount = (function () {
	document.querySelector('.clickArea').addEventListener('click', function () {
		if (timeOut === false) {
			counter++;
			document.querySelector('.clickAmount').innerText = counter;
		} else {
			timer();
		}
	});
})();

document.querySelector('#startButton').addEventListener('click', function () {
	timer();
});

// function that starts the timer
function timer() {
	document.querySelector('.clickAmount').innerText = '0';
	timeOut = false;
	let countDownSeconds = 10;
	let x = setInterval(function () {
		document.getElementById('startButton').innerText = 'Timer Has Started';

		document.getElementById('startButton').disabled = true;

		countDownSeconds -= 1;

		document.querySelector('#timer').innerText =
			'Time Left: ' + countDownSeconds + ' secs';

		if (countDownSeconds < 0) {
			timeOut = true;
			document.getElementById('startButton').disabled = false;
			document.getElementById('startButton').innerText = 'Try Again';
			alert(
				'You pressed ' +
					counter +
					' times and obtained a score of ' +
					counter / 10 +
					' CPS. \n Have a great day :)'
			);
			// reloading the page
			clearInterval(x);
			location.reload();
		}
	}, 1000);
}
