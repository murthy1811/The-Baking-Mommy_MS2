$(document).ready(function(){
   $('.assortment').children().hide();
})

$("button").click(function() {
    
 $('.assortment').children().slideToggle('slow');
  
    
});
