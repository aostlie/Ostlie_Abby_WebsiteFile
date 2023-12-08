$(document).ready(function(){
    $("#menu").hover(function(){
      $("#show-menu").slideDown("slow");
    });
    $("#gc-menu").hover(function(){
        $("#show-gc-menu").slideDown("slow");
      });
      $("#about-menu").hover(function(){
        $("#show-about-menu").slideDown("slow");
      });
      $("#reservation-menu").hover(function(){
        $("#show-reservation-menu").slideDown("slow");
      });

/*Slide Up*/
    $(".menu-item").click(function(){
        $("#show-menu").slideUp("slow");
        $("#show-gc-menu").slideUp("slow");
        $("#show-about-menu").slideUp("slow");
        $("#show-reservation-menu").slideUp("slow");
    })

});