$(".saveBtn").on("click", function () {
  //grab the values in the textarea and our time
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //save the value and time into local storage
  localStorage.setItem(time, value);
});


//check matching of current hour and the hour in the block and change color
function colors() {
  //get the current hour
  var momentHour = moment().hours();

  //loop to check blockHour and momentHour
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));

    //if statement to check againt the block hour and moment hour

    if (momentHour > blockHour) {
      $(this).addClass("past");
    } else if (momentHour === blockHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

colors();


//get local storage and show its content
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));


//display the current day
$("#currentDay").text(moment().format("MMMM Do YYYY"));
$("#dayOfWeek").text(moment().format('dddd'));  