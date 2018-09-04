$(document).ready(function() {
    
$(".hero-keep-reading").hide();

$( ".keep-reading" ).click(function() {
  $( ".hero-keep-reading" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

});