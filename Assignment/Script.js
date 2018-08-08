(function(window){

	var lesmots = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i in lesmots) {
		var name = lesmots[i]
		var firstLetter = name.charAt(0).toLowerCase();
	 	if (firstLetter == "j") {
	  		byeSpeaker.speak(name);
		} else {
	  		helloSpeaker.speak(name);
	  }
	}

})(window)

