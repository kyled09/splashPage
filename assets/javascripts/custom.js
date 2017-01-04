// wrap with jquery $ selector
// ============================================
(function($) {

  // check if our JS was loaded
  logInitMsg();

  // once the window has loaded, do these things
  $(window).load(function() {
    // show message window is loaded
    logLoadedMsg();
  });

  // if the window is scrolling, do this
  $(window).scroll(function() {
    // show scrolling message
    //logScrollMsg();

    // back to top button
    showBackToTop();

    // fix secondary nav
    fixSecondaryNav();
  });

})(jQuery);


// logInitMsg()
// logs text to console
// ============================================
function logInitMsg() {
  console.log("hello World - JS is working");
}


// logLoadedMsg()
// logs text to console
// ============================================
function logLoadedMsg() {
  console.log("Window is loaded... ");
}


// logScrollMsg()
// logs text to console if the window scrolls
// ============================================
function logScrollMsg() {
  console.log("scrolling");
}


// showBackToTop()
// if the user has scrolled > 100px
// show the fixed back to top button
// ============================================
function showBackToTop() {
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
}


// fixSecondaryNav()
// if the user has scrolled to the secondary nav
// fix the nav to the top of the screen
// ============================================
function fixSecondaryNav() {
  // store nav selector as variable
  var secondaryNav = $(".navbar.secondaryPageNav");
  // get vertical position of secondary nav
  // use height of the carousel as vertical offset
  var secondaryNavPosition = $("#myCarousel").outerHeight(true);
  // get how far user has scrolled
  var windowScrolledSoFar = $(document).scrollTop();

  //console.log("distance from top: " + secondaryNavPosition);
  //console.log("scrolled: " + windowScrolledSoFar);

  // if the user has scrolled to, or passed the secondary nav
  // fix the menu
  // else the menu is static (default)
  if (windowScrolledSoFar >= secondaryNavPosition) {
    $(secondaryNav).attr("data-position","fixedNav");
    // add padding to top featurette to prevent
    // content from jumping "up"
    $(".row.topFeaturette").css("padding-top","100px");
  } else {
    $(secondaryNav).attr("data-position","staticNav");
    // remove padding from top featurette
    $(".row.topFeaturette").css("padding-top","0px");
  }
}