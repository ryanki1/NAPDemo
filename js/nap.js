/*
    Anonymous self-executing Solar-powered Motor for NAP portal
    ****************
    * May / June 2013
    * Westhouse Consulting
    * Kieran Ryan
    * **************
*/
(function (window, $) {
  var self = this;
  /* private methods: start */
  gotoLandingPage = function () {
    $("#main,#mainFooter").removeClass("makeSeeThrough");
    $("#steps").addClass("makeSeeThrough");
  }
  gotoTGuidePage = function () {
    $("#steps").removeClass("makeSeeThrough");
    $("#main,#mainFooter").addClass("makeSeeThrough");
  }
  /* private methods: end */
  window.unfccc = window.unfccc || {};
  unfccc.nap = {
    /* public methods: start */
    /* called from NAP Central portal page load */
    Initialize: function () {
      /* Landing page setup */
      /* Mouseover for Megamenu: start */
      var submenu = $(".dropdown-toggle");
      submenu
          .on('mouseenter', function () {
            $(this).dropdown("toggle");
          });
      var parentMenuOptionAndSubmenu = $(".dropdown-toggle").parent();
      parentMenuOptionAndSubmenu
          .on('mouseleave', function () {
            $(this).dropdown("toggle");
          });
      /* Mouseover for Megamenu: end */
      $("#logo a").on('click', function () {
        self.gotoLandingPage();
      });
      $("#search").tooltip({
        placement: "left",
        title: "Search the website"
      });
      $("#navigation li").on('click', function () {
        if ($(this).find("a").text() != "Interactive NAP Technical Guidelines") {
          return;
        }
        self.gotoTGuidePage();
      });
      $('.carousel').carousel({
        interval: 4000
      });
      $('#mainFooter img').capty({
        animation: 'fixed',
        height: 30
      });
      /* Technical Guidelines setup */
      $(".accordion-toggle, .toggle-step").on('click', function (ele) {
        debugger;
        var htmlPointer = $(this).attr("data-content");
        var $panel = $("#contentShowpiece");
        $.get("resources/TGuide/" + htmlPointer + ".html", function (data) {
          debugger;
          $panel.html(data);
        });
        return true;
      });
    }
    /* public methods: end */
  }
}(window, jQuery))