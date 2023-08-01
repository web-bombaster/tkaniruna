// клонируем фильтр в переменную
// вставляем клон в бкос для мобильного фильтра
// по щелчку на кнопку .jsFilterToggle открывать мобильный фильтр .mobile-filter
let mobileFilterToggle = function() {
    if (document.querySelector('.jsFilterToggle')) {

        const menuBtn = document.querySelector('.jsFilterToggle');
        const menu = document.querySelector('.mobile-filter');

        // Задаем необходимые начальные настройки
        menu.classList.remove('toggle');
        menuBtn.classList.remove('toggle');

        // Закрываем мобильный фильтр по клику вне его
        function closeMobileMenu() {
            document.addEventListener("click", function (e) {
                const menuBtn = document.querySelector('.jsFilterToggle');
                const menu = document.querySelector('.mobile-filter');
                const mobileMenu = document.querySelector('.mobile-filter');

                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_mobileMenu = target == mobileMenu || mobileMenu.contains(target);
                const its_btnMenu = target == menuBtn;

                if (!its_menu && !its_btnMenu && !its_mobileMenu) {
                    menuBtn.classList.remove('toggle');
                    menu.classList.remove('toggle');
                    document.querySelector('.body').classList.remove('toggle');
                    // body.style.overflowY = 'initial';
                };
            });
        };
        closeMobileMenu();

        // По клику на кнопку открытия фильтра в temp клонируем фильтр. А потом уже temp закидываем в мобильный фильтр
        function filterClone() {
            const filter = document.querySelector('.filter__form');
            let temp = filter.cloneNode(true);
            menu.innerHTML = '';
            menu.append(temp);

            checkboxListToggle(); // По щелчку на кнопку Показать все / Свернуть показываем или скрываем лишние чекбоксы в фильтре

            rangeSlidersSearch();
        };
        menuBtn.addEventListener("click", filterClone);

    };
};

mobileFilterToggle();
window.addEventListener('resize', mobileFilterToggle, true);