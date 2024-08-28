// Скрипт для определения текущей недели по московскому времени
function getCurrentWeek() {
    var startDate = new Date("2024-09-02"); // Дата начала отсчёта
    var currentDate = new Date(); // Текущая дата
    var moscowTimezoneOffset = 3; // UTC+3 (Московское время)

    // Получаем текущее московское время
    var currentMoscowTime = new Date(currentDate.getTime() + moscowTimezoneOffset * 60 * 60 * 1000);

    // Вычисляем количество недель от начальной даты в московском времени
    var weeksElapsed = Math.floor((currentMoscowTime - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;

    document.getElementById("numeratorCircle").style.display = "none";
    document.getElementById("denominatorCircle").style.display = "none";

    // Коррекция недели в воскресенье
    if (currentDate.getDay() === 0) {
        weeksElapsed += 1;
    }

    // Определение типа недели по остатку от деления на 4
    var weekType;
    switch (weeksElapsed % 4) {
        case 1:
            weekType = 'Числитель [1]';
            document.getElementById("numeratorCircle").style.display = 'block';
            break;
        case 2:
            weekType = 'Знаменатель [1]';
            document.getElementById("denominatorCircle").style.display = 'block';
            break;
        case 3:
            weekType = 'Числитель [2]';
            document.getElementById("numeratorCircle").style.display = 'block';
            break;
        case 0:
            weekType = 'Знаменатель [2]';
            document.getElementById("denominatorCircle").style.display = 'block';
            break;
    }

    // Обновляем текст элемента с номером недели
    if (currentDate.getDay() === 0) {
        document.getElementById("weekLegend").innerHTML = '<b style="color: cyan">Завтра ' + weeksElapsed + "-я неделя</b> | <b>" + weekType + "</b>";
    } else {    
        document.getElementById("weekLegend").textContent = "📆 " + weeksElapsed + " неделя | " + weekType;
    }

    // Вызов changeSchedule в зависимости от типа недели
    if (weekType.includes('Числитель')) {
        changeSchedule('numerator');
    } else {
        changeSchedule('denominator');
    }
}