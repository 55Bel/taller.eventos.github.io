document.getElementById('contenedor').addEventListener('click', function(evento) {
    evento.stopPropagation();
    alert('Hola! Soy el div');
});
