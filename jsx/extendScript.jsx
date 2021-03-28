
$.runScript = {


	CreateMarker: function() {
		for(i = 0; i < jsonJSX.chapitre.length; i++){

			var time = jsonJSX.chapitre[i].time;
			var secondes = time.charAt(time.length-2) + time.charAt(time.length-1);
			var minutes = time.charAt(time.length-5) + time.charAt(time.length-4);

			var markers = app.project.activeSequence.markers;
			var newMarkers = markers.createMarker(parseInt(secondes) + parseInt(minutes)*60);
			newMarkers.name = jsonJSX.chapitre[i].description;
		}

	}
    
}