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
   