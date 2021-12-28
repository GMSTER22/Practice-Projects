const notificationBtn = document.querySelector(".show-notification-btn");
const notificationList = document.querySelector(".notification-list");

const notificationStatus = ["info", "success", "failure"];
const message = ["Message One", "Message Two", "Message Three", "Message Four"];

notificationBtn.addEventListener("click", () => {
    let random = (element) =>  Math.floor(Math.random()* element.length);
    console.log(random[notificationStatus])
    let li = document.createElement("li");
    let btn = document.createElement("button");
    li.setAttribute("class", `notification-item ${notificationStatus[random(notificationStatus)]}`);
    btn.textContent = `${message[random(message)]}`;
    li.appendChild(btn);
    notificationList.appendChild(li);

    setTimeout( ()=> li.remove() ,3000)
})





{/* <li class="notification-item success"><button>first message</button></li> */}