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
    } else {
        document.querySelector('.b07').prepend(document.querySelector('.b07-map'));
        document.querySelector('.b07__descr-box').prepend(document.querySelector('.b07__descr'));
    };

};

moving();
window.addEventListener('resize', moving);