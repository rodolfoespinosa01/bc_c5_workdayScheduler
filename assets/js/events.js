function showEvents() {

  // grab all events by key
  var getStorage9 = localStorage.getItem('hour-9') || [];
  var getStorage10 = localStorage.getItem('hour-10') || [];
  var getStorage11 = localStorage.getItem('hour-11') || [];
  var getStorage12 = localStorage.getItem('hour-12') || [];
  var getStorage1 = localStorage.getItem('hour-13') || [];
  var getStorage2 = localStorage.getItem('hour-14') || [];
  var getStorage3 = localStorage.getItem('hour-15') || [];
  var getStorage4 = localStorage.getItem('hour-16') || [];
  var getStorage5 = localStorage.getItem('hour-17') || [];

  // set text to each text area
  var hour9 = document.querySelector('#hour9Text');
  hour9.innerText = getStorage9;

  var hour10 = document.querySelector('#hour10Text');
  hour10.innerText = getStorage10;

  var hour11 = document.querySelector('#hour11Text');
  hour11.innerText = getStorage11;

  var hour12 = document.querySelector('#hour12Text');
  hour12.innerText = getStorage12;

  var hour1 = document.querySelector('#hour1Text');
  hour1.innerText = getStorage1;

  var hour2 = document.querySelector('#hour2Text');
  hour2.innerText = getStorage2;

  var hour3 = document.querySelector('#hour3Text');
  hour3.innerText = getStorage3;

  var hour4 = document.querySelector('#hour4Text');
  hour4.innerText = getStorage4;

  var hour5 = document.querySelector('#hour5Text');
  hour5.innerText = getStorage5;


}
showEvents();