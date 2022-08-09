//Thank you Jeff Starr for making this. Here is the website for the code https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/#:~:text=To%20do%20this%2C%20we%20simply,001.gif"%3B%20img2.
function preloader() {
	if (document.images) {
		var background = new Image();
		var Linuxicons = new Image();
		var Thumbnails = new Image();

		background.src = "Assets/background/lol.png";
		Linuxicons.src = "Assets/Icons/Linux Mint.png";
		Linuxicons.src = "Assets/Icons/Linux Ubuntu.png"; 

        Thumbnails.src = "Assets/Thumbnails/Doki Doki Takeover Bad Ending.png"; 
        Thumbnails.src = "Assets/Thumbnails/Mario Madness.gif"; 
        Thumbnails.src = "Assets/Thumbnails/Popcap Collection.png"; 
        Thumbnails.src = "Assets/Thumbnails/Vs Dusttale Remastered.png"; 
        Thumbnails.src = "Assets/Thumbnails/X EVENT.gif"; 
        Thumbnails.src = "Assets/Thumbnails/YLYL Funkin - VS Jimmy Here.png";
		
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);  
