// Если количество чекбоксов больше 5, скрываем их
// и добавляем кнопку Показать все / Свернуть
let quantityCheckbox = function(element) {
    if (element.querySelector('.filter__label')) {
        const listCheckbox = element.querySelectorAll('.filter__label');
        // console.log(listCheckbox.length);

        if (listCheckbox.length > 5) {
            let btnShowAll = document.createElement('span');
            btnShowAll.classList.add('show-all');

            btnShowAll.innerText = 'Посмотреть все';
            element.append(btnShowAll);

            for (let index = 0; index < listCheckbox.length; index++) {
                if (index >= 4) {
                    let checkboxItem = listCheckbox[index];
                    checkboxItem.classList.add('toggle');
                };
            };
        };

    };
};

// для всех filter__box-checkbox запускаем функцию quantityCheckbox
let searchFieldset = function() {
    if (document.querySelector('.filter__fieldset > .filter__box-checkbox')) {
        const listFieldset = document.querySelectorAll('.filter__fieldset > .filter__box-checkbox');
        listFieldset.forEach(function(element) {
            quantityCheckbox(element);
        });
    };
};
searchFieldset();


// По щелчку на кнопку Показать все / Свернуть показываем или скрываем лишние чекбоксы в фильтре
let checkboxListToggle = function() {
	if (document.querySelector('.filter__box-checkbox>.show-all')) {
		let showAll = document.querySelectorAll('.filter__box-checkbox>.show-all');
		showAll.forEach(function(element) {
            // По щелчку на .show-all находим .filter__label,
			element.addEventListener('click', function(e) {
				const boxCheckbox = this.closest('.filter__box-checkbox');
				const checkbox = this.closest('.filter__box-checkbox').querySelectorAll('.filter__label');

                boxCheckbox.classList.toggle('toggle');

                for (let index = 0; index < checkbox.length; index++) {
                    // нужным элементам (>4) делаем toggle класса .toggle для показа / скрытия
                    if (index >= 4) {
                        let checkboxItem = checkbox[index];
                        checkboxItem.classList.toggle('toggle');
                    };
                };

                // Меняем текст кнопки
                element.classList.toggle('toggle');
                if (element.classList.contains('toggle')) {
                    element.innerText = 'Свернуть';
                } else {
                    element.innerText = 'Показать все';
                };

			});
		});
	};
};

checkboxListToggle();