let catalogMenuInit = function() {
    if (document.querySelector('.catalog-menu__btn') && document.querySelector('.panel-menu')) {
        const catalogBtn = document.querySelector('.catalog-menu__btn');
        const catalogMenuPanel = document.querySelector('.panel-menu');

        catalogBtn.addEventListener('click', function () {
            const hHeader = document.querySelector('.header').offsetHeight;
            const hHeaderBottom = document.querySelector('.header-bottom').offsetHeight;

            catalogMenuPanel.style.top = hHeader - hHeaderBottom + 'px';

        });
    };
};

catalogMenuInit();