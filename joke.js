// API для обхода CORS и получения данных в формате JSON
var apiUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.anekdot.ru/rss/export_j.xml');

// Загрузка данных
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Извлечение анекдотов из RSS
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        var items = xmlDoc.getElementsByTagName('item');
        
        // Выбор случайного анекдота
        var randomIndex = Math.floor(Math.random() * items.length);
        var randomAnekdot = items[randomIndex].getElementsByTagName('description')[0].textContent;

        // Отображение текста анекдота
        document.getElementById('joke-text').innerHTML = randomAnekdot;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('joke-text').textContent = 'Не удалось загрузить анекдот';
    });