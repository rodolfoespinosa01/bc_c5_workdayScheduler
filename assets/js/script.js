
$(function () {

  var timeBlocks = $('.time-block');

  timeBlocks.each(function () {
    var timeBlock = $(this);

    // use id in html, split id to grab just the number
    var hour = parseInt(timeBlock.attr('id').split('-')[1]);

    // get current hour using dayJS and parse it into an integer
    var currentHour = parseInt(dayjs().hour());


    // set background based on current time
    if (hour < currentHour) {
      timeBlock.addClass('past');
    }
    if (hour === currentHour) {
      timeBlock.addClass('present');
    }
    if (hour > currentHour) {
      timeBlock.addClass('future');
    }

  });


  var btns = $('.time-block button');

  function storeEvent() {
    // grab the text area
    var btn = $(this);

    var textarea = btn.prev();
    var textareaValue = textarea.val();

    //get parent div
    var parentDiv = btn.parent();

    var id = parentDiv.attr('id');

    localStorage.setItem(id, textareaValue);

  };

  btns.click(storeEvent);

});





