$(document).ready(function() {

  var responsiveWidth = 900;
  var responsiveHeight = 550;
  var windowWidth = $(window).innerWidth();
  var windowHeight = $(window).innerHeight(); 
  var section1 = $('#section1');
  var section2 = $('#section2');
  var section3 = $('#section3');
  var popover = $('[data-toggle="popover"]');
  var tooltip = $('[data-toggle="tooltip"]');

  function isResponsive() {
    if (windowWidth < responsiveWidth || windowHeight < responsiveHeight) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function startBounce(section) {
    var delay = .3;
    var animation = section.find('.animation');
    var animationTop = section.find('.animation-top');
    var animationBottom = section.find('.animation-bottom');
    for (var i = 0; i < animation.length; i++) {
      animation.eq(i).css('animation-delay', `${delay}s`);
      delay += .3;
    }
    section.removeClass('invisible');
    animationTop.addClass('animated bounceInDown');
    animationBottom.addClass('animated bounceInUp');
  }

  function resetBounce(section) {
    section.find('.animation-top').removeClass('animated bounceInDown');
    section.find('.animation-bottom').removeClass('animated bounceInUp');
  }

  $('#fullpage').fullpage({
    menu: '#menu',
    // verticalCentered: false,
    fitToSection: false,
    bigSectionsDestination: 'top',  // В ожидании smallSectionsDestination...
    responsiveWidth: responsiveWidth,
    responsiveHeight: responsiveHeight,
    afterRender: function() {
      
      new ClipboardJS('#btn-copy-email');
     
      popover.popover().click(function(e) {
        e.preventDefault();
        setTimeout(function () {
          popover.popover('hide');
        }, 1000);
      });

      tooltip.tooltip({'html': true});
      
      $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
      });
      
      if (!isResponsive()) {
        $('#menu').find('li').addClass('hvr-icon-float');
        $('#menu').find('i').addClass('hvr-icon');
        $('#img-me').addClass('hvr-grow');
      }
      else {
        var padding = 1.5*$('#menu').outerHeight(); 
        $('.section')
          .css({'padding-top': padding})
          .removeClass('invisible')
          .addClass('animated fadeIn slow');
      }
    },
    afterLoad: function(origin, destination) { 
      if (!isResponsive()) {
        var index = origin.index;
        var anchor = destination.anchor;
        if (index == 0 && anchor == 'обо-мне') {
          startBounce(section1);
        }
      }
    },
    onLeave: function(origin, destination) {
      if (!isResponsive()) {
        var index = origin.index;
        var anchor = destination.anchor;
        if (index == 0) {
          if (anchor == 'образование') {
            startBounce(section2);
          }
          else if (anchor == 'научная-деятельность') {
            startBounce(section3);
          }
          resetBounce(section1);
        }
        else if (index == 1) {
          if (anchor == 'обо-мне') {
            startBounce(section1);
          }
          else if (anchor == 'научная-деятельность') {
            startBounce(section3);
          }
          resetBounce(section2);
        }
        else if (index == 2) {
          if (anchor == 'обо-мне') {
            startBounce(section1);
          }
          else if (anchor == 'образование') {
            startBounce(section2);
          }
          resetBounce(section3);
        }
      }
    }
  });

});