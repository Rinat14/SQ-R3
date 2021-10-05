function start() {
	var menuToggle = document.querySelector('.menu-toggle');
	var navigation = document.querySelector('.navigation');
	var body = document.querySelector('body');
	function showAndHideInput() {
		document.querySelector('.toggle__icons-items.ser').addEventListener('click', () => {
			document.querySelector('.navigation').classList.add('active');
		});
		document.querySelector('.toggle__icons-items.clo').addEventListener('click', () => {
			document.querySelector('.navigation').classList.remove('active');
			document.querySelector('.toggle__input').value = '';
		});
	}
	showAndHideInput();
	function menuToggleShow() {
		document.querySelector('.menu-show').addEventListener('click', () => {
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('show-naviga');
			body.classList.toggle('hidden-scroll');
		});
	}
	menuToggleShow();
	document.addEventListener('scroll', () => {
		const header = document.querySelector('.header');
		header.classList.toggle('sticky', scrollY > 0);
	});
	function activeToggle(className) {
		const listLinks = document.querySelectorAll(className);
		const furnitureItems = document.querySelectorAll('.product-furniture__items');
		function clearActiveClasses() {
			listLinks.forEach((links) => {
				links.classList.remove('active');
			});
		}
		for (const links of listLinks) {
			links.addEventListener('click', () => {
				clearActiveClasses();
				links.classList.add('active');
				for (const items of furnitureItems) {
					if (links.classList.contains('all')) {
						if (items.classList.contains('all')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('chair')) {
						items.style.display = 'none';
						if (items.classList.contains('chair')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('tables')) {
						items.style.display = 'none';
						if (items.classList.contains('tables')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('bed')) {
						items.style.display = 'none';
						if (items.classList.contains('bed')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('sofa')) {
						items.style.display = 'none';
						if (items.classList.contains('sofa')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('wardrobe')) {
						items.style.display = 'none';
						if (items.classList.contains('wardrobe')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('almirah')) {
						items.style.display = 'none';
						if (items.classList.contains('almirah')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('dimple')) {
						items.style.display = 'none';
						if (items.classList.contains('dimple')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('rack')) {
						items.style.display = 'none';
						if (items.classList.contains('dimple')) {
							items.style.display = 'block';
						}
					} else if (links.classList.contains('stand')) {
						items.style.display = 'none';
						if (items.classList.contains('stand')) {
							items.style.display = 'block';
						}
					}
				}
			});
		}
	}
	activeToggle('.filter__items');
	const addClass = (className, addClassName) => {
		className.classList.add(addClassName);
	}
	const removeClass = (className1, className2, className3, className4, addClassName) => {
		className1.classList.remove(addClassName);
		className2.classList.remove(addClassName);
		className3.classList.remove(addClassName);
		className4.classList.remove(addClassName);
	}
	function removeClassesOfNavigation() {
		let links = document.querySelectorAll('.list__links');
		function clearActiveClasses() {
			menuToggle.classList.remove('active');
			navigation.classList.remove('show-naviga');
			body.classList.remove('hidden-scroll');
		}
		for (const link of links) {
			link.addEventListener('click', () => {
				clearActiveClasses();
			});
		}
	}
	removeClassesOfNavigation();
	setInterval(() => {
		let links = document.querySelectorAll('.list__links');
		if (scrollY > 60 && 1052 > scrollY) {
			addClass(links[0], 'active');
			removeClass(links[1], links[2], links[3], links[4], 'active');
			
		} else if (scrollY > 1051 && 1728 > scrollY) {
			addClass(links[1], 'active');
			removeClass(links[0], links[2], links[3], links[4], 'active');
			
		} else if (scrollY > 1727 && 2252 > scrollY) {
			addClass(links[2], 'active');
			removeClass(links[0], links[1], links[3], links[4], 'active');
			
		} else if (scrollY > 2251 && 4077 > scrollY) {
			addClass(links[3], 'active');
			removeClass(links[0], links[1], links[2], links[4], 'active');
			
		} else if (scrollY > 4076 && 4490 > scrollY) {
			addClass(links[4], 'active');
			removeClass(links[0], links[1], links[2], links[3], 'active');
			
		} else {
			removeClass(links[0], links[1], links[2], links[3], 'active');
			links[4].classList.remove('active');
		}
	}, 100);
}
start();