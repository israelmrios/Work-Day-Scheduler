var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
console.log(today)

$('.saveBtn').on('click', function(){
    var value= $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');

    localStorage.setItem(key, value);

})

function setColors() {
    var currentHour = moment().hours();
    // Need to creat a loop that will target each input
    $('.time-block').each(function(){
        var idHour = parseInt($(this).attr('id'))
        console.log(idHour)

    if(idHour < currentHour) {
        $(this).addClass('past')
    }else if(idHour === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
    } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }
})

//  Compare currentHour to hour in the Time block. if the hour is past add a class of past. if the current hour is equal to our block hour add a class of present. if the currentHour is greater than the block hour add a class of future
}

$('#9 .description').val(localStorage.getItem('9'))
// Need a function that will take the input of the table data and work with the button to save to local storage
// Need a fucttion that will look at loocal storge and imput any saved data after the page refreshes
setColors();