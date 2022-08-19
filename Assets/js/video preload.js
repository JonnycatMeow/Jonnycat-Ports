var r = new XMLHttpRequest();
r.onload = function() {
    myVid.src = URL.createObjectURL(r.response);
    myVid.play();
};
if (myVid.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"')) {
    r.open("GET", "Assets/Videos/Friday Night Funkin - Popcap Collection.mp4");
}
else {
    r.open("GET", "Assets/Videos/Friday Night Funkin - X event (MacOS).mp4");
}

r.responseType = "blob";
r.send();
//thx for the code https://stackoverflow.com/questions/9616236/html5-video-full-preload-in-javascript