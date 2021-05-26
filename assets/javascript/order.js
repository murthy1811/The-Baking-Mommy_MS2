   
   

document.querySelector("#ordernow").addEventListener('click', function(){
  Swal.fire("Thank you for the Order", "We will reach you soon to confirm everything!", "success");
});
 

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
 

/* ---------------------------------------------------------------------emailjs for order form */


console.log("hello");
function sendMail(contactForm){
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
        }
    );
    
    return false;
}




// function enablelist(tickthis){
//   let fruitcake = document.getElementById('#fruit-cake-choice');
//   fruitcake.disabled= tickthis.click?false:true;
//   if(!fruitcake.disabled){
//       fruitcake.focus();
//   }
// }

