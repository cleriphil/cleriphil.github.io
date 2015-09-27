$(document).ready(function(){

  $(document).delegate('.toggle', 'click', function(){
    $(".menu").slideToggle(700);
  });

  $(window).resize(function() {
    var w = $(window).width();
    if(w > 480) {
      $(".left-nav").removeAttr('style');
    }
  });

  $(".navlink").click(function(e) {
    var num = this.id.match(/\d+/)[0];
    if( $(this).hasClass("active")) {
      e.preventDefault();
    } else {
      $(".navlink").removeClass("active");
      $(this).addClass("active");
      $(".sections").fadeOut('fast');
      $("#section_" + num).fadeIn('slow');
    }
  });




});
