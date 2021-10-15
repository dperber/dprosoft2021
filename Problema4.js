var settings = {
    "url": "http://localhost:5000/api/Data",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });