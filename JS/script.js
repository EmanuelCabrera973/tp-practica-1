
// contacto
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    this.reset();
});

// Mostrar textarea "Otro"
document.getElementById('como-enteraste').addEventListener('change', function() {
    const otroEspecifique = document.getElementById('otro-especifique');
    otroEspecifique.style.display = this.value === 'otro' ? 'block' : 'none';
});

