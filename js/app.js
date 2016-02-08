(function(){
	
	var start = function() {
    	//show a message if webGL is not supported
		if(!Detector.webgl) {
			Detector.addGetWebGLMessage();
		} else {
			var spaceScene = new SpaceScene();
			spaceScene.goForth();
		}
	};

	var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
	if (app) { // PhoneGap application
	    document.addEventListener('deviceready', function() { 
	    	//!!! temporary delay to start for PhoneGap Build troubleshooting purposes
	    	//Perhaps it would be better to show a start screen anyway, educating about Google Cardboard requirements.
			var tempStartDelay = setTimeout(start, 5000);
	    });
	} else {  // Web page
		start();
	}

})();