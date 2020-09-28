jQuery(document).ready(function () {
    $.simpleTicker($("#ticker-fade "),{
        speed:1000,
        delay:10000,
        easing:'swing',
        effectType: 'fade'
    });
})
$(document).ready(function() {
    $('.countdown').final_countdown({
        start: '1362139200',
        end: '1388461320',
        now: '1387461319',
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '6'
        }}, function() {
//alert('تخفیفات ویژه به مناسبت عید مبعث به پایان رسیده است');
    });
});

//random topic ticker
$(document).ready(function() {
$('#vertical-ticker').totemticker({
    row_height	:	'87px',
    next		:	'#ticker-next',
    previous	:	'#ticker-previous',
    stop		:	'#stop',
    start		:	'#start',
    max_items	: 	3,
    mousestop	:	true
});
});
//bootstrap tooltip fire
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});