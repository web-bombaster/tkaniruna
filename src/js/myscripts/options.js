initClassToggleItem('.options-type__variants', '.variants-item'); // инициализация вариантов, функция в helpers.js

// по щелчку на кнопку с выбором типа .options-type__current появляется выпадашка с вариантами
let optionsToggle = function() {

    if (document.querySelector('.options-type__current')) {
        let optionsTypeCurrent = document.querySelectorAll('.options-type__current');
        optionsTypeCurrent.forEach(function(element, index) {
            element.addEventListener('click', function() {
                this.parentElement.classList.toggle('toggle');
            });
        });
    };
};

optionsToggle();





// выбор варианта
let optionsSelect = function() {

    let btnVariants = document.querySelectorAll('.variants-item');
    let variantTitle;

    // по клику на вариант у всех убираем .toggle, а у активного добавляем его
    btnVariants.forEach(function(element, index) {
        element.addEventListener('click', function() {

            btnVariants.forEach(function(element) {
                element.classList.remove('toggle');
            });
            this.classList.toggle('toggle');

            // Текст выбраного варианта в кнопку
            variantTitle = this.innerText;
            this.parentElement.previousElementSibling.querySelector('.title').innerText = variantTitle;
            this.parentElement.classList.remove('toggle');
            this.closest('.options-type').classList.remove('toggle');

        });
    });

};

optionsSelect();