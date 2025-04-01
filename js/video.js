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

//pay button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	documentg
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
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate += speedFactor;
	console.log("playback speed is " + video.playbackRate);
});

//skip ahead 
document.querySelector("#skip").addEventListener("click", function(){
	let currentTime = video.currentTime;
	let duration = video.duration;
	if (currentTime + 10 > duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime = currentTime + 10
	}
	console.log("current video time: " + video.currentTime + "seconds")
})

//old school/original
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("old school applied");
})
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("original applied");
})



//volume and mute updates
document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("player1");
    let volumeSlider = document.getElementById("slider");
    let volumeDisplay = document.getElementById("volume");

    //ensure video volume updates and is audible
    function updateVolume() {
        let volumeLevel = volumeSlider.value / 100;
        video.volume = volumeLevel;
        volumeDisplay.textContent = Math.round(volumeLevel * 100) + "%";
    }
    updateVolume();
    // update volume when slider is changed
    volumeSlider.addEventListener("input", updateVolume);

	
	//mute button toggle
	muteButton = document.querySelector("#mute")
	muteButton.addEventListener("click", function (){
		if (video.volume > 0) {
			video.dataset.previousVolume = video.volume;
			video.volume = 0;
			volumeSlider.value = 0;
			volumeDisplay.textContent = "0%";
			muteButton.textContent = "Unmute"
			console.log("video muted");
		}
		else {
			let previousVolume = video.dataset.previousVolume || 1;
			video.volume = previousVolume;
			volumeSlider.value = previousVolume * 100;
			volumeDisplay.textContent = Math.round(previousVolume * 100) + "%";
            muteButton.textContent = "Mute";
			delete video.dataset.previousVolume;
            console.log("Video unmuted");
		}
	});
});
