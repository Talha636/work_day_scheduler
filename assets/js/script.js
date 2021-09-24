let currentDay = $('#currentDay');
let container = $('#container');

function displayTime() {
    let now = moment().format('dddd, MMM Do');
    currentDay.text(now);
}

function timeBlock() {
    for (i = 0; i < 24; i++) {
        let row = $('<div>').addClass('row');
        let hour = $('<div>').addClass('hour');
        let description = $('<div>').addClass('description');
        let save = $('<button>').addClass('saveBtn col-lg-1');
        row.append(hour, description, save);
        container.append(row);
    }
}
timeBlock();
displayTime();