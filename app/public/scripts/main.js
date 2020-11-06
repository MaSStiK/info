setInterval(() => {
	var date = new Date();
	var hour = String((date.getHours()*4) < 10 ? "0" + (date.getHours()*4) : (date.getHours()*4));
	var min = String((date.getMinutes()) < 10 ? "0" + (date.getMinutes()) : (date.getMinutes()));
	var sec = String((date.getSeconds()) < 10 ? "0" + (date.getSeconds()) : (date.getSeconds()));
	var timeColor = "#" + hour + min + sec

	var time = String(date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" + min + ":" + sec;

	document.getElementById("body").style.backgroundColor = timeColor;
	document.getElementById("time").innerText = time;
}, 1000);