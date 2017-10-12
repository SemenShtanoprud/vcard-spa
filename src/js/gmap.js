var $gmapContainer = document.getElementById('map');
var gmap;

function initGmap(){
	gmap = new google.maps.Map($gmapContainer, {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		zoom: 8
	});
}
