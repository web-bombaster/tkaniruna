// раздаем классы toggle первым элементам внутри родительских, предварительно почистив их у других элементов
let initClassToggleItem = function(parentElement, childElement) {
    if (document.querySelector(parentElement)) {
        const parents = document.querySelectorAll(parentElement);
        parents.forEach(function(element) {
            let childrens = element.querySelectorAll(childElement);
            childrens.forEach(function(element) {
                element.classList.remove('toggle');
            });

            if (element.querySelector(childElement)) {
                element.querySelector(childElement).classList.add('toggle');
            };
        });
    };
};

initClassToggleItem('.options-type__variants', '.variants-item'); // выпадашка с вариантами для строки поиска
initClassToggleItem('.header-bottom-menu', '.menu-hb'); // выпадашка для выбора меню в .header-bottom


// Табы. Параметры: класс для кнопок табов и класс содержимого табов
const tabsToggle = function(tabBtnClass, tabContentClass) {

    if (document.querySelector(tabBtnClass)) {
        const tabsBtn = document.querySelectorAll(tabBtnClass); // все кнопки табов
        const tabsContent = document.querySelectorAll(tabContentClass); // все содержимое табов

        // Перебираем кнопки табов, по которым можем щелкнуть
        tabsBtn.forEach(function(btn, index) {

            // Вешаем событие клика на каждую кнопку
            btn.addEventListener('click', function () {

                // у всех кнопок одного родителя убрать класс активности
                tabsBtn[index].parentNode.querySelectorAll(tabBtnClass).forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у кнопки, по которой щелкнули, добавить класс активности
                tabsBtn[index].classList.add('toggle');

                // у каждого содержимого одного родителя удалить класс активности
                tabsContent[index].parentNode.querySelectorAll(tabContentClass).forEach(function(element) {
                    element.classList.remove('toggle');
                });

                // у содержимого с этим индексом добавить класс активности
                tabsContent[index].classList.add('toggle');

            });

        });

    };
};

tabsToggle('.toggle-hb .variants-item', '.menu-hb');


// Переключаем класс toggle элемента по клику на этот же элемент. Параметр - классэлемента
let elementToggle = function(element) {
    if (document.querySelector(element)) {
        document.addEventListener('click', function (e) {
            if (e.target.closest(element)) {
                e.preventDefault();
                e.target.closest(element).classList.toggle('toggle');
            };
        });
    };
};

elementToggle('.product-slide__favorite');


// Переключатель класса toggle у элемента по клику на другом элементе. Параметры - класс элемента по которому кликаем и класс элемента, которому переключаем класс toggle
let classToggler = function(elementBtn, elementTarget) {
    if (document.querySelector(elementBtn) && document.querySelector(elementTarget)) {
        document.querySelector(elementBtn).addEventListener('click', function () {
            document.querySelector(elementTarget).classList.toggle('toggle');
        });
    };
};

classToggler('.catalog-menu__btn', '.panel-menu');


// по клику на элемент у всех подобных убираем .toggle, а у выбранного добавляем его
let classToggleForElement = function(classElement) {
	if (document.querySelector(classElement)) {
		let items = document.querySelectorAll(classElement);

		items.forEach(function(element, index) {
			element.addEventListener('click', function() {
				items.forEach(function(element) {
					element.classList.remove('toggle');
				});
				this.classList.toggle('toggle');
			});
		});
	};
};

// classToggleForElement('.s09-item');


// функция будет перемещать блок в указанное место при определенной ширине экрана
let moving = function () {
    const windowWidth = window.innerWidth; // ширина экрана

    if (windowWidth <= 768) {
        document.querySelector('.b07__inner').append(document.querySelector('.b07-map'));
        document.querySelector('.b07__inner').append(document.querySelector('.b07__descr'));
        document.querySelector('.footer-box').append(document.querySelector('.footer-contacts'));
        document.querySelector('.jsFavorite .b-bottom').append(document.querySelector('.jsFavorite .b-top__readmore'));
        document.querySelector('.jsSale .b-bottom').append(document.querySelector('.jsSale .b-top__readmore'));
        document.querySelector('.jsNewProducts .b-bottom').append(document.querySelector('.jsNewProducts .b03__btn'));
    } else {
        document.querySelector('.b07').prepend(document.querySelector('.b07-map'));
        document.querySelector('.b07__descr-box').prepend(document.querySelector('.b07__descr'));
        document.querySelector('.footer-block__shop').append(document.querySelector('.footer-contacts'));
        document.querySelector('.jsFavorite .b02__top').append(document.querySelector('.jsFavorite .b-top__readmore'));
        document.querySelector('.jsSale .b02__top').append(document.querySelector('.jsSale .b-top__readmore'));
        document.querySelector('.jsNewProducts .b03-box').append(document.querySelector('.jsNewProducts .b03__btn'));
    };

};

moving();
window.addEventListener('resize', moving);