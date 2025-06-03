document.addEventListener('DOMContentLoaded', function() {
    var bloco = document.querySelector('.bloco2');
    if (bloco) {
        bloco.addEventListener('click', function() {
            window.location.href = 'pages/dragoes.html';
        });
    }
    var bloco = document.querySelector('.bloco1');
    if (bloco) {
        bloco.addEventListener('click', function() {
            window.location.href = 'pages/personagens.html';
        });
    }

    var voltarInicio = document.getElementById('voltar-inicio');
    if (voltarInicio) {
        voltarInicio.addEventListener('click', function(e) {
            if (window.history.length > 1) {
                e.preventDefault();
                window.history.back();
            }
        });
    }
});