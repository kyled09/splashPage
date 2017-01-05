// logTools
// functions for logging information to console
// ============================================
var logTools = {

  // logTools.logMsg
  // logs text to console
  logMsg : function(logMessage) {
    console.log(logMessage);
  }, 

  // text for various messages
  textInitLoad : "dude, JS works",
  textWindowLoad : "teh window is loaded",
  textScrolling : "they see me scrolling..."

};



// page tools
// tools for adding functionality to page
// ============================================
var pageTools = {

  // pageTools.showBackToTop
  // ============================================
  // shows and hides the back to top button
  showBackToTop : function() {
    // set scroll point
    var scrollPoint = 100;

    // check if we've scrolled past our point
    if ($(document).scrollTop() >= scrollPoint) {
      // if we've scrolled passed our point
      // show the back to top button
      $("#backToTop").attr("data-visibility","showMe");
    } else {
      // if we have _NOT_ scrolled passed our point
      // hide the back to top button
      $("#backToTop").attr("data-visibility","hideMe");
    }
  }, 

  // pageTools.fixSecondaryNav
  // ============================================
  // fixes the secondary nav to the top of the screen
  // if the user has scrolled to or passed the nav
  fixSecondaryNav : function() {
    // store nav selector as variable
    var secondaryNav = $(".navbar.secondaryPageNav");
    // get vertical position of secondary nav
    // use height of the carousel as vertical offset
    var secondaryNavPosition = $("#myCarousel").outerHeight(true);
    // get how far user has scrolled
    var windowScrolledSoFar = $(document).scrollTop();

    // if the user has scrolled to, or passed the secondary nav
    // fix the menu
    // else the menu is static (default)
    if (windowScrolledSoFar >= secondaryNavPosition) {
      $(secondaryNav).attr("data-position","fixedNav");
      // add padding to top featurette to prevent
      // content from jumping "up"
      //$(".row.topFeaturette").css("padding-top","100px");
      $(".row.topFeaturette").addClass("hasPadding");
    } else {
      $(secondaryNav).attr("data-position","staticNav");
      // remove padding from top featurette
      //$(".row.topFeaturette").css("padding-top","0px");
      $(".row.topFeaturette").removeClass("hasPadding");
    }
  }

};



// wrap with jquery $ selector
// ============================================
(function($) {

  // check if our JS was loaded
  // on initial page load
  logTools.logMsg(logTools.textInitLoad);

  // once the window has loaded, 
  // these functions can be performed
  $(window).load(function() {
    // show message window is loaded
    logTools.logMsg(logTools.textWindowLoad);
  });

  // if the window is scrolling
  // run these functions
  $(window).scroll(function() {
    // show scrolling message
    logTools.logMsg(logTools.textScrolling);

    // show/hide back to top button
    pageTools.showBackToTop();

    // fix secondary nav to top of screen
    pageTools.fixSecondaryNav();
  });

})(jQuery);