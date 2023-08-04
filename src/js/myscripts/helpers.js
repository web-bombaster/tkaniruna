// Функция, определяющая элемент, по которому был сделан клик
function targetElement(e) {
	const targetElement = e.target;
	console.log(targetElement);
}

// document.addEventListener("click", targetElement);

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
elementToggle('.mob-menu .dropdown');
// elementToggle('.jsMobileMenuBtnToggle');


// Переключатель класса toggle у элемента по клику на другом элементе. Параметры - класс элемента по которому кликаем и класс элемента, которому переключаем класс toggle
let classToggler = function(elementBtn, elementTarget) {
    if (document.querySelector(elementBtn) && document.querySelector(elementTarget)) {
        document.querySelector(elementBtn).addEventListener('click', function () {
            document.querySelector(elementTarget).classList.toggle('toggle');
        });
    };
};

classToggler('.catalog-menu__btn', '.panel-menu');
classToggler('.jsMobileMenuBtnToggle', '.body');
classToggler('.jsFilterToggle', '.body');
classToggler('.jsFilterToggle', '.mobile-filter');


// Переключатель класса toggle у следующего элемента по клику на текущем элементе. Параметры - класс элемента по которому кликаем в виде document.querySelector('.b08-left__title') или это должен быть уже ранее выбранный элемент
let classTogglerNextElement = function(element) {
    if (element) {
        element.addEventListener('click', function () {            
            element.classList.toggle('toggle');
            element.parentElement.classList.toggle('toggle');
        });
    };
};


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


// Функция для перемещения элемента в другой элемент. Параметры: куда перемещаем, что перемещаем, способ перемещения
let movingConstructor = function(to, metod, block) {
    if (!(document.querySelector(block) && document.querySelector(to))) {
        // console.log("переноса не будт");
        return;
    } else {
        switch (metod) {
            case 'prepend':
                document.querySelector(to).prepend(document.querySelector(block));
                break;

            case 'before':
                document.querySelector(to).before(document.querySelector(block));
                break;

            case 'after':
                document.querySelector(to).after(document.querySelector(block));
                break;

            default:
                document.querySelector(to).append(document.querySelector(block));
                break;
        };
    }
};


// функция будет перемещать блок в указанное место при определенной ширине экрана
let moving = function () {
    const windowWidth = window.innerWidth; // ширина экрана
    
    if (windowWidth <= 768) {
        movingConstructor('.b07__inner', 'append', '.b07-map');
        movingConstructor('.b07__inner', 'append', '.b07__descr');
        movingConstructor('.footer-box', 'append', '.footer-contacts');
        movingConstructor('.jsFavorite .b-bottom', 'append', '.jsFavorite .b-top__readmore');
        movingConstructor('.jsSale .b-bottom', 'append', '.jsSale .b-top__readmore');
        movingConstructor('.jsNewProducts .b-bottom', 'append', '.jsNewProducts .b03__btn');
    } else {
        movingConstructor('.b07', 'prepend', '.b07-map');
        movingConstructor('.b07__descr-box', 'prepend', '.b07__descr');
        movingConstructor('.footer-block__shop', 'append', '.footer-contacts');
        movingConstructor('.jsFavorite .b02__top', 'append', '.jsFavorite .b-top__readmore');
        movingConstructor('.jsSale .b02__top', 'append', '.jsSale .b-top__readmore');
        movingConstructor('.jsNewProducts .b03-box', 'append', '.jsNewProducts .b03__btn');
    };
    
};

moving();
window.addEventListener('resize', moving);

