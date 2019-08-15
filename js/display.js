var index = 0;
$('#display').click(function() {
    if (index === 0) {
        $('.nav').css({ display: 'block' });
        index = 1;
    } else if (index === 1) {
        $('.nav').css({ display: 'none' });
        index = 0;
    }
});