$('#currentDay').text(moment().format('hh:mm ddd, MMM do YYYY'));

function colors() {
    let hour = moment().hours();
    $('.time-block').each(function() {
        let hourNow = parseInt($(this).attr('id'));
        if (hourNow < hour) {
            $(this).addClass('past');
        } else if (hourNow === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
}




colors();
