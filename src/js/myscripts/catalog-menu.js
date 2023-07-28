// Делаем правильный отступ сверху для панели
let catalogMenuInit = function() {

    if (document.querySelector('.catalog-menu__btn') && document.querySelector('.panel-menu')) {

        const catalogBtn = document.querySelector('.catalog-menu__btn');
        const panelMenuBox = document.querySelector('.panel-menu__box');
        const catalogSubmenu = '.catalog-submenu';
        const catalogLinks = document.querySelectorAll('.catalog-menu__link');
        const catalogMenuPanel = document.querySelector('.panel-menu');

        // Делаем правильный отступ сверху для панели
        let catalogMenuIndent = function() {
            catalogBtn.addEventListener('click', function () {
                const hHeader = document.querySelector('.header').offsetHeight;
                const hHeaderBottom = document.querySelector('.header-bottom').offsetHeight;

                catalogMenuPanel.style.top = hHeader - hHeaderBottom + 'px';
            });
        };

        catalogMenuIndent();

        // Высота панели и ширина подменю
        let catalogMenuSize = function() {
            catalogLinks.forEach(function(element) {
                element.addEventListener('mouseenter', function () {
                    if (element.parentElement.querySelector(catalogSubmenu)) {
                        const hCatalogSubmenu = element.parentElement.querySelector(catalogSubmenu).offsetHeight + 30;
                        catalogMenuPanel.style.minHeight = hCatalogSubmenu + 'px';

                        const wCatalogSubmenu = panelMenuBox.offsetWidth - element.offsetWidth;
                        element.parentElement.querySelector(catalogSubmenu).style.width = wCatalogSubmenu + 'px';
                    };
                });
            });
        };

        catalogMenuSize();

        // Закрываем панель при ресайзе окна
        let catalogClose = function() {
            catalogBtn.classList.remove('toggle');
            catalogMenuPanel.classList.remove('toggle');
        };

        // Закрываем панель при ресайзе окна
        window.addEventListener('resize', function() {
            catalogClose();
        });
    };
};


catalogMenuInit();
