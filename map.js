console.log("puppies")

L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);

// on click, generate form in lightbox
// enter data into lightbox form(which sends json to the database)
// pin falls on map
// user can click on pin and see the data pertaining to their incident


var click = document.getElementById('click')
map.on('click', function(e) {
	var latlng = [e.latlng.lng, e.latlng.lat]
	$.featherlight($('#example'));
	});

function getData(){
	here = document.getElementById('click')
	console.log(here)
	here.bindPopup('<button class="trigger">Say hi</button>')
}

function dropPin(coord){
	var y = L.mapbox.featureLayer({
	    // this feature is in the GeoJSON format: see geojson.org
	    // for the full specification
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        // coordinates here are in longitude, latitude order because
	        // x, y is the standard for GeoJSON and many formats
	        coordinates: coord
	    },
	    properties: {
	        title: '',
	        description: '',
	        'marker-size': 'large',
	        'marker-color': '#BE9A6B',
	        'marker-symbol': 'cafe'
	    }
	}).addTo(map);
	console.log(y)

}

$('#map').on('click', '.trigger', function(){
	alert("poo");
});


// o.LatLng {lat: -41.29582463254037, lng: 174.80220079421997}

