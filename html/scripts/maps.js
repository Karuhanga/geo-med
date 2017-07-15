function initMap() {
	var kampala = {lat: 0.3476, lng: 32.5825};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: kampala
	});
	var marker = new google.maps.Marker({
		position: kampala,
		map: map
	});
}