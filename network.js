function detectOffline(){
	if (navigator.onLine) {
		alert("WE ARE CONNECTED!!!");
	} else{
		alert("You are working OFFLINE....");
	}
}

window.addEventListener("load",detectOffline);