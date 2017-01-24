$(document).ready(function() {
  var w = $(window);

  if (w.scrollTop() > 0) {
    $('nav').addClass('active-nav');
  }

  w.scroll(function() {
    if (w.scrollTop() > 0) {
      $('nav').addClass('active-nav');
    }
    else {
      $('nav').removeClass('active-nav');
    }
  });

  $('#burger').click(function(e) {
    $(e.currentTarget).toggleClass("close");
    $('.d-f-wrapper ul').toggleClass("show");
    $('.d-f-wrapper').toggleClass("menu-open");
  });


  $('.top-link').each(function(i, el) {
    $(el).click(function(e) {
      e.preventDefault();
      $.scrollTo(0, 500);
    })
  });

  function _easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }

  /**
   * Scroll to the top of the page, for scrollDuration ms, calling cb when done.
   *
   * @param {int} offset - the offset from the top of the document to scroll to
   * @param {int} scrollDuration - how long the scroll should take, in ms
   * @param {function} cb - callback to call when the scroll is complete
   */
  $.scrollTo = function(offset, scrollDuration, cb) {
    cb = cb || function() {};
    var startT = Date.now();
    var startY = window.scrollY;
    var distanceToTravel = offset - startY;
    var percentComplete = 0;
    var elapsed;
    var scrollToPercent;
    var scrollToY;

    function step() {
      setTimeout(function() {
        if (percentComplete < 1) {
          elapsed = Date.now() - startT;
          percentComplete = elapsed / scrollDuration;
          scrollToPercent = _easeInOutQuad(percentComplete, elapsed, 0, 1, scrollDuration);
          scrollToY = scrollToPercent * distanceToTravel + startY;
          window.scrollTo(0, scrollToY);
          requestAnimationFrame(step);
        } else {
          window.scrollTo(0, offset);
          cb();
        }
      }, 15);
    }

    step();
  };


});
