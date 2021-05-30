
// JS for star ratings ( code credit to : https://www.markuptag.com/feedback-form-with-star-rating-html/)


$('.submit-rating').prop('disabled', true);

$("input[type=radio]").one("click", function() { $(".submit-rating").prop("disabled", false); });

let toValidate = jQuery('#choice'),
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
        jQuery(".submit-rating").prop('disabled', false);
    } else {
        jQuery(".submit-rating").prop('disabled', true);
    }
    
});

const btn = document.querySelector(".submit-rating");
const thanksmsg = document.querySelector(".thanks-msg");
const starRating = document.querySelector(".star-input");
// Success msg show/hide
btn.onclick = () => {
    starRating.style.display = "none";
    thanksmsg.style.display = "table";
    return false;
};