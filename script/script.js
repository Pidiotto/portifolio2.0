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

document.addEventListener('DOMContentLoaded', function () {
    // Selecione o botão pelo seletor de classe
    var btnContato = document.querySelector('.btn-r');

    // Adicione um evento de clique ao botão
    btnContato.addEventListener('click', function () {
        // Redirecione para a página de contato
        window.location.href = '/pages/contato.html';
    });
});
