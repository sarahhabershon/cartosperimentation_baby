console.log("puppies")



var map;
function initMap() {
	var wellington = new google.maps.LatLng(-41.2851928, 174.7851791);
	map = new google.maps.Map(document.getElementById('map'), {
		center: wellington,
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	});

	var heatmapData = heat_it_up();


	var heatmap = new google.maps.visualization.HeatmapLayer({
		data: heatmapData
	});
	heatmap.setMap(map);

}


var heat_it_up = function(){
	return [new google.maps.LatLng(-41.2851928, 174.7851791)]
}