function goToCurrentDay() {
    // ОПРЕДЕЛЕНИЕ ТЕКУЩЕГО ДНЯ НЕДЕЛИ
    var day = new Date().getDay();
    var anchorId;

    switch (day) {
        case 1:
            anchorId = 'MondayLinkAnchor';
            break;
        case 2:
            anchorId = 'TuesdayLinkAnchor';
            break;
        case 3:
            anchorId = 'WednesdayLinkAnchor';
            break;
        case 4:
            anchorId = 'ThursdayLinkAnchor';
            break;
        case 5:
            anchorId = 'FridayLinkAnchor';
            break;
        case 6:
            anchorId = 'SaturdayLinkAnchor';
            break;
        case 0:
            anchorId = 'SundayLinkAnchor';
            break;
    }

    document.getElementById(anchorId).scrollIntoView({ behavior: 'smooth' });
}