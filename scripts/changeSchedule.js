// Скрипт для изменения расписания
function changeSchedule(scheduleType) {
    // Получаем элементы кнопок
    var numeratorBtn = document.getElementById("numeratorBtn");
    var denominatorBtn = document.getElementById("denominatorBtn");
    var scheduleContainer = document.getElementById("scheduleContainer");
    
    if (scheduleType === 'numerator') {
        // Изменения для Числителя
        numeratorBtn.classList.remove("inactive-button");
        numeratorBtn.classList.add("active-button");
        denominatorBtn.classList.remove("active-button");
        denominatorBtn.classList.add("inactive-button");
        
        scheduleContainer.innerHTML = numeratorSchedule;

    } else if (scheduleType === 'denominator') {
        // Изменения для Знаменателя
        numeratorBtn.classList.remove("active-button");
        numeratorBtn.classList.add("inactive-button");
        denominatorBtn.classList.remove("inactive-button");
        denominatorBtn.classList.add("active-button");

        scheduleContainer.innerHTML = denominatorSchedule;
    }
}