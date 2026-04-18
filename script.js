let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

// быстрее и плавнее
setInterval(nextSlide, 3000);

// AUDIO (авто)
let music = document.getElementById("bgmusic");
music.volume = 0.5;

// фикс автоплея
document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });
