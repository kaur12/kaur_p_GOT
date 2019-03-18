(() => {
	console.log('fired');

	//variable stack
	//grab the shields at the bottom of the page
	const 	shields 	= document.querySelectorAll('.sigil-container'),
			lightBox 	= document.querySelector('.lightbox'),
			video		= document.querySelector('video'),
			closeLB     = document.querySelector('.lightbox-close'),
			banners     = document.querySelector('#houseImages');

	function showLightbox() {
		// grab the right video source
		// debugger;
		//get lowercase house name from the class list
		let targetHouse = this.className.split(" ")[1];

		//make sure the names match - needs to be uppercase
		// stark becomes Stark -> first name a capital S, then 
		let targetSrc = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetSrc}.mp4`;


		lightBox.classList.add('show-lightbox');

		video.load();
		video.play();
	}

	function hideLightbox() {
		lightBox.classList.remove('show-lightbox');
		// rewind the video to the begining
		// and also pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanner() {
		const offSet = 600;
		totalOffset = this.dataset.offset * offSet; //+ "px";
		// banners.style.right = totalOffset;
		TweenMax.to(banners, 0.8, { right: totalOffset });
	}

	// shields.forEach(shield => shield.addEventListener('click', showLightbox));
	shields.forEach(shield => shield.addEventListener('click', animateBanner));

	video.addEventListener('ended', hideLightbox);
	closeLB.addEventListener('click', hideLightbox);
})();