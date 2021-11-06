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

//display the current day
$("#currentDay").text(moment().format("MMMM Do YYYY"));
