if (document.querySelector('.jsMobileMenuBtnToggle')) {

    let menuPanelInit = function () {
        const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');
        const menu = document.querySelector('.mobile-menu');
        const body = document.querySelector('body');
        // const menuLink = document.querySelectorAll('.menu-link'); // для  меню по секциям
    
        // Показать / скрыть мобильное меню - toggle
        function menuPanelToggle() {
            if (menuBtn.classList.contains('toggle')) {
                menu.classList.add('toggle');
                body.classList.add('toggle');
            } else {
                menu.classList.remove('toggle');
                body.classList.remove('toggle');
            };
        };
    
        // Определяем высоту мобильного меню и размещаем под шапкой
        function menuPanelPosition() {
            const heightViewport = document.documentElement.clientHeight;
            const heightHeader = document.querySelector('.header').offsetHeight;
            const heightMenuOverlay = heightViewport - heightHeader;
            // let posTop = window.pageYOffset;
            let posTop = window.scrollY;
    
            const menuActive = document.querySelector('.mobile-menu.toggle');
    
            if (menuActive) {
                menuActive.style.height = heightMenuOverlay + 'px';
                // menuActive.style.top = posTop + heightHeader + 'px';
                menuActive.style.top = posTop + 'px';
            };
        };
    
        // Закрыть мобильное меню
        function menuPanelClose() {
            menuBtn.classList.remove('toggle');
            menu.classList.remove('toggle');
            body.classList.remove('toggle');
        };

        // Закрываем мобильное меню по клику вне его
        function menuPanelOnClickClose() {
            document.addEventListener("click", function(e) {
                const target = e.target;
                const its_menu = target == menu || menu.contains(target);
                const its_btnMenu = target == menuBtn;
    
                if (!its_menu && !its_btnMenu) {
                    menuPanelClose();
                };
            });
        };
    
        // Закрыть мобильное меню при resize
        window.addEventListener('resize', function () {
            menuPanelClose();
        }, true);
    
        // Закрываем меню (для меню по секциям)
        // menuLink.forEach(element => {
        //     element.addEventListener("click", menuPanelClose);
        // });
    
        // Показать / скрыть мобильное меню
        let menuLaunch = function() {
            menuPanelToggle();
            menuPanelPosition();
            menuPanelOnClickClose();
        };

        menuBtn.addEventListener("click", menuLaunch);
    };

    menuPanelInit();

};