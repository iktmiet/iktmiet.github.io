// Скрипт для определения текущей недели по московскому времени
function getCurrentWeek() {
    var startDate = new Date("2023-08-28"); // Дата начала отсчёта
    var currentDate = new Date(); // Текущая дата
    var moscowTimezoneOffset = 3; // UTC+3 (Московское время)

    // Получаем текущее московское время
    var currentMoscowTime = new Date(currentDate.getTime() + moscowTimezoneOffset * 60 * 60 * 1000);

    // Вычисляем недели от начальной даты в московском времени
    var weeksElapsed = Math.floor((currentMoscowTime - startDate) / (7 * 24 * 60 * 60 * 1000)) - 22;

    var typeOfWeek = 'Подождите...';
    if (currentDate.getDay() === 0) {
        weeksElapsed += 1;
    }

    if (weeksElapsed % 2 === 1) {
        typeOfWeek = 'Числитель';
    }
    else {
        typeOfWeek = 'Знаменатель';
    }

    // Обновляем текст элемента с номером недели
    if (currentDate.getDay() === 0) {
        document.getElementById("weekLegend").innerHTML = '<b style="color: cyan">Завтра ' + weeksElapsed + "-я неделя</b> | <b>" + typeOfWeek + "</b>";
    } else {    
        document.getElementById("weekLegend").textContent = "Сейчас: " + weeksElapsed + " неделя | " + typeOfWeek;
    }

    // Проверка четности и вызов changeSchedule
    changeSchedule('denominator');
}