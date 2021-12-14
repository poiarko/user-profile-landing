
let menuBtn = document.querySelector('.actions-header__menu-btn');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('actions-header__menu-btn_active')
  document.querySelector('.menu__body').classList.toggle('_active');
})

let dotsBtn = document.querySelector('.user__btn');
dotsBtn.addEventListener('click', () => {
  dotsBtn.classList.toggle('user__btn_active')
  document.querySelector('.dots-menu').classList.toggle('dots-menu_active');
})


function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

function documentActions(e) {
  const targetElement = e.target;

    if (targetElement.classList.contains('header-user__arrow')) {
      targetElement.closest('.header-user').classList.toggle('_hover');
    }
    if (!targetElement.closest('.header-user') && document.querySelectorAll('.header-user._hover').length > 0) {
      _removeClasses(document.querySelectorAll('.header-user._hover'), "_hover");
    }
    if (!targetElement.closest('.user__btn-wrap') && document.querySelectorAll('.user__btn-wrap').length > 0) {
      _removeClasses(document.querySelectorAll('.dots-menu'), "dots-menu_active");
    }

}

window.onload = function () {
  document.addEventListener("click", documentActions); 
}


function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});