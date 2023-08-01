function rangeSliderInit(element) { // создаем функцию инициализации слайдера
    const range = element; // Ищем слайдер
    const inputMin = element.parentNode.previousElementSibling.querySelector('.range__input--min'); // Ищем input с меньшим значнием
    const inputMax = element.parentNode.previousElementSibling.querySelector('.range__input--max'); // Ищем input с большим значнием
    const inputMinValue = inputMin.getAttribute('data-value');
    const inputMaxValue = inputMax.getAttribute('data-value');

    if (!range || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

    // start - для ранее инициализированных элементов делаем destroy,
    function destroyExistingSlider(){
        if(range && range.noUiSlider) {
            range.noUiSlider.destroy();
        };
    };

    destroyExistingSlider();

    // удаляем ненужный дубль блока после destroy
    if (range.querySelector('.noUi-base')) {
        range.querySelector('.noUi-base').remove();
    };

    const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

    // range.noUiSlider.destroy();

    noUiSlider.create(range, { // инициализируем слайдер
        start: [+inputMinValue, +inputMaxValue], // устанавливаем начальные значения
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { // устанавливаем минимальное и максимальное значения
            'min': +inputMinValue,
            'max': +inputMaxValue
        },
        step: 1, // шаг изменения значений
    });

    range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
        // inputs[handle].value = parseInt(values[handle]);
        inputs[handle].value = new Intl.NumberFormat('ru-RU').format(parseInt(values[handle]));
    });

    inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
        range.noUiSlider.set([this.value, null]);
    });

    inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
        range.noUiSlider.set([null, this.value]);
    });
};

// для всех слайдеров цен запускаем функцию инициализации
function rangeSlidersSearch() {
    if (document.querySelector('.range__slider')) {
        const ranges = document.querySelectorAll('.range__slider');

        ranges.forEach(function(element) {
            rangeSliderInit(element);
        });
    };
};

rangeSlidersSearch();