// Se crea alerta al apretar Botón Enviar Mensaje
const enviarmensaje = document.getElementById('enviarmensaje');

enviarmensaje.addEventListener('click', function(){
  alert("Su mensaje se envió satisfactoriamente!")
});

// smooth scroll

$(document).ready(function(){
    // Añade smooth scroll a todos los links
    $("a").on('click', function(event) {
  
     
      if (this.hash !== "") {
        // Evita el comportamiento predeterminado de nuestro clic en el ancla
        event.preventDefault();
  
        // almacena Hash
        var hash = this.hash;
  
        // Usa animación de jQuery() para agregar efecto smooth page scroll
        // Especifica en numero los milisegundos que tarda el scroll para un area especifica
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function(){
     
          // Añade hash (#) a la URL cuando termine de desplazarse 
          window.location.hash = hash;
        });
      } 
    });
  });

  // Tooltip personalizado boton "enviarmensaje"
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
