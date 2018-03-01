function initMap() {
	// add your code here
	var ucsd_itlng = {lat:32.880, lng:-117.236}

	var map = new google.maps.Map(document.getElementById('map'),{
		center: ucsd_itlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_itlng,
		map: map,
		title:"UCSD"
	});
}