const subject = new Map(
    [
        ['VUC', 'Военный учебный центр'],
        ['OIB', 'Основы информационной безопасности'],
        ['phy', 'Инд./Ком. виды спорта'],
        ['spr', 'Системное проектирование'],
        ['phc', 'Философия культуры'],
        ['ter', 'Теория вероятностей и мат. стат.'],
        ['cif', 'Цифровая обработка сигналов'],
        ['emp', 'Электромагнитные поля и волны'],
        ['ots', 'Общая теория связи'],
        ['com', 'Командная работа и деловые коммуникации'],
        ['ele', 'Электроника'],
        ['break', 'Перерыв']
    ]
);

const teacher = new Map(
    [
        ['Dush', 'Душкин А. В.'],
        ['Sldk', 'Солодков А. В.'],
        ['Piro', 'Пирогов А. И.'],
        ['Mihe', 'Михеева Л. Б.'],
        ['Pors', 'Порсев И. С.'],
        ['Babk', 'Бабкин Е. Е.'],
        ['Korn', 'Корнеев В. И.'],
        ['Hisa', 'Хисамов В. Т.'],
        ['Brce', 'Брче А. М.'],
        ['Cari', 'Царик К. А.'],
        ['Krug', 'Круглик Е. А.'],
        ['Kurb', 'Курбанбаева Д. М.']
        
    ]
);

const start = new Map(
    [
        [1, '09:00'],
        [2, '10:30'],
        [31, '12:00'],
        [32, '12:30'],
        [4, '14:00'],
        [5, '15:30'],
        [6, '17:00'],
        [7, '18:30'],
        [8, '20:00'],
    ]
);

const end = new Map(
    [
        [1, '10:20'],
        [2, '11:50'],
        [31, '13:20'],
        [32, '13:50'],
        [4, '15:20'],
        [5, '16:50'],
        [6, '18:20'],
        [7, '19:50'],
        [8, '21:20']
    ]
);

const customLinks = new Map([
    /*
    ['spr', [
        { url: 'https://example.com/spr', description: 'Материалы' },
        { url: 'https://drive.com/spr', description: 'Презентации' }
    ]],
    ['ter', []]
    */
]);

const lect = 'Лекция';
const exmp = 'Занятие';
const labw = 'Лабораторная';
const prac = 'Семинар';

document.addEventListener('DOMContentLoaded', function() {
    const dayTabs = document.querySelectorAll('.day-tabs button');
    const scheduleContainer = document.getElementById('schedule-container');
    const numeratorBtn = document.getElementById('numerator-btn');
    const denominatorBtn = document.getElementById('denominator-btn');
    const redDot = document.getElementById('red-dot');
    const headerInfo = document.querySelector('.header-info p');
    let isNumerator = true;
    let activeTab = null;

//                { name: subject.get(), teacher: teacher.get(), room: '', type: , time: start.get(), endTime: end.get() },

    const scheduleData = {
        numerator: {
            monday: [
                { name: subject.get('OIB'), teacher: teacher.get('Dush'), room: '1202', type: lect, time: start.get(1), endTime: end.get(1) },
                { name: subject.get('phy'), teacher: '', room: '5 корпус', type: exmp, time: start.get(2), endTime: end.get(2) },
                { name: subject.get('spr'), teacher: teacher.get('Sldk'), room: '4340л', type: labw, time: start.get(31), endTime: end.get(31) },
                //{ name: subject.get('break'), type: ''},
                { name: subject.get('spr'), teacher: teacher.get('Sldk'), room: '4340л', type: labw, time: start.get(4), endTime: end.get(4) }
            ],
            tuesday: [
                { name: subject.get('ter'), teacher: teacher.get('Mihe'), type: prac, room: '3305', time: start.get(1), endTime: end.get(1) },
                { name: subject.get('cif'), teacher: teacher.get('Sldk'), type: lect, room: '4203', time: start.get(2), endTime: end.get(2) },
                { name: subject.get('ter'), teacher: teacher.get('Mihe'), room: '1203', type: lect, time: start.get(31), endTime: end.get(31) },
                { name: subject.get('phc'), teacher: teacher.get('Piro'), room: '4203', type: lect, time: start.get(4), endTime: end.get(4) }
            ],
            wednesday: [
                { name: subject.get('emp'), teacher: teacher.get('Korn'), room: '4203', type: lect, time: start.get(1), endTime: end.get(1) },
                { name: subject.get('phy'), teacher: '', room: '5 корпус', type: exmp, time: start.get(2), endTime: end.get(2) },
                { name: subject.get('break'), type: ''},
                { name: subject.get('ots'), teacher: teacher.get('Babk'), room: '1201', type: lect, time: start.get(32), endTime: end.get(32) },
                { name: subject.get('ele'), teacher: teacher.get('Hisa'), room: '1205', type: lect, time: start.get(4), endTime: end.get(4) },
                { name: subject.get('ele'), teacher: teacher.get('Babk'), room: '3201л', type: prac, time: start.get(5), endTime: end.get(5) },
            ],
            thursday: [
                { name: subject.get('VUC'), teacher: teacher.get('УВЦ'), room: '', type: exmp, time: start.get(1), endTime: end.get(6) },
            ],
            friday: [
                { name: subject.get('com'), teacher: teacher.get('Brce'), room: '4203', type: lect, time: start.get(1), endTime: end.get(1) },
                { name: subject.get('phc'), teacher: teacher.get('Piro'), room: '3129', type: prac, time: start.get(2), endTime: end.get(2) },
                { name: '> [Ч-I]  ' + subject.get('emp'), teacher: teacher.get('Cari'), room: '4130л', type: labw, time: start.get(31), endTime: end.get(4) },
                { name: '> [Ч-II]  ' + subject.get('ots'), teacher: teacher.get('Krug'), room: '3202л', type: labw, time: start.get(31), endTime: end.get(4) }
            ],
            saturday: [],
        },
        denominator: {
            monday: [
                { name: subject.get('OIB'), teacher: teacher.get('Dush'), room: '1202', type: lect, time: start.get(1), endTime: end.get(1) },
                { name: subject.get('phy'), teacher: '', room: '5 корпус', type: exmp, time: start.get(2), endTime: end.get(2) },
                { name: subject.get('phc'), teacher: teacher.get('Piro'), room: '4326 А', type: prac, time: start.get(31), endTime: end.get(31) },
                //{ name: subject.get('break'), type: ''},
                { name: subject.get('ter'), teacher: teacher.get('Mihe'), room: '3220', time: start.get(4), endTime: end.get(4) }
            ],
            tuesday: [
                { name: subject.get('cif'), teacher: teacher.get('Sldk'), type: lect, room: '4203', time: start.get(2), endTime: end.get(2) },
                { name: subject.get('ter'), teacher: teacher.get('Mihe'), room: '1203', type: lect, time: start.get(31), endTime: end.get(31) },
                { name: subject.get('OIB'), teacher: teacher.get('Pors'), room: '3101', type: prac, time: start.get(4), endTime: end.get(4) },
                { name: '> [З-I]  ' + subject.get('cif'), teacher: teacher.get('Sldk'), room: '4340 Л', type: labw, time: start.get(5), endTime: end.get(6) },
                { name: '> [З-II] ' + subject.get('ele'), teacher: teacher.get('Babk'), room: '3201 Л', type: labw, time: start.get(5), endTime: end.get(6) }
            ],
            wednesday: [
                { name: subject.get('phy'), teacher: '', room: '5 корпус', type: exmp, time: start.get(2), endTime: end.get(2) },
                { name: subject.get('break'), type: ''},
                { name: subject.get('ots'), teacher: teacher.get('Babk'), room: '1201', type: lect, time: start.get(32), endTime: end.get(32) },
                { name: subject.get('ele'), teacher: teacher.get('Hisa'), room: '1205', type: lect, time: start.get(4), endTime: end.get(4) },
            ],
            thursday: [
                { name: subject.get('VUC'), teacher: teacher.get('УВЦ'), room: '', type: exmp, time: start.get(1), endTime: end.get(6) },
            ],
            friday: [
                { name: subject.get('com'), teacher: teacher.get('Brce'), room: '4203', type: lect, time: start.get(1), endTime: end.get(1) },
                { name: subject.get('com'), teacher: teacher.get('Brce'), room: '3107', type: prac, time: start.get(2), endTime: end.get(2) },
                { name: subject.get('emp'), teacher: teacher.get('Kurb'), room: '4304', type: prac, time: start.get(31), endTime: end.get(31) },
                { name: subject.get('spr'), teacher: teacher.get('Sldk'), room: '4340л', type: prac, time: start.get(4), endTime: end.get(4) }
            ],
            saturday: [],
        }
    };

      function calculateWeekInfo() {
        const startDate = new Date('2025-02-03T00:00:00'); // Начальная дата
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weekNumber = Math.ceil(diffDays / 7);
         const weekType = getWeekType(weekNumber);
         return { weekNumber, weekType }

      }

    function getWeekType(weekNumber) {
    const weekMod = (weekNumber - 1) % 4;
    switch (weekMod) {
        case 0: return '1-й числитель';
        case 1: return '1-й знаменатель';
        case 2: return '2-й числитель';
        case 3: return '2-й знаменатель';
        default: return '1-й числитель';
        }
    }


    function renderSchedule(day) {
        scheduleContainer.innerHTML = '';
        const currentSchedule = isNumerator ? scheduleData.numerator[day] : scheduleData.denominator[day];
   
        if (currentSchedule && currentSchedule.length > 0) {
            currentSchedule.forEach(item => {
                const scheduleItem = document.createElement('div');
                scheduleItem.classList.add('schedule-item');
              
                // Добавляем класс в зависимости от типа занятия
                 if (item.type) {
                    scheduleItem.classList.add(item.type.toLowerCase());
                 }
                 
                let content = `
                    <div class="schedule-item-info">
                        <p>${item.name}</p>
                `;
                if (item.teacher) {
                    content += `<p class="schedule-item-type">${item.teacher}</p>`;
                }
                if (item.room) {
                    content += `<p>→ ${item.room}</p>`;
                }
                content += `
                    </div>
                    <div class="schedule-item-time">
                        <p class="time">${item.time}<br><span class="time">${item.endTime}</span></p>
                    </div>
                `;
   
                scheduleItem.innerHTML = content;
                scheduleItem.addEventListener('click', () => openBottomSheet(item));
                scheduleContainer.appendChild(scheduleItem);
   
                if (item.type) {
                    const scheduleType = document.createElement('p');
                    scheduleType.classList.add('schedule-item-type');
                    scheduleType.textContent = item.type;
                    scheduleItem.querySelector('.schedule-item-info').prepend(scheduleType);
                }
   
                 if (item.name === subject.get('break')) {
                    scheduleItem.style.backgroundColor = '#DBC7FF';
                    scheduleItem.style.borderRadius = '10px';
                    scheduleItem.style.justifyContent = "center";
                    scheduleItem.style.textAlign = "left";
                    scheduleItem.style.display = "flex";
                    scheduleItem.style.paddingLeft = "25px";
                    scheduleItem.style.paddingRight = "0";
                    scheduleItem.querySelector('.schedule-item-time').remove();
                }
            });
        } else {
            scheduleContainer.innerHTML = '<p style="text-align: center; color: #b3b3b3;">Нет занятий</p>';
        }
    }

    function setActiveTab(element) {
        dayTabs.forEach(tab => {
            tab.classList.remove('active');
            tab.style.backgroundColor = '';
            tab.style.color = '';
        });
       element.classList.add('active');
        activeTab = element;
        renderSchedule(element.getAttribute('data-day'));
        highlightTabs();
    }

    function highlightTabs() {
        const currentDayIndex = new Date().getDay();
        let adjustedDayIndex = currentDayIndex === 0 ? 1 : currentDayIndex;
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

        dayTabs.forEach((tab, index) => {
            const dayKey = days[index];
            const hasClasses = isNumerator ? scheduleData.numerator[dayKey] : scheduleData.denominator[dayKey];
              tab.style.border = '2px solid transparent';
           if (tab === activeTab) {
             tab.style.backgroundColor = '#272936';
              tab.style.color = '#fff';
            } else if (!hasClasses || hasClasses.length === 0) {
                tab.style.backgroundColor = '#ffcccc';
                tab.style.color = '#000';
            } else if (hasClasses.length === 1) {
                tab.style.backgroundColor = '#ddccff';
                tab.style.color = '#000';
            }
             else {
                tab.style.backgroundColor = '#fff';
                tab.style.color = '#000';
            }
           if (index + 1 === adjustedDayIndex) {
              tab.style.border = '2px solid #0000ff';
              tab.style.boxSizing = 'border-box';
            }
        });
    }

    dayTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            setActiveTab(this);
          
        });
    });

    numeratorBtn.addEventListener('click', function() {
        if (!isNumerator) {
            isNumerator = true;
            numeratorBtn.classList.add('active');
            denominatorBtn.classList.remove('active');
             //redDot.style.right = isNumerator ? "10px" : "30px";
            renderSchedule(document.querySelector('.day-tabs button.active').getAttribute('data-day'));
            highlightTabs();
        }
    });

    denominatorBtn.addEventListener('click', function() {
        if (isNumerator) {
            isNumerator = false;
            denominatorBtn.classList.add('active');
            numeratorBtn.classList.remove('active');
             //redDot.style.right = isNumerator ? "10px" : "30px";
            renderSchedule(document.querySelector('.day-tabs button.active').getAttribute('data-day'));
             highlightTabs();
        }
    });
    function setInitialWeek(){
        const {weekNumber, weekType} = calculateWeekInfo();
        headerInfo.textContent = `📅 Неделя ${weekNumber} | ${weekType}`;
        isNumerator = weekType.includes('числитель')
         numeratorBtn.classList.toggle('active', isNumerator);
        denominatorBtn.classList.toggle('active', !isNumerator);
        //redDot.style.right = isNumerator ? "10px" : "30px";
     }

       const currentDayIndex = new Date().getDay();
        let initialDay = 'monday';
         if (currentDayIndex === 0) {
             initialDay = 'monday';
         } else {
           const days = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
           initialDay = days[currentDayIndex];
        }


    const initialTab = document.querySelector(`.day-tabs button[data-day="${initialDay}"]`)
    if(initialTab){
        setActiveTab(initialTab);
    }
     setInitialWeek();
    highlightTabs();
});




// Bottom Sheet Logic
function openBottomSheet(item) {
    const overlay = document.querySelector('.overlay');
    const bottomSheet = document.querySelector('.bottom-sheet');
    const title = document.querySelector('.bottom-sheet-title');
    const content = document.querySelector('.bottom-sheet-content');
    const googleBtn = document.querySelector('.google-search-btn');
    const studfilesBtn = document.querySelector('.studfiles-search-btn');

    const cleanName = item.name.replace(/^> \[.*?\]\s*/, '');

    title.textContent = cleanName;
    
    // Находим код предмета
    let subjectCode = '';
    for (const [code, name] of subject) {
        if (name === cleanName) {
            subjectCode = code;
            break;
        }
    }

    // Генерируем HTML для пользовательских ссылок
    let linksHTML = '';
    if (customLinks.has(subjectCode)) {
        linksHTML += '<div class="custom-links"><h4>Ресурсы:</h4>';
        customLinks.get(subjectCode).forEach(link => {
            linksHTML += `
                <a href="${link.url}" class="btn btn--secondary" 
                   target="_blank" style="margin: 5px">
                    ${link.description}
                </a>
            `;
        });
        linksHTML += '</div>';
    }

    content.innerHTML = `
        ${item.type ? `<p><strong>Тип:</strong> ${item.type}</p>` : ''}
        ${item.teacher ? `<p><strong>Преподаватель:</strong> ${item.teacher}</p>` : ''}
        ${item.room ? `<p><strong>Аудитория:</strong> ${item.room}</p>` : ''}
        ${item.time ? `<p><strong>Время:</strong> ${item.time} - ${item.endTime}</p>` : ''}
        ${item.type ? linksHTML : ''}
    `; 


    // Формируем URL для поиска
    const searchGoogleQuery = encodeURIComponent(`${item.name} учебные материалы`);
    googleBtn.href = `https://www.google.com/search?q=${searchGoogleQuery}`;
    const searchSFQuery = encodeURIComponent(`${item.name}`);
    studfilesBtn.href = `https://studfile.net/search/miet/?q=${searchSFQuery}`;

    // Показываем элементы
    overlay.style.display = 'block';
    bottomSheet.classList.add('active');
    
    // Добавляем обработчики закрытия
    overlay.addEventListener('click', closeBottomSheet);
    document.querySelector('.close-btn').addEventListener('click', closeBottomSheet);
}

function closeBottomSheet() {
    const overlay = document.querySelector('.overlay');
    const bottomSheet = document.querySelector('.bottom-sheet');
    
    overlay.style.display = 'none';
    bottomSheet.classList.remove('active');
    
    // Удаляем обработчики
    overlay.removeEventListener('click', closeBottomSheet);
    document.querySelector('.close-btn').removeEventListener('click', closeBottomSheet);
}