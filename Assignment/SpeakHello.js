(function(window){

	var helloSpeaker = {}

	var speakWord = "Hello";

	function speak(name) {
	  console.log(speakWord + " " + name);
	}

	helloSpeaker.speak = speak;

	window.helloSpeaker = helloSpeaker;

})(window)


