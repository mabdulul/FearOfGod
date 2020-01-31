const replaceImage = document.getElementById("replace-Image");
const replaceText = document.getElementById("replaceText");
function myPic1() {
	const image1 = "Images/baksetballwhite.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "Jerry Lorenzo - Interview";
}

function myPic2() {
	const image1 = "Images/shoe33.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "Sixth Collection - Film";
}

function myPic3() {
	const image1 = "Images/baksetballwhite.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "Water Fear of God - S21";
}
function myPic4() {
	const image1 = "Images/girl1.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "Fire Fear of God - SS19";
}
function myPic5() {
	const image1 = "Images/sydney-rae-T1cYrv_gERo-unsplash.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "Earth Fear of God - S20";
}
function myPic6() {
	const image1 = "Images/bgshoe1.jpg";
	replaceImage.src = image1;
	replaceText.innerHTML = "First Collection - Film";
}

// const numberImage = document.querySelectorAll(".ImageButton li ");
// const replaceImage = document.getElementById("replace-Image");
// let imageTracker = 0;

// numberImage.forEach(function(images) {
// 	images.addEventListener("click", function(e) {
// 		const imageArr = [
// 			"Images/baksetballwhite.jpg",
// 			"Images/shoe33.jpg",
// 			"Images/baksetballwhite.jpg",
// 			"Images/girl1.jpg",
// 			"Images/sydney-rae-T1cYrv_gERo-unsplash.jpg",
// 			"Images/bgshoe1.jpg"
// 		];
// 		imageTracker += 1;
// 		if (imageTracker < imageArr.length) {
// 			replaceImage.src = imageArr[imageTracker];
// 		} else {
// 			imageTracker = 0;
// 		}
// 	});
// });
