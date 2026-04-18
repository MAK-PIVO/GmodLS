let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(nextSlide, 5000);

// AUDIO CONTROL
let music = document.getElementById("bgmusic");
let volumeSlider = document.getElementById("volumeSlider");

// начальная громкость
music.volume = volumeSlider.value;

// изменение громкости
volumeSlider.addEventListener("input", function () {
    music.volume = this.value;
});

// фикс для автоплея (GMod иногда блочит)
document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// GMod hooks
function GameDetails(servername) {
    document.querySelector("h1")?.innerText = servername;
}

function SetStatusChanged(status) {
    document.getElementById("status")?.innerText = status;
}
