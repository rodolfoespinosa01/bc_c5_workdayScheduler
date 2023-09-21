

$(function () {


  var timeBlocks = $('.time-block');


  timeBlocks.each(function () {
    var timeBlock = $(this);


    var hour = timeBlock.attr('id').split('-')[1];

    var currentHour = dayjs().hour();
    var currentHourStringify = JSON.stringify(currentHour)


    if (timeBlocks < currentHourStringify) {
      timeBlocks.addClass('past');
    }
    if (timeBlocks === currentHourStringify) {
      timeBlocks.addClass('present');
    }
    if (timeBlocks > currentHourStringify) {
      timeBlocks.addClass('future');
    }

  })


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
    alert('your event has been saved in local storage successfully!');


  };

  btns.click(storeEvent);


});
