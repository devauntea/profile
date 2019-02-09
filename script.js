let about = document.getElementById("me");
let bodyArray = document.getElementsByTagName("BODY");
let body = bodyArray[0];

document.addEventListener("click", whenClicked);

about.addEventListener("mouseover", whenOver);
about.addEventListener("mouseout", whenOff);


function whenClicked() {
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "welcome!";
	newHeading.style.color = "red";
	newHeading.style.fontSize = "48px";
	about.appendChild(newHeading);
}

function whenOver(){
	body.style.color = "red";
}

function whenOff(){
	body.style.color = "white";
}