(function($, window, document, undefined) {


  // countdown timer
  $('#countdown').countdown('2018/3/5').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime('' +
      '<div class="timer-box  no-colon"><div class="timer-unit before-colon"><span class="clock-num">%-D</span> DAYS</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">%H</span> HOUR</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">%M</span> MINS</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">%S</span> SECS</div></div>'));
  }).on('finish.countdown', function() {
    var finished = '<div class="timer-box  no-colon"><div class="timer-unit before-colon"><span class="clock-num">00</span> DAYS</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">00</span> HOUR</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">00</span> MINS</div></div>' +
      '<div class="timer-box"><div class="timer-unit"><span class="clock-num">00</span> SECS</div></div>';
    $("#countdown").append(finished);
  });
  // $('.slideractive::before').animate({opacity: 0.2}, 'slow');

})(jQuery, window, document);


// scroll smoother
$('a.navtext').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 80
  }, 1000);
  return false;
});

// team overlay
$(".member .overlay").hover(function() {
  $(this).addClass("active")
}, function() {
  $(this).removeClass("active")
});
$(".member .overlay").on("tap", function() {
  $(this).addClass("active")
});
$(".member .img").on("tap", function() {
  $(this).addClass("active")
});

$(document).ready(function() {
  var header = $('.navbar-up');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      header.removeClass('navbar-up').addClass('navbar-down');
    } else {
      header.removeClass('navbar-down').addClass('navbar-up');
    }
  });
  var url = $("#authvideo").attr('src');
  $("#modal-video").on('hide.bs.modal', function() {
    $("#authvideo").attr('src', '');
  });
  $("#modal-video").on('show.bs.modal', function() {
    $("#authvideo").attr('src', url);
  });
});
