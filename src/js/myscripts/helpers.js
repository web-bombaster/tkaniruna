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