function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById('my-video').play()
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";

    var video = document.getElementById('my-video');
    
    video.pause(); // Останавливаем видео
    video.currentTime = 0; // Переводим в начало
}   