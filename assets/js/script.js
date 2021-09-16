var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
// console.log(today)

//  Compare currentHour to hour in the Time block. if the hour is past add a class of past. if the current hour is equal to our block hour add a class of present. if the currentHour is greater than the block hour add a class of future
function setColors() {
    var currentHour = moment().hours();
    // Need to creat a loop that will target each input
    $(".time-block").each(function() {
        var idHour = parseInt($(this).attr("id"))
        // console.log(idHour)

        if(idHour < currentHour) {
            $(this).addClass("past")
        } else if(idHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
};

$(".saveBtn").on("click", function() {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();

    localStorage.setItem(key, value);

});

$("#9 .description").text(localStorage.getItem("9"));
$("#10 .description").text(localStorage.getItem("10"));
$("#11 .description").text(localStorage.getItem("11"));
$("#12 .description").text(localStorage.getItem("12"));
$("#13 .description").text(localStorage.getItem("13"));
$("#14 .description").text(localStorage.getItem("14"));
$("#15 .description").text(localStorage.getItem("15"));
$("#16 .description").text(localStorage.getItem("16"));
$("#17 .description").text(localStorage.getItem("17"));
// Need a function that will take the input of the table data and work with the button to save to local storage
// Need a fucttion that will look at loocal storge and imput any saved data after the page refreshes
setColors();