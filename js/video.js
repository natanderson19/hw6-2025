var video;

// page load & autoplay
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('autoplay is set to ' + video.autoplay);
	video.loop=false;
	console.log('loop is set to ' + video.loop);
});

//play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
 });
//pause button
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

//slow down
let speedFactor = 0.1
 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate -= speedFactor;
	console.log("playback speed is " + video.playbackRate);
});
//speed up
docum