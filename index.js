(function($) {
  $.fn.countdown = function(options, callback) {

      thisElm = $(this);

      var settings = {
          'date': null,
          'format': null
      };

      if (options) {
          $.extend(settings, options);
      }

      function countdown() {
          var eventDate = Date.parse(settings.date) / 1000;
          var currentDate = Math.floor($.now() / 1000);

          if (eventDate <= currentDate) {
              callback.call(this);
              clearInterval(interval);
          }

          var seconds = eventDate - currentDate;
          var days = Math.floor(seconds / (60 * 60 * 24));
          seconds -= days * 60 * 60 * 24;

          var hours = Math.floor(seconds / (60 * 60));
          seconds -= hours * 60 * 60;

          var minutes = Math.floor(seconds / 60);
          seconds -= minutes * 60;

          if (settings.format == "on") {
              days = (String(days).length >= 2) ? days : "0" + days;
              hours = (String(hours).length >= 2) ? hours : "0" + hours;
              minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
              seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
          }

          thisElm.find(".days").text(days);
          thisElm.find(".hours").text(hours);
          thisElm.find(".minutes").text(minutes);
          thisElm.find(".seconds").text(seconds);
      }

      countdown();
      //update countdown every 1 sec
      interval = setInterval(countdown, 1000);
  };

})(jQuery);


$("#countdown").countdown({
      //The countdown end date
      date: "21 January 2024 12:00:00",
      format: "on"
  },

  function() {
      // This will run when the countdown ends
      
  });

