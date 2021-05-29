$('#subscribe').prop('disabled', true);

let toValidate = jQuery('#mailbox'),
    valid = false;
toValidate.change(function () {
    if (jQuery(this).val().length > 0) {
        jQuery(this).data('valid', true);
    } else {
        jQuery(this).data('valid', false);
    }
    toValidate.each(function () {
        if (jQuery(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        jQuery("#subscribe").prop('disabled', false);
    } else {
        jQuery("#subscribe").prop('disabled', true);
    }
    
});



    document.getElementById("subscribe").addEventListener("click", sweetalert);
    function sweetalert(){

    Swal.fire("Thank you for the subscription", "Happy Eating!");
    let clear = document.getElementById('mailbox');
    clear.value='';
    $('#subscribe').prop('disabled', true);
               
    return false;
     }

  