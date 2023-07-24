// Инициализация Inputmask
// https://github.com/RobinHerbots/Inputmask

function initInputMask() {
	let formPhone = document.querySelectorAll('.form__phone');
	formPhone.forEach(element => {
		Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(element);
	});
}

initInputMask();

// Инициализация just-validate
// https://github.com/horprogs/Just-validate
// https://just-validate.dev/

// function initJustValidatHelpForme() {
// 	const validation = new JustValidate('.b06-form');

// 	validation
// 		.addField('.form__phone', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Введите телефон!',
// 			},
// 		])
// 		.addField('.form__agreement', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Подтвердите согласие на обработку персональных данных!',
// 			},
// 		])
// 		.addField('.form__email', [
// 			{
// 				rule: 'required',
// 				errorMessage: 'Email обязателен!',
// 			},
// 			{
// 				rule: 'email',
// 				errorMessage: 'Email не корректен!',
// 			},
// 		])
// }

// if (document.querySelector('.form__phone')) {
// 	initJustValidatHelpForme();
// }