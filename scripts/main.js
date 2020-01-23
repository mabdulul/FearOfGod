const numberImage = document.querySelectorAll(".ImageButton li ");
const replaceImage = document.getElementById("replace-Image");
let imageTracker = 0;

numberImage.forEach(function(images) {
	images.addEventListener("click", function(e) {
		const imageArr = [
			"Images/baksetballwhite.jpg",
			"Images/shoe33.jpg",
			"Images/baksetballwhite.jpg",
			"Images/girl1.jpg",
			"Images/sydney-rae-T1cYrv_gERo-unsplash.jpg",
			"Images/bgshoe1.jpg"
		];
		imageTracker += 1;
		if (imageTracker < imageArr.length) {
			replaceImage.src = imageArr[imageTracker];
		} else {
			imageTracker = 0;
		}
	});
});
