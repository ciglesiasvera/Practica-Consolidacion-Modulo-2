$(document).ready(function() {
    const form = $('#contact-form');
    
    form.on('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado correctamente');
        form[0].reset();
    });

    $('.project-image').on('click', function() {
        const detailText = $(this).data('text');
        $('#projectDetailText').text(detailText);
        $('#projectModal').modal('show');
    });

    $('.project-image').hover(
        function() {
            $(this).css('opacity', '0.8');
        }, 
        function() {
            $(this).css('opacity', '1');
        }
    );

    // Cambiar color al hacer clic en "Sobre Mí"
    $('#about').click(function() {
        $(this).css({"background":"grey", "color": "white"});
    }).mouseleave(function(){
        $(this).css({"background":"white","color":"black"});
    })

    // Mostrar detalles del proyecto al hacer clic en la imagen
    $('.project-image').on('click', function() {
        var projectDetail = $(this).closest('.project-card').find('.project-detail');
        var newText = $(this).closest('.card-text').find('.card-text');
        projectDetail.text(newText).toggle();
    });

    // Mostrar experiencia al pasar el mouse sobre una habilidad
    $('#skills li').hover(function() {
        var experience = $(this).data('experience');
        $(this).text($(this).text() + ' (' + experience + ' años de experiencia)');
    }, function() {
        $(this).text($(this).text().split(' (')[0]);
    });

    // Scroll suave para la navegación
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Mostrar mensaje al hacer clic en un proyecto
    $('.project-card').on('click', function() {
        $(this).find('.card-text').text('¡Has hecho clic en este proyecto!');
    });

    // Alternar contenido de habilidades
    $('#skills ul li').on('click', function() {
        $(this).toggleClass('selected');
        alert('Has seleccionado la habilidad: ' + $(this).text());
    });
});

// Hover para mostrar años de experiencia
document.addEventListener("DOMContentLoaded", function() {
    const skillElements = document.querySelectorAll("#skills li");

    skillElements.forEach(skill => {
        skill.addEventListener("mouseenter", function() {
            const experience = skill.getAttribute("data-experience");
            skill.textContent;
        });

        skill.addEventListener("mouseleave", function() {
            const originalText = skill.textContent.split(" (")[0];
            skill.textContent = originalText;
        });
    });

    // Mostrar información de la imagen en el hover
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const text = this.getAttribute('data-text');
            const detailElement = this.parentElement.querySelector('.project-detail');
            detailElement.textContent = text;
        });
        
        image.addEventListener('mouseleave', function() {
            const detailElement = this.parentElement.querySelector('.project-detail');
            detailElement.textContent = '';
        });
    });
});
