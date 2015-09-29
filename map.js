console.log("puppies")

L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);


var click = document.getElementById('click')
map.on('click', function(e) {
	console.log(e.latlng)
	});