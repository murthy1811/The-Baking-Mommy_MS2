$(document).ready(function(){
   $('.assortment').parent().hide();
   
})

$(".hideit").click(function() {
    
$(this).parent().parent().next().slideToggle('slow');
    
});
