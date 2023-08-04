// клонируем фильтр в переменную
// вставляем клон в бкос для мобильного фильтра
// по щелчку на кнопку .jsFilterToggle открывать мобильный фильтр .mobile-filter
let mobileFilterToggle = function() {
    if ((document.querySelector('.jsFilterToggle')) && (document.querySelector('.mobile-filter'))) {

        const menuBtn = document.querySelector('.jsFilterToggle');
        const menu = document.querySelector('.mobile-filter');

        // Задаем необходимые начальные настройки
        menuBtn.classList.remove('toggle');
        menu.classList.remove('toggle');

        // Закрываем мобильный фильтр по клику вне его
        function closeMobileMenu() {
            document.addEventListener("click", function (e) {

                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_btnMenu = target == menuBtn;

                if (!its_menu && !its_btnMenu) {
                    menuBtn.classList.remove('toggle');
                    menu.classList.remove('toggle');
                    document.querySelector('.body').classList.remove('toggle');
                    // body.style.overflowY = 'initial';
                };
            });
        };
        closeMobileMenu();

        function mobileFilterAccordion() {
            const elements = document.querySelectorAll('.mobile-filter .filter__legend');

            elements.forEach(function(element) {
                classTogglerNextElement(element);
            });
        };

        // По клику на кнопку открытия мобильного фильтра в temp клонируем десктопный фильтр. А потом уже temp закидываем в панель для мобильного фильтра
        function filterClone() {
            const filter = document.querySelector('.filter__form');
            const temp = filter.cloneNode(true);
            menu.innerHTML = '<div class="mobile-filter__title">Фильтр</div>';
            menu.append(temp);

            mobileFilterAccordion(); // аккордион

            // document.addEventListener("click", targetElement); // проверям, по чему щелкнули
            
            // elementToggle('.mobile-filter .filter__fieldset'); // по клику открывать 

            checkboxListToggle(); // По щелчку на кнопку Показать все / Свернуть показываем или скрываем лишние чекбоксы в фильтре


            runRangeSliderInit();
        };

        menuBtn.addEventListener("click", filterClone);




    };
};

mobileFilterToggle();
window.addEventListener('resize', mobileFilterToggle, true);