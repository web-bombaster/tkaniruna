if (document.querySelector('.js-burger')) {

    const btnBurger = document.querySelectorAll('.js-burger');

    // Открыть / закрыть бургер по клику на него
    function btnBurgerToggle(e) {
        e.target.classList.toggle('toggle');
    }

    btnBurger.forEach(element => {
        element.addEventListener("click", btnBurgerToggle);
        // window.addEventListener("resize", btnBurgerToggleClassRemove);
    });
}