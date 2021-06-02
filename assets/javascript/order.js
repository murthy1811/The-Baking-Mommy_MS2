
/* ---------------------------------------------------------------------google maps API */

    function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 13,
                center: {
                    lat: 57.7089, 
                    lng: 11.9746
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 57.7067117, 
                lng: 11.9669017
            }, {
                lat: 57.7208338,
                lng: 11.9514833
            }, {
                lat: 57.7109309,
                lng: 11.9456557
            }];

          let markers =  locations.map(function (location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            let markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
 

/* --------------------------------------------------------------------------------emailjs for order form */

$('#ordernow').prop('disabled', true);

let toValidate = jQuery('#name, #number, #emailaddress, #address'),
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
        jQuery("#ordernow").prop('disabled', false);
    } else {
        jQuery("#ordernow").prop('disabled', true);
    }
    
});

function sendMail(contactForm){

    Swal.fire("Thank you for the Order", "We will reach you soon to confirm everything!", "success");

    emailjs.send("service_xkqr1dk","template_m0virhs", {
        "from_name": contactForm.name.value,
        "from_phone": contactForm.number.value,         
        "cake": contactForm.cake.value,      
        "message": contactForm.message.value,
        "message2": contactForm.message2.value,
        "address": contactForm.address.value,
        "reply_to": contactForm.emailaddress.value
        
    })
    .then(
        function(response){
            console.log("SUCCESS", response);
            document.getElementById("orderform").reset();
           },
        function(error){
            console.log("FAILED", error);
        },
        
    );
    
    return false;
}

/* --------------------------------------------------------------------------------JS for selecting cake */

$('#fruit-cake-choice').prop('disabled', true);

document.getElementById("tickthis").addEventListener("click", enablelist);

function enablelist(){
    $('#fruit-cake-choice').prop('disabled', false);
    
}


$('#cream-cake-choice').prop('disabled', true);

document.getElementById("tickthis2").addEventListener("click", enablelist2);

function enablelist2(){
    $('#cream-cake-choice').prop('disabled', false);
}

$('#theme-choice').prop('disabled', true);

document.getElementById("tickthis3").addEventListener("click", enablelist3);

function enablelist3(){
    $('#theme-choice').prop('disabled', false);
}


/* --------------------------------------------------------------------------------JS for the display message */

// $(document).ready(function(){
//    $('#newpara').hide();   
// })


    // var element_input = document.getElementById('fruit-cake-choice');
    // var element_datalist = document.getElementById('fruit-cake-type');
    // var opSelected = element_datalist.querySelector(`[value="${element_input.value}"]`);
    // var id = opSelected.getAttribute('data-value');

let fruitcake = document.getElementById('fruit-cake-choice').value;
let creamcake = document.getElementById('cream-cake-choice').value;
let theme=document.getElementById('theme-choice').value;

document.getElementById('fruit-cake-choice').addEventListener('input', function () {
  document.getElementById('newpara').innerHTML = `Thank you for chosing the ${fruitcake} - ${creamcake} with ${theme}. Please fill out the form to the next. We will reach you
                                and
                                agree on what you want` ;
});

  

// $('#newpara').show('slow');