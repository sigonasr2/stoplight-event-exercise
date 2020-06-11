document.addEventListener("DOMContentLoaded",()=>{
	document.getElementById("controls").addEventListener("click",(clicked)=>{
		var lightPrefix = clicked.target.id.replace("Button","");
		var targetLight = document.getElementById(lightPrefix+"Light");
		if (!targetLight.classList.contains(lightPrefix)) {
			targetLight.classList.add(lightPrefix);
			console.log(lightPrefix+" bulb on.")
		} else {
			targetLight.classList.remove(lightPrefix);
			console.log(lightPrefix+" bulb off.")
		}
	})
	
	var buttons = document.getElementsByClassName("button");
	for (var i=0;i<buttons.length;i++) {
		buttons[i].addEventListener("mouseenter",(e)=>{
			console.log("Entered "+e.target.innerHTML+" button.")
		})
		buttons[i].addEventListener("mouseleave",(e)=>{
			console.log("Left "+e.target.innerHTML+" button.")
		})
	}
})