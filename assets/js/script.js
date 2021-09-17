// Called the moment function to imput on the top of the page
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Created this function to add a class of past, present or puture to time block selector based on the current hour in moments
function setColors() {
    var currentHour = moment().hours();

// .each was used to create a loop like its done in JS
    $(".time-block").each(function() {
        var idHour = parseInt($(this).attr("id"))

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

// This jQuery was createdt to save the key and value of the row clicked into local storage
$(".saveBtn").on("click", function() {
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();

    localStorage.setItem(key, value);

});

// This jQuerys were created to parse the data from local storage and apply it to each textbox
$("#9 .description").text(localStorage.getItem("9"));
$("#10 .description").text(localStorage.getItem("10"));
$("#11 .description").text(localStorage.getItem("11"));
$("#12 .description").text(localStorage.getItem("12"));
$("#13 .description").text(localStorage.getItem("13"));
$("#14 .description").text(localStorage.getItem("14"));
$("#15 .description").text(localStorage.getItem("15"));
$("#16 .description").text(localStorage.getItem("16"));
$("#17 .description").text(localStorage.getItem("17"));

// This function is called to automatically run the color hour function above
setColors();