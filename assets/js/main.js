(function() {
    $('a[href^="#"]').on('click', function(event) {
  
          var target = $( $(this).attr('href') );
  
          if( target.length ) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 300);
          }
      });
  })();

var btn = $('#btn-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

