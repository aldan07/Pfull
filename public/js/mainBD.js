
// Base De Datos:

$(document).ready(function(){
    $('#mytable').on('click', '.edit', function(){
        let id_webdelevop = $(this).data('id');
        let nombre = $(this).data('Nombre');
        let edad = $(this).data('Edad');
        let profesion = $(this).data('Profesion');
        $('#EditModal').modal('show');
        $('.id_webdelevop').val(id_webdelevop);
        $('.nombre').val(Nombre);
        $('.edad').val(Edad);
        $('.profesion').val(Profesion);
    })
    $('#mytable').on('click','.delete', function(){
        let id_webdelevop  = $(this).data('id');
        $('#DeleteModal').modal('show');
        $('.id_webdelevop2').val(id_webdelevop);
    });

});
