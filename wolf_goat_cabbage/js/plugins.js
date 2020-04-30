$('document').ready(function() {
    $('footer').slideDown('1000', function() {
        $('.adm1').show(1000, () => {
            $('.adm2').show(1000, () => {
                $('.adm3').show(1000)
            })
        })
    });
});