$(document).ready(function () {
	$(".image.initial").show();
	$(".see-btn.load-more-btn").show();
	$(".see-btn.show-less-btn").hide();

	$(".buttons").click(function () {
		$(this).addClass("active").siblings().removeClass("active");

		var filter = $(this).attr("data-filter");
		if (filter == "all") {
			$(".image").show(400);
			$(".image").hide();
			$(".image.initial").show();
			$(".see-btn.load-more-btn").show();
			$(".see-btn.show-less-btn").hide();
		} else {
			$(".image")
				.not("." + filter)
				.hide(200);
			$(".image")
				.filter("." + filter)
				.show(400);
			$(".see-btn.load-more-btn").hide();
			$(".see-btn.show-less-btn").hide();
		}
	});

	$(".see-btn.load-more-btn").click(function () {
		$(".image.load-more").show();
		$(this).hide();
		$(".see-btn.show-less-btn").show();
	});

	$(".see-btn.show-less-btn").click(function () {
		$(".image.load-more").hide();
		$(".see-btn.load-more-btn").show();
		$(this).hide();
	});

	$("#gallery").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	const form = document.getElementById("contactForm");
	const submitButton = document.querySelector(".btn-send");
	const inputs = form.querySelectorAll("input, textarea");
	const errorMessage = document.querySelector(".error-message");

	function validateForm() {
		let isValid = true;
		let phoneValid = true;

		inputs.forEach((input) => {
			if (input.required && !input.value) {
				isValid = false;
			}
			if (input.name === "phone" && input.value && !/^[6-9]\d{9}$/.test(input.value)) {
				phoneValid = false;
			}
		});
		submitButton.disabled = !isValid || !phoneValid;
		errorMessage.style.display = phoneValid ? "none" : "block";
	}

	inputs.forEach((input) => {
		input.addEventListener("input", validateForm);
	});

	function sendToWhatsApp() {
		const name = document.querySelector('input[name="name"]').value;
		const phone = document.querySelector('input[name="phone"]').value;
		const message = document.querySelector('textarea[name="message"]').value;

		if (!name || !message) {
			console.error("Name and Message are required.");
			return;
		}

		if (phone && !/^[6-9]\d{9}$/.test(phone)) {
			errorMessage.style.display = "block";
			return;
		}

		errorMessage.style.display = "none";

		const phoneNumber = "9985560848";
		const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

		const whatsappURL = `https://wa.me/${9985560848}?text=${encodeURIComponent(whatsappMessage)}`;
		window.open(whatsappURL, "_blank");
	}
	submitButton.addEventListener("click", function (event) {
		event.preventDefault();
		sendToWhatsApp();
	});
	validateForm();
});
