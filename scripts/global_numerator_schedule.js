NUMERATOR_SCHEDULE = `
<!-- 1 ИЮНЯ -->
<a id="1"></a>
<div class="day-block">
    <div class="weekend-title">1 ИЮНЯ | СУББОТА</div>
    <div class="class-item lecture">В этот день ничего нет.</div>
</div>

<!-- 2 ИЮНЯ -->
<a id="2"></a>
<div class="day-block">
    <div class="weekend-title">2 ИЮНЯ | ВОСКРЕСЕНЬЕ</div>
    <div class="class-item lecture">В этот день ничего нет.</div>
</div>

<!-- 3 ИЮНЯ -->
<a id="3"></a>
<div class="day-block">
    <div class="day-title">
        <span>3 ИЮНЯ | ПОНЕДЕЛЬНИК</span>
    </div>

    <div class="class-item event">
        <i class="material-symbols-outlined time-icon" style="color:var(--event);">function</i>
        <strong>[3] Диф.уравн-я</strong>
        <span>3302</span>
        <span>12:30 - 13:50</span>
        <span>Прокофьев</span>
    </div>

    <div class="class-item event">
        <i class="material-symbols-outlined time-icon" style="color:var(--event);">devices</i>
        <strong>[4] КП по матану</strong>
        <span>3118</span>
        <span>14:00 - 15:20</span>
        <span>Егоров П. Е.</span>
    </div>
</div>

<!-- 4 ИЮНЯ -->
<a id="4"></a>
<div class="day-block">
    <div class="day-title">
        <span>4 ИЮНЯ | ВТОРНИК</span>
    </div>

    <!-- ПАРА 2 -->
    <div class="class-item lab">
        <i class="material-symbols-outlined time-icon">functions</i>
        <strong>[2] Мат. анализ (пересдачи КР)</strong>
        <span>3220</span>
        <span>10:30 - 11:50</span>
        <span>Погибельский А.А.</span>
    </div>

    <div class="break-item">
        <div style="padding-right: 15px;">
            <i class="material-symbols-outlined time-icon">schedule</i>
        </div>

        <div>
            <b>Окно (1 пара, 2 ч. 10 мин.)</b>
            <br>11:50 - 14:00
        </div>
    </div>

    <div class="class-item lab">
        <i class="material-symbols-outlined time-icon" style="color:var(--lab);">airwave</i>
        <strong>[4] Физика (пересдачи КР, долгов)</strong>
        <span>3240</span>
        <span>14:00 - 15:20</span>
        <span>Пересдачи КР и долгов</span>
    </div>

    <div class="break-item">
        <div style="padding-right: 15px;">
            <i class="material-symbols-outlined time-icon">schedule</i>
        </div>

        <div>
            <b>Окно (1 пара, 1 ч. 40 мин.)</b>
            <br>15:20 - 17:00
        </div>
    </div>

    <div class="class-item lab">
        <i class="material-symbols-outlined time-icon" style="color:var(--lab);">functions</i>
        <strong>[6] Дифференциальные ур-я</strong>
        <span>3240</span>
        <span>17:00 - 18:20</span>
        <span>Пересдачи КР (ИКТ-13)</span>
    </div>
</div>

<!-- 5 ИЮНЯ -->
<a id="5"></a>
<div class="day-block">
    <div class="day-title">
        <span>5 ИЮНЯ | СРЕДА</span>
    </div>

    <!-- ПАРА 1 -->
    <div class="class-item seminar" style="background:var(--seminar); color:#000000">
        <i class="material-symbols-outlined time-icon" style="color:#000000;">translate</i>
        <strong style="color:#000000;"><b>[1] История (устный зачёт)</b></strong>
        <span>4203</span>
        <span>09:00 - 10:20</span>
        <span><b>ДИФФ-ЫЙ ЗАЧЁТ</b></span>
    </div>

    <!-- ПАРА 4 -->
    <!--
    <div class="class-item event">
        <i class="material-symbols-outlined time-icon">history_edu</i>
        <strong>[4] История РФ (семинар)</strong>
        <span>3303</span>
        <span>14:00 - 15:20</span>
        <span>Лутошкин С.А.</span>
    </div>
    -->
</div>

<div class="day-block">
    <div class="weekend-title">6 ИЮНЯ | ЧЕТВЕРГ</div>

    <!-- УВЦ -->
    <div class="class-item practice">
        <i class="material-icons time-icon">military_tech</i>
        <strong>Военная подготовка</strong>
        <span>УВЦ 3</span>
        <span>09:00 - 18:20</span>
        <span>[6]</span>
    </div>
</div>

<!-- 7 ИЮНЯ -->
    <a id="7"></a>
    <div class="day-block">
        <div class="day-title">
            <span>7 ИЮНЯ | ПЯТНИЦА</span>
            <div style="font-weight: 50; font-size:14px;">2 ПАРЫ</div>
        </div>

        <!-- ПАРА 1 -->
        <div class="class-item lab">
            <i class="material-icons time-icon">laptop_windows</i>
            <strong>Практикум по C</strong>
            <span>3127</span>
            <span>09:00 - 11:50</span>
            <span>Доронина А. А.</span>
        </div>

        <!-- ЗАПИСЬ -->
        <div class="class-item lab">
            <button id="recordLRButton" style="margin-top:10px;" class="active-button" onclick="openRecordLink()">
                Запись на сдачу ЛР
            </button>
        </div>

        <div class="class-item lab">
            <i class="material-symbols-outlined time-icon" style="color:var(--lab);">functions</i>
            <strong>[1] Дифференциальные ур-я</strong>
            <span>3301</span>
            <span>09:00 - 10:20</span>
            <span>Пересдачи КР (ПМ-22)</span>
        </div>

        <div class="class-item lab">
            <i class="material-symbols-outlined time-icon" style="color:var(--lab);">functions</i>
            <strong>[3] Дифференциальные ур-я</strong>
            <span>3304</span>
            <span>12:00 / 12:30</span>
            <span>Пересдачи КР (ПМ-21)</span>
        </div>

        <!-- ПАРА 5 -->
        <div class="class-item practice" style="background:var(--practice); color:#000000">
            <i class="material-symbols-outlined time-icon" style="color:#000000;">translate</i>
            <strong style="color:#000000;"><b>Иностранный язык</b></strong>
            <span>3229/3347</span>
            <span>09:00 - 12:00</span>
            <span><b>КОНСУЛЬТАЦИЯ</b></span>
        </div>
    </div>
	
<!-- 8 ИЮНЯ -->
    <a id="8"></a>
    <div class="day-block">
        <div class="weekend-title">8 ИЮНЯ | СУББОТА</div>
        <div class="class-item lecture">В этот день ничего нет.</div>
    </div>
	
<!-- 9 ИЮНЯ -->
    <a id="9"></a>
    <div class="day-block">
        <div class="weekend-title">9 ИЮНЯ | ВОСКРЕСЕНЬЕ</div>
        <div class="class-item lecture">В этот день ничего нет.</div>
    </div>
	
<!-- 10 ИЮНЯ -->
    <a id="10"></a>
    <div class="day-block">
        <div class="weekend-title">10 ИЮНЯ | ПОНЕДЕЛЬНИК</div>
        <div class="class-item lecture" >Информации о парах в этот день нет.</div>
    </div>
	
<!-- 11 ИЮНЯ -->
    <a id="11"></a>
    <div class="day-block">
        <div class="weekend-title">11 ИЮНЯ | ВТОРНИК</div>
        <div class="class-item lecture" >Информации о парах в этот день нет.</div>
    </div>
	
<!-- 12 ИЮНЯ -->
    <a id="12"></a>
    <div class="day-block">
        <div class="weekend-title">12 ИЮНЯ | СРЕДА</div>
        <div class="class-item lecture" >Информации о парах в этот день нет.</div>
    </div>

<!-- 12 ИЮНЯ -->
    <a id="12"></a>
    <div class="day-block">
        <div class="weekend-title">12 ИЮНЯ | СРЕДА</div>
        <div class="class-item lecture">Информации о парах в этот день нет.</div>
    </div>
	
<!-- 13 ИЮНЯ -->
    <a id="13"></a>
    <div class="day-block">
        <div class="day-title" style="background:var(--seminar);color:black;">13 ИЮНЯ | ЧЕТВЕРГ</div>
        <!-- ПАРА 1 -->
        <div class="class-item seminar">
            <i class="material-icons time-icon">computer</i>
            <strong>Комп. пр-м по МА (зачёт)</strong>
            <span>12:00 - 14:00</span>
            <span>Егоров П. Е.</span>
        </div>
    </div>
	
<!-- 14 ИЮНЯ -->
    <a id="14"></a>
    <div class="day-block">
        <div class="weekend-title">14 ИЮНЯ | ПЯТНИЦА</div>
        <div class="class-item lecture" >Информации о парах в этот день нет.</div>
    </div>
	
<!-- 15 ИЮНЯ -->
    <a id="15"></a>
    <div class="day-block">
        <div class="weekend-title">15 ИЮНЯ | СУББОТА</div>
        <div class="class-item lecture">В этот день ничего нет.</div>
    </div>
	
<!-- 16 ИЮНЯ -->
	<a id="16"></a>
	<div class="day-block">
		<div class="weekend-title">16 ИЮНЯ | ВОСКРЕСЕНЬЕ</div>
		<div class="class-item lecture">В этот день ничего нет.</div>
	</div>
`;