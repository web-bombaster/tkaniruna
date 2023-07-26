// Переключаем класс toggle по клику на элемент с указанным классом
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


// раздаем классы toggle первым элементам внутри родительских, предварительно почистив их у других элементов
let initClassToggleItem = function(parentElement, childElement) {
    if (document.querySelector(parentElement)) {
        const parents = document.querySelectorAll(parentElement);
        parents.forEach(function(element, index) {
            let childrens = parents[index].querySelectorAll(childElement);
            childrens.forEach(function(element, index) {
                childrens[index].classList.remove('toggle');
            });

            parents[index].querySelector(childElement).classList.add('toggle');
        });
    };
};

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