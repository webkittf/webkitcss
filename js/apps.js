$(document).ready(function(){

	var welCamera = $('#cm'),
		sUrl;

	$(window).hashchange(function(){
		checkUrl();
	});
	checkUrl();
	
	
	function checkUrl(){
		sUrl = location.hash;
		sUrl = sUrl.substr(1,100);
		welCamera.removeClass().addClass(sUrl);
	}

});