// Happy Birthday Bangaram ❤️

// Gift Button
const giftBtn = document.getElementById("giftBtn");
const message = document.getElementById("message");

if (giftBtn && message) {
    giftBtn.addEventListener("click", () => {
        message.style.display = "block";
        giftBtn.innerHTML = "Happy Birthday Bangaram ❤️";
        confettiEffect();
    });
}

// Confetti Effect
function confettiEffect() {
    for (let i = 0; i < 120; i++) {
        let heart = document.createElement("div");

        heart.innerHTML = ["💖","💕","🌸","✨","🎉"][Math.floor(Math.random()*5)];

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random()*20) + "px";
        heart.style.zIndex = "9999";
        heart.style.transition = "all 4s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "110vh";
            heart.style.transform = `rotate(${Math.random()*360}deg)`;
        },100);

        setTimeout(() => {
            heart.remove();
        },4500);
    }
}

// Smooth Fade
window.onload = () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "1.5s";
        document.body.style.opacity = "1";
    },100);
};

// Slideshow
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    },2500);
}

// Floating Hearts
const hearts = document.querySelector(".hearts");

function createHeart(){
    if(!hearts) return;

    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=(4+Math.random()*4)+"s";
    heart.style.fontSize=(18+Math.random()*20)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart,500);

// Popup
function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";

    const music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(()=>{});
    }
}

// Letter
function openLetter(){
    document.getElementById("secretLetter").style.display="block";
}

// Countdown
function updateCountdown() {

    const birthday = new Date("July 8, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
        "🎉 Happy Birthday Bangaram! ❤️";
        return;
    }

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("countdown").innerHTML =
    `🎂 ${days} Days ${hours} Hours ${minutes} Minutes Left`;
}

updateCountdown();
setInterval(updateCountdown,60000);

// Flowers
const flowers=document.querySelector(".flowers");

function createFlower(){

    if(!flowers) return;

    const flower=document.createElement("div");

    flower.classList.add("flower");
    flower.innerHTML="🌸";
    flower.style.left=Math.random()*100+"%";
    flower.style.animationDuration=(5+Math.random()*5)+"s";
    flower.style.fontSize=(18+Math.random()*18)+"px";

    flowers.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },10000);
}

setInterval(createFlower,900);

// Stars
const stars=document.querySelector(".stars");

function createStar(){

    if(!stars) return;

    const star=document.createElement("div");

    star.classList.add("star");
    star.innerHTML="✨";
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    star.style.animationDuration=(2+Math.random()*3)+"s";
    star.style.fontSize=(8+Math.random()*12)+"px";

    stars.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },5000);
}

setInterval(createStar,400);
