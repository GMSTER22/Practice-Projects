//function select to fill any cup and prior cups to that one
const smallCups = document.querySelectorAll(".small_cup");
const bigCup = document.querySelector(".big_cup");
const smallCupsFilled = document.getElementsByClassName("small_cup filled");

const fillCup = (cup) => {
    cup.classList.add("filled");
}

const emptyCup = (cup) => {
    cup.classList.remove("filled");
}


for (let i = 0; i < smallCups.length; i++) {
    smallCups[i].addEventListener("click", () => {
        for (let j = 0; j <= i; j++) {
            fillCup(smallCups[j]);

            for (let k = smallCups.length -1; k > i; k-- ) {
                emptyCup(smallCups[k]);
            }            
        }
        const percentage = (smallCupsFilled.length/smallCups.length) * 100;
        

        bigCup.style.backgroundImage = `linear-gradient(to top, #84bcf0 0, #84bcf0 ${percentage}%, transparent ${percentage}%)`;

        if (percentage < 100) {
            bigCup.children[0].style.display = "flex";
            bigCup.children[0].innerHTML = `${2 - (percentage/100)*2}L<br> remained`;
            bigCup.children[0].style.height = `${100 - percentage}%`;
        } else {
            bigCup.children[0].style.display = "none";
        }

        if (percentage === 100) {
            bigCup.children[1].textContent = `100%`;
        } else {
            bigCup.children[1].textContent = `${percentage}%`;
            bigCup.children[1].style.height = `${percentage}%`;
        }
        
    })
}