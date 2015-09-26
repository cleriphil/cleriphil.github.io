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

});
