const secondColumn = document.querySelector('.secondColumn');
const templateItem = document.querySelector('.template');
const priceSite = document.querySelector('.priceTitle');
const btnPrint = document.querySelector('.btnPrint');
const btnPrice = document.querySelector('.btnPrice');
const btnGroup = document.querySelector('.btnGroup');
const arrow = document.querySelector('.arrow');
const inputTitle = document.querySelector('.inputTitle');
const inputMessage = document.querySelector('.inputMessage');
const thirdSiteToPrint = document.querySelector('.thirdLayout');
const btnGeneratePrint = document.querySelector('.btnTemplate');
const btnClean = document.querySelector('.btnClean');
const body = document.querySelector('body');
const btnMode = document.querySelector('.btnDarkLightMode');
const btnbtnDarkLightMode = document.querySelector('.btnDarkLightMode');
const btnsMenu = document.querySelectorAll('.btnMenu');
const date = document.querySelector('#date');
const pdata = document.querySelector('p.date');
//const pTitle = document.querySelector('.titleView');
//const pMessage = document.querySelector('.messageView');
const testSecons = document.querySelector('.test');
const messageP = document.querySelector('.messageView');
const titleP = document.querySelector('.titleView');
let isVisiblePrintForms = false;

const changeMode = () => {
	if (body.getAttribute('data-mode') == 'light') {
		body.setAttribute('data-mode', 'dark');
		btnbtnDarkLightMode.textContent = 'Tryb jasny';
	} else {
		body.setAttribute('data-mode', 'light');
		btnbtnDarkLightMode.textContent = 'Tryb ciemny';
	}
};

//chowanie i ukrywanie kolumny
const showColumn = (column, hide, visible) => {
	column.classList.remove(hide);
	column.classList.add(visible);
};

const hideColumn = (column, hide, visible) => {
	column.classList.add(hide);
	column.classList.remove(visible);
};

const addNewPrintView = () => {
	const titleP = document.querySelector('.titleView');
	const messageP = document.querySelector('.messageView');

	if (inputTitle.value == '' || inputMessage.value == '') {
		titleP.textContent = 'nie podałeś tekstów';
	} else {
		titleP.textContent = inputTitle.value;
		messageP.textContent = inputMessage.value;
	}
};
const writeTextUptoDate = (mes, e) => {
	mes.textContent = e.target.value;
};
inputMessage.addEventListener('keyup', (e) =>
	writeTextUptoDate(messageP, e)
);
inputTitle.addEventListener('keyup', (e) =>
	writeTextUptoDateMessage(titleP, e)
);

const writeTextUptoDateCalendar = (e) => {
	pdata.textContent = e.target.value;
};

const hidePrintForms = () => {
	let pforms = document.querySelector('.firstSection');
	pforms.classList.add('hide');
	pforms.classList.remove('firstSection');
};

const cleanForm = (input) => {
	input.forEach((element) => {
		if (element.value === '') {
			element.value = '';
		} else {
			element.value = '';
		}
	});
};

const defaultValueView = () => {
	const titleP = document.querySelector('.titleView');
	const messageP = document.querySelector('.messageView');
	titleP.textContent = 'Nie dodałeś tytułu';
	titleP.style.color = 'grey';
	messageP.textContent = ' Nie dodałeś treści';
	messageP.style.color = 'grey';
};

const showThird = (p) => {
	p.forEach((el) => {
		el.classList.add('view');
	});
};
const hideColumn2 = (kolumna) => {
	kolumna.classList.remove('view');
};

// btnPrint.addEventListener('click', (e) => {
// 	showThird([thirdSiteToPrint]);
// });

// arrow.addEventListener('click', (e) => {
// 	hideColumn(thirdSiteToPrint);
// });

const btns = [arrow, btnGroup, btnPrice];

// btnGroup.addEventListener('click', (e) => {
// 	hideColumn(thirdSiteToPrint);
// });
// btnPrice.addEventListener('click', (e) => {
// 	hideColumn(thirdSiteToPrint);
// });

const showDate = () => {
	pdata.textContent = date.value;
};

//showDate(date);

//forEach((btnsMenu) => btnsMenu.addEventListener('click', hideColumn));
//pobieranie ba wydruk

//chowanie i ukrywanie kolumn podpięte pod przyciski
btnPrint.addEventListener('click', (element) => {
	showColumn(secondColumn, 'hide', 'secondColumnStyle');
});
btnPrint.addEventListener('click', (element) => {
	showColumn(templateItem, 'hide', 'templateStyle');
});
btnPrint.addEventListener('click', (element) => {
	showColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
});

//schowaj/odkryj drugą kolumne jak wcisniesz Wydruki
//btnPrint.addEventListener('click', showSecondColumn(show)); //pokaż szblony template jak wcisniesz Wydruki

//btnPrice.addEventListener('click', showSecondColumn(secondColumn)); //schowaj/odkryj drugą kolumne jak wcisniesz Opłaty
//btnPrice.addEventListener('click', showPriceSite); //pokaż obszar opłat priceSite jak klikniesz oplaty
//btnPrice.addEventListener('click', hideTemplate);
//btnGroup.addEventListener('click', showSecondColumn(secondColumn)); //schowaj/odkryj drugą kolumne jak wcisniesz Grupa
//btnGroup.addEventListener('click', groupColumn);

arrow.addEventListener('click', (element) => {
	hideColumn(secondColumn, 'hide', 'secondColumnStyle');
});
arrow.addEventListener('click', (element) => {
	hideColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
});

//btnGeneratePrint.addEventListener('click', addNewPrintView);
btnMode.addEventListener('click', changeMode);

// date.addEventListener('input', writeTextUptoDateCalendar);

// btnClean.addEventListener('click', (e) => {
// 	e.preventDefault(); //chcemy zeby przycisk nie przeładowywał strony

// 	cleanForm([inputTitle, inputMessage]); //funkcja bedzie wywoływana i jako argumety bedzie po kolej przyjmowac wszystkie elementy tablicy, beda one argumentem który u nas nazywa sie input
// 	defaultValueView([thirdSiteToPrint]);
// });
