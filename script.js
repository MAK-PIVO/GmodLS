let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

// быстрее переключение
setInterval(nextSlide, 3000);

// AUDIO
let music = document.getElementById("bgmusic");
let volumeSlider = document.getElementById("volumeSlider");

// стартовая громкость
music.volume = volumeSlider.value;

// изменение громкости
volumeSlider.addEventListener("input", function () {
    music.volume = this.value;
});

// фикс автоплея
document.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// GMod hooks (если понадобятся)
function GameDetails(servername) {
    console.log(servername);
}

function SetStatusChanged(status) {
    console.log(status);
}
