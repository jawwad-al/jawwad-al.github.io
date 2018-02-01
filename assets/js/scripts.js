/*!
 * RoleCoin
 * RoleCoin
 * 
 * @author RoleCoin
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
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
