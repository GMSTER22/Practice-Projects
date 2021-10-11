function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");


window.addEventListener("keydown", (e) => {

	if (e.key === "ArrowDown" || e.key === "Down") {
		moveVertical(avatar, 25);
	} else if (e.key === "ArrowUp" || e.key === "Up") {
		moveVertical(avatar, -25);
	} else if (e.key === "ArrowRight" || e.key === "Right") {
		moveHorizontal(avatar, 25);
		avatar.style.transform = "rotateY(0)";
	} else if (e.key === "ArrowLeft" || e.key === "Left") {
		moveHorizontal(avatar, -25);
		avatar.style.transform = "rotateY(180deg)";
	}

	if (isTouching(avatar, coin)) { return moveCoin(); } 
})

const moveVertical = (element, distance) => {
	const currTop = extractPos(element.style.top);
	element.style.top = `${currTop + distance}px`;
}

const moveHorizontal = (element, distance) => {
	const currTop = extractPos(element.style.left);
	element.style.left = `${currTop + distance}px`;
}


const extractPos = (pos) => {
	if (pos === "") return 0;
	return parseInt(pos.slice(0, -2));
}



const moveCoin = () => {
	let randomHeight = Math.floor(Math.random() * window.innerHeight);
	let randomWidth = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = randomHeight + "px";;
	coin.style.left = randomWidth + "px";
}

moveCoin();