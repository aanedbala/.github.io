document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.process__accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.process__accordion-header');
			const content = self.querySelector('.process__accordion-body');

            self.classList.toggle('open');
            content.classList.toggle('visually-hidden');
		});
	});


// SLIDERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

	const arrowLeft = document.querySelector(".button--left");
	const arrowRight = document.querySelector(".button--right");
	const slides = document.querySelectorAll(".reviews__slider-item");

	let currentSlideIndex = 0;

	function showSlide() {
		slides[currentSlideIndex].classList.add("block");
	}

	function hideSlide() {
		slides[currentSlideIndex].classList.remove("block");
	}

	function changeSlide(slideIndex) {
		hideSlide();
		currentSlideIndex = slideIndex;
		showSlide();
	}

	function nextSlide() {
		let newSlideIndex = currentSlideIndex + 1;
		if(newSlideIndex > slides.length - 1) {
			newSlideIndex = 0;
		}
		changeSlide(newSlideIndex);
	}

	function previousSlide() {
		let newSlideIndex = currentSlideIndex - 1;
		if(newSlideIndex < 0) {
			newSlideIndex = slides.length - 1;
		}
		changeSlide(newSlideIndex);
	}

	arrowLeft.addEventListener("click", previousSlide);
	arrowRight.addEventListener("click", nextSlide);

	// TABSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

	const tabsBtn = document.querySelectorAll(".studies__button");
	const tabsItems = document.querySelectorAll(".studies__item");

	tabsBtn.forEach(onTabClick);

	function onTabClick(item) {
		item.addEventListener("click", function() {
			let currentBtn = item;
			let tabId = currentBtn.getAttribute("data-tab");
			let currentTab = document.querySelector(tabId);

			if( ! currentBtn.classList.contains('active') ) {
				tabsBtn.forEach(function(item) {
					item.classList.remove('active');
				});
		
				tabsItems.forEach(function(item) {
					item.classList.remove('active');
				});
		
				currentBtn.classList.add('active');
				currentTab.classList.add('active');
			}
		});
	}

	document.querySelector('.studies__button').click();

	// FILTRATIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN

	const filterBox =document.querySelectorAll(".services__item");
	document.querySelector('.services__nav').addEventListener('click', event => {
		if (event.target.tagName !== 'BUTTON') return false;

		let filterClass = event.target.dataset['f'];

		filterBox.forEach( elem => {
			elem.classList.remove('visually-hidden')
			if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
				elem.classList.add('visually-hidden');
			}
		})
	})

	//MODALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

	const modalTrigger = document.getElementsByClassName("hero__button")[0];

	const modalBackground = document.getElementsByClassName("modal")[0];
	const modalClose = document.getElementsByClassName("modal-close")[0];

	modalTrigger.addEventListener("click", function () {
		modalBackground.style.display = "block";	
	});

	modalClose.addEventListener("click", function () {
		modalBackground.style.display = "none";		
	});

	modalBackground.addEventListener("click", function (event) {
		if (event.target === modalBackground) {
			modalBackground.style.display = "none";
		}
	});

});