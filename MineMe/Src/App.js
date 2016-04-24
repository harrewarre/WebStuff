(function () {
	var miniMe = document.getElementById("miniMe");

	var idleButton = document.getElementById("idleButton");
	var danceButton = document.getElementById("danceButton");
	var jumpButton = document.getElementById("jumpButton");
	var faintButton = document.getElementById("faintButton");

	idleButton.onclick = function () {
		miniMe.className = "";
		miniMe.classList.add("idle");
	};

	danceButton.onclick = function () {
		miniMe.className = "";
		miniMe.classList.add("dance");
	};

	jumpButton.onclick = function () {
		miniMe.className = "";
		miniMe.classList.add("jump");
	};
	
	faintButton.onclick = function () {
		miniMe.className = "";
		miniMe.classList.add("faint");
	};
})();