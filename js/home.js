$(document).ready(function(){
$(".begin").on('click', function(event) {
$("html,body").animate({scrollTop:$("#one").offset().top},500);});
});