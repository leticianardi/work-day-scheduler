$(".saveBtn").on("click", function () {
  //grab the values in the textarea and our time
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //save the value and time into local storage
  localStorage.setItem(time, value);
});


//display the current day
$("#currentDay").text(moment().format("MMMM Do YYYY"));
