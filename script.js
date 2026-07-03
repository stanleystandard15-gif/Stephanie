

const message = `Happy Birthday, Stephanie.

Today isn't just another day on the calendar.
It's a reminder that someone truly special came into this world.

Life has a way of changing people and taking them in different directions,
yet some people remain unforgettable.

I sincerely hope this new year brings you peace,
beautiful memories,
good health,
endless laughter,
and the kind of happiness that stays.

May every dream you're holding quietly in your heart
find its way into reality.

No matter where life takes us,
I will always wish the very best for you.

Happy Birthday, Stephanie.

May today be as beautiful as your smile. ❤️`;

const textElement = document.getElementById("text");
let index = 0;

function typeWriter() {

    if (index < message.length) {

        textElement.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}

window.onload = () => {

    typeWriter();

    createStars();

};



const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener("click", () => {

    document.querySelector(".message").innerHTML = `

        <p style="font-size:1.3rem;line-height:2;text-align:center;">

        Some people become memories.<br><br>

        Some become lessons.<br><br>

        And a very few become both.<br><br>

        Thank you for once being part of my story.<br><br>

        No matter what life brings,
        I genuinely hope it gives you happiness,
        peace,
        success,
        and people who love you sincerely.<br><br>

        Happy Birthday, Stephanie. ❤️

        </p>

    `;

    moreBtn.innerText = "❤️ Always Wishing You the Best";

    moreBtn.disabled = true;

});

// ==========================
// Stars Animation
// ==========================

const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

function createStars() {

    stars = [];

    const numberOfStars = window.innerWidth < 768 ? 100 : 180;

    for (let i = 0; i < numberOfStars; i++) {

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            radius: Math.random() * 2,

            speed: Math.random() * 0.5 + 0.2

        });

    }

    animateStars();

}

function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {

            star.y = 0;

            star.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}