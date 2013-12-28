/* Common JavaScript functions */

function selectButton(image, imagePath) {
	image.src = imagePath;
	image.className = "button selected";
}

function deselectButton(image, imagePath) {
	image.src = imagePath;
	image.className = "button";
}
