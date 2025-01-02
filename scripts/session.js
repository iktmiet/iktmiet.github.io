document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const day = today.getDate();
    const anchor = document.getElementById(day.toString());

    if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
    }

    const announcement = document.createElement("div");
    announcement.className = "announcement";
    announcement.innerHTML = "⚠️ В данном расписании используется <b style='color:coral;'>предварительная</b> информация, которая может в дальнейшем изменяться. Периодически проверяйте расписание.";

    announcement.addEventListener("click", () => {
        announcement.remove({ behavior: "smooth" });
    });

    document.body.appendChild(announcement);

    setTimeout(() => {
        if (announcement.parentNode) {
            announcement.remove();
        }
    }, 6000);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}