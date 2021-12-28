const notificationBtn = document.querySelector(".show-notification-btn");
const notificationList = document.querySelector(".notification-list");

const notificationStatus = ["info", "success", "failure"];

notificationBtn.addEventListener("click", () => {
    let random = (element) =>  Math.floor(Math.random()* element.length);
    console.log(random[notificationStatus])
    let li = document.createElement("li");
    let btn = document.createElement("button");
    li.setAttribute("class", `notification-item ${notificationStatus[random(notificationStatus)]}`);
    btn.textContent = "Message";
    li.appendChild(btn);
    notificationList.appendChild(li);

    setTimeout( ()=> li.remove() ,2500)
})





{/* <li class="notification-item success"><button>first message</button></li> */}