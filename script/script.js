function clickMenu(x) {
    x.classList.toggle("change");

    // menu de sobreposição
    var overlayMenu = document.getElementById("overlayMenu");
    overlayMenu.style.display = (overlayMenu.style.display === "block") ? "none" : "block";
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });
