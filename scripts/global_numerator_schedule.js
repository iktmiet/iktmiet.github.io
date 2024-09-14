NUMERATOR_SCHEDULE = `
<!-- Понедельник -->
<a id="MondayLinkAnchor"></a>

<div class="day-block">
    <div class="day-title">
        <span>ПОНЕДЕЛЬНИК</span>
        <div style="font-weight: 50;opacity:50%;">4 ПАРЫ</div>
    </div>

    <!-- ПАРА 1 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffffff;">1</strong>
        <i class="material-symbols-outlined time-icon">waving_hand</i>
        <strong>Введение в специальность</strong>
        <div class="indayblockdiv">
            <span>ауд. 4204 (м)</span>
            <span>9:00 - 10:20</span>
            <span>Бахтин А.</span>
        </div>
    </div>


    <!-- ПАРА 2 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffffff;">2</strong>
        <i class="material-symbols-outlined time-icon">architecture</i>
        <strong>Инж. и комп. графика</strong>
        <div class="indayblockdiv">
            <span>ауд. 1204 (м)</span>
            <span>10:30 - 11:50</span>
            <span>Гудкова Т.</span>
        </div>
    </div>



    <!-- ПЕРЕМЕНА -->
    <div class="break-item">
        <strong class="num-block" style="color: #ffffff;">
            <i class="material-symbols-outlined time-icon" style="vertical-align: middle;">schedule</i>
        </strong>

        <div>
            <b>Большой перерыв</b>
            <br>11:50 - 12:30
        </div>
    </div>


    <!-- ПАРА 3 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffffff;">3</strong>
        <i class="material-symbols-outlined time-icon">bolt</i>
        <strong>Теория электрических цепей</strong>
        <div class="indayblockdiv">
            <span>ауд. 1205 (м)</span>
            <span>12:30 - 13:50</span>
            <span>Самохин В.</span>
        </div>
    </div>


    <!-- ПАРА 4 -->
    <div class="class-item seminar">
        <strong class="num-block" style="color: #ffffff;">4</strong>
        <i class="material-symbols-outlined time-icon">schema</i>
        <strong>Дискретная математика</strong>
        <div class="indayblockdiv">
            <span>ауд. 3240</span>
            <span>14:00 - 15:20</span>
            <span>Жаркова Н.</span>
        </div>
    </div>
</div>





<!-- ВТОРНИК -->
<a id="TuesdayLinkAnchor"></a>

<div class="day-block">
    <div class="day-title">
        <span>ВТОРНИК</span>
        <div style="font-weight: 50;opacity:50%;">4 ПАРЫ</div>
    </div>

    <!-- ПАРА 1 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffffff;">1</strong>
        <i class="material-symbols-outlined time-icon">calculate</i>
        <strong>Спец. разделы мат. анализа</strong>
        <div class="indayblockdiv">
            <span>ауд. 1203 (м)</span>
            <span>9:00 - 10:20</span>
            <span>Саркисян Р.</span>
        </div>
    </div>

    <!-- ПАРА 2 -->
    <div class="class-item practice">
        <strong class="num-block" style="color: #ffffff;">2</strong>
        <i class="material-symbols-outlined time-icon">physical_therapy</i>
        <strong>И. | К. виды спорта</strong>
        <div class="indayblockdiv">
            <span>10:30 - 11:50</span>
        </div>
    </div>

    <!-- ПАРА 3 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffffff;">3</strong>
        <i class="material-symbols-outlined time-icon">calculate</i>
        <strong>Дискретная математика</strong>
        <div class="indayblockdiv">
            <span>ауд. 1205 (м)</span>
            <span>12:00 - 13:20</span>
            <span>Романова Е.</span>
        </div>
    </div>

    <!-- ПЕРЕМЕНА -->
    <div class="break-item">
        <strong class="num-block" style="color: #ffffff;">
            <i class="material-symbols-outlined time-icon" style="vertical-align: middle;">schedule</i>
        </strong>

        <div>
            <b>Большой перерыв</b>
            <br>13:20 - 14:00
        </div>
    </div>
    

    <!-- ПАРА 4 -->
    <div class="class-item seminar">
        <strong class="num-block" style="color: #ffffff;">4</strong>
        <i class="material-symbols-outlined time-icon">translate</i>
        <strong>Иностранный язык</strong>
        <div class="indayblockdiv">
            <span>ауд. 4301</span>
            <span>14:00 - 15:20</span>
            <span>Юрченко Е.</span>
        </div>
    </div>
</div>





<!-- СРЕДА -->
<a id="WednesdayLinkAnchor"></a>

<div class="day-block">
    <div class="day-title">
        <span>СРЕДА</span>
        <div style="font-weight: 50;opacity:50%;">ВУЦ + ФАКУЛЬТАТИВ</div>
    </div>

    <!-- ПАРА 1 -->
    <div class="class-item practice">
        <strong class="num-block" style="color: #ffffff;">1 - 6</strong>
        <i class="material-symbols-outlined time-icon">military_tech</i>
        <strong>Военная подготовка</strong>
        <div class="indayblockdiv">
            <span>9:00 - 18:20</span>
        </div>
    </div>

    <!-- ПАРА 7 -->
    <div class="class-item lecture">
        <strong class="num-block" style="color: #ffa900;">7</strong>
        <i class="material-symbols-outlined time-icon">terminal</i>
        <strong>[ФТД] Прога на Python</strong>
        <div class="indayblockdiv">
            <span>онлайн</span>
            <span>18:30 - 19:50</span>
            <span>Муратчаев С.</span>
        </div>
    </div>

    <div class="class-item lecture">
        <button 
            style="margin-bottom: 0px; margin-top: 0px" 
            id="ftd" 
            onclick="openLink('https://discord.com/invite/RCZb3J5F')">
                Ссылка на факультатив
        </button>
    </div>
</div>





<!-- ЧЕТВЕРГ -->
<a id="ThursdayLinkAnchor"></a>

<div class="day-block">
    <div class="day-title">
        <span>ЧЕТВЕРГ</span>
        <div style="font-weight: 50;opacity:50%;">4 ПАРЫ</div>
    </div>

    <!-- ПАРА 1 -->
    <div class="class-item practice">
        <strong class="num-block" style="color: #ffffff;">1</strong>
        <i class="material-symbols-outlined time-icon">physical_therapy</i>
        <strong>И. | К. виды спорта</strong>
        <div class="indayblockdiv">
            <span>9:00 - 10:20</span>
        </div>
    </div>

    <!-- ПАРА 2 -->
    <div class="class-item seminar">
        <strong class="num-block" style="color: #ffffff;">2</strong>
        <i class="material-symbols-outlined time-icon">psychology</i>
        <strong>Философия</strong>
        <div class="indayblockdiv">
            <span>ауд. 4204 (м)</span>
            <span>10:30 - 11:50</span>
            <span>Привалова И.</span>
        </div>
    </div>

    <!-- ПЕРЕМЕНА -->
    <div class="break-item">
        <strong class="num-block" style="color: #ffffff;">
            <i class="material-symbols-outlined time-icon" style="vertical-align: middle;">schedule</i>
        </strong>

        <div>
            <b>Большой перерыв</b>
            <br>11:50 - 12:30
        </div>
    </div>

    <!-- ПАРА 3-4 -->
    <div class="class-item lab">
        <strong class="num-block" style="color: #ffffff;">3 - 4</strong>
        <i class="material-symbols-outlined time-icon">waving_hand</i>
        <strong>Введение в специальность</strong>
        <div class="indayblockdiv">
            <span>ауд. 4231 (а)</span>
            <span>12:30 - 15:20</span>
            <span>Бессонов А.</span>
        </div>
    </div>
</div>




<!-- ПЯТНИЦА -->
<a id="FridayLinkAnchor"></a>

<div class="day-block">
    <div class="day-title">
        <span>ПЯТНИЦА</span>
        <div style="font-weight: 50;opacity:50%;">3 ПАРЫ</div>
    </div>

    <!-- ДИСТАНТ -->
    <!--
    <div class="break-item">
        <strong class="num-block" style="color: #FF9900;">
            <i class="material-symbols-outlined time-icon" style="vertical-align: middle;">info</i>
        </strong>

        <div>
            <b>6 сентября учимся дистанционно.</b>

            <br>
            <br>

            <button onclick="openAboutLink()">Подробнее...</button>
        </div>
    </div>
    -->

    <!-- ПАРА 1 -->
    <div class="class-item practice">
        <strong class="num-block" style="color: #ffffff;">1</strong>
    </div>

    <!-- ПАРА 2 -->
    <div class="class-item lab">
        <strong class="num-block" style="color: #ffffff;">2</strong>
        <i class="material-symbols-outlined time-icon">architecture</i>
        <strong>Инж. и комп. графика</strong>
        <div class="indayblockdiv">
            <span>ауд. 3105 (м)</span>
            <span>10:30 - 11:50</span>
            <span>Герасина Е.</span>
        </div>
    </div>

    <!-- ПАРА 3 -->
    <div class="class-item seminar">
        <strong class="num-block" style="color: #ffffff;">3</strong>
        <i class="material-symbols-outlined time-icon">calculate</i>
        <strong>Спец. разделы мат. анализа</strong>
        <div class="indayblockdiv">
            <span>ауд. 4305</span>
            <span>12:00 - 13:20</span>
            <span>Саркисян Р.</span>
        </div>
    </div>

    <!-- ПЕРЕМЕНА -->
    <!--
    <div class="break-item">
        <strong class="num-block" style="color: #ffffff;">
            <i class="material-symbols-outlined time-icon" style="vertical-align: middle;">schedule</i>
        </strong>

        <div>
            <b>Большой перерыв</b>
            <br>13:20 - 14:00
        </div>
    </div>
    -->

    <!-- ПАРА 4 -->
    <div class="class-item seminar">
        <strong class="num-block" style="color: #ffffff;">4</strong>
        <i class="material-symbols-outlined time-icon">explosion</i>
        <strong>Атомная физика, оптика</strong>
        <div class="indayblockdiv">
            <span>ауд. 4303</span>
            <span>14:00 - 15:20</span>
            <span>Морозова Т.</span>
        </div>
    </div>
</div>





<!-- СУББОТА -->
<a id="SaturdayLinkAnchor"></a>
<div class="day-block">
    <div class="weekend-title">СУББОТА</div>
    <div class="class-item lecture">В этот день пар нет.</div>
</div>





<!-- ВОСКРЕСЕНЬЕ -->
<a id="SundayLinkAnchor"></a>
<div class="day-block">
    <div class="weekend-title">ВОСКРЕСЕНЬЕ</div>
    <div class="class-item lecture">В этот день пар нет.</div>


    <div id="curWeek" style="display:none;"><b>Неделя ...</b></div>
</div>
`;