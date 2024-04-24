var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
	if (character.classList != "jumping") {
		character.classList.add("jumping");
	}
	setTimeout(function() {
		character.classList.remove("jumping");
	}, 500);
}
var checkDead = setInterval(function() {
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	if (blockLeft < 20 && blockLeft > 0 && characterTop >= 135) {
		block.style.animation = "none";
		block.style.display = "none";
		alert("You lose!");
	}
}, 50);
