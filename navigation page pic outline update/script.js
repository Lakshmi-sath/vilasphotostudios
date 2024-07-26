document.addEventListener("DOMContentLoaded", function () {
	const gallery = document.getElementById("gallery");

	// Function to display images based on filter
	function displayImages(filter) {
		// Hide all images initially
		const allImages = gallery.querySelectorAll("img");
		allImages.forEach((img) => {
			img.style.display = "none";
		});

		if (filter === "all") {
			// Display first 2 images from each category
			document.querySelectorAll(".wedding").forEach((img, index) => {
				if (index < 2) {
					img.style.display = "block";
				}
			});
			document.querySelectorAll(".event").forEach((img, index) => {
				if (index < 2) {
					img.style.display = "block";
				}
			});
			document.querySelectorAll(".babyshoot").forEach((img, index) => {
				if (index < 2) {
					img.style.display = "block";
				}
			});
			document.querySelectorAll(".product").forEach((img, index) => {
				if (index < 2) {
					img.style.display = "block";
				}
			});
			document.querySelectorAll(".others").forEach((img, index) => {
				if (index < 2) {
					img.style.display = "block";
				}
			});
		} else if (filter === "others") {
			// Redirect to a new page for "Others"
			window.location.href = "others.html";
		} else {
			// Display images of specific category
			document.querySelectorAll("." + filter).forEach((img) => {
				img.style.display = "block";
			});
		}
	}

	// Initial display (All images)
	displayImages("all");

	// Filter button event listeners
	const filterButtons = document.querySelectorAll(".filter-button");
	filterButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const filter = this.getAttribute("data-filter");
			displayImages(filter);
		});
	});
});
