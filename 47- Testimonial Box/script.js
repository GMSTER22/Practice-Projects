const timer = document.querySelector(".timer");
const testimony = document.querySelector(".testimonial__text");
const img = document.querySelector(".testimonial__author img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");

const testimonials = [
    ["This guy is an amazing frontend developer that delivered the task exactly how ew need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy whith your project. I will surely work again with him.", "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Marylin Moliere", "Stylist" ],
    ["The options to the GoogleStrategy constructor must include a clientID and clientSecret, the values of which are set to the client ID and secret that were obtained when registering your application. A callbackURL must also be included. Google will redirect users to this location after they have authenticated. The path of this URL must match the route defined below.", "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Jackie Chan", "Web Developer" ],
    ["Linking social accounts to a user record is recommended, as it allows users to link multiple social accounts from other providers in the event that they stop using Google.", "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Bella Paris", "Web Designer" ],
    ["Internally, Sign In With Google is implemented using OpenID Connect. As such, the strategy configuration is able to make use of additional options and functionality provided by the base OpenID Connect strategy.", "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "Ying Gwon Chu", "Pilot" ]
];

const duration = +timer.getAttribute("data-timerInSeconds");
timer.style.animationDuration = `${duration}s`;

let i = 0;

function slideTestimonials() {

    testimony.textContent = testimonials[i][0];
    img.src = testimonials[i][1];
    author.textContent = testimonials[i][2];
    job.textContent = testimonials[i][3]; 

    i < testimonials.length - 1 ? i++ : i = 0;
}

slideTestimonials();


setInterval(slideTestimonials, duration*1000);