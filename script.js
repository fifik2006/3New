//jsPDF = require('jspdf');
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
const printView = document.querySelector('.printView');
const printViewStyle = document.querySelector('.printViewStyle');
const main = document.querySelector('.main');
const mainStyle = document.querySelector('.mainStyle');
const btnPr = document.querySelector('.btnPrint2');
let isVisiblePrintForms = false;
const thirdSiteToPrintStyle = document.querySelector('.thirdLayoutStyle');
const btnPrintView = document.querySelector('.btnsToPrint');

//doc.save('a4.pdf');
let doc = new jsPDF();
function createPdf() {
	// const wrap = (texttest, n) => {
	const options = {
		orientation: 'p',
		unit: 'mm',
		format: 'a4',
		lineHeightFactor: 1.5,
		maxWidth: 200,
		align: 'justify',
	};
	// 	let lines = doc.splitTextToSize(texttest, 150);
	// 	for (let i = 0; i < lines.length; i++) {
	// 		doc.text(15, n + i * 10, lines[i]);
	// 		//doc.text(texttest, options);
	// 	}
	doc.setTextColor(0, 12, 100, 49);
	doc.setFillColor(0, 59, 100, 5);
	doc.setFontSize(15);

	// wrap(messageP.innerText, 50);
	// wrap(titleP.innerText, 30);
	doc.text(titleP.innerText, 50, 30, options);
	//doc.line(20, 20, 200, 20);
	//doc.setLineCap(0);
	doc.setTextColor(255, 0, 0);
	doc.text(messageP.innerText, 10, 60, options);
	//doc.line(30, 50, 200, 50);
	doc.setPage(1);
	doc.setLanguage('pl-PL');
	doc.setLineWidth(100);

	doc.save('myDoc.pdf');
	return;

	doc.deleteFonts();
}

//doc.title = 'Moja strona';

// const format = {
// 	margin: 50,

// 	filename: 'myfile.pdf',
// 	image: { type: 'jpeg', quality: 0.98 },
// 	html2canvas: { scale: 4 },
// 	jsPDF: {
// 		unit: 'px',
// 		format: 'a4',
// 		orientation: 'landscape',
// 	},
// };

function createPdf2() {
	var doc = new jsPDF();
	const format = {
		margin: [30, 30, 30, 30],
		filename: 'myfile.pdf',
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 4 },
		jsPDF: {
			unit: 'px',
			format: 'a4',
			orientation: 'portrait',
		},
	};
	const options = {
		background: '#e5e5e5',
	};
	doc.setTextColor(0, 12, 100, 49);
	//doc.text("moj tekst co nie chce sie udac", 10, 20);
	//doc.save('myDok.pdf');

	//doc.fromHTML(printView, 10, 10);
	html2pdf().from(printView).set(format).save();
}
const controller = new AbortController();
btnPr.addEventListener('click', createPdf2);

//----tryb jasny ciemny funkcja
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
	//column.classList.remove(hide); //klasa do usunięcia
	column.classList.remove(hide); //klasa do usunięcia
	column.classList.add(visible); //klasa do dodania
};

const hideColumn = (column, hide, visible) => {
	column.classList.add(hide);
	column.classList.remove(visible);
};

//---do poprawki, tworzenie szablonu wydruku
const addPrintViewTemplate = () => {
	if (inputTitle.value == '' || inputMessage.value == '') {
		titleP.textContent = 'nie podałeś tekstów';
	} else {
		titleP.textContent = inputTitle.value;
		messageP.textContent = inputMessage.value;
	}
};

class AddPrintTemplate {
	constructor(title, message) {
		this.title = title;
		this.message = message;
	}

	save() {}
}

//--funkcja przypisywania wartosci z inputa do divów
const writeTextUptoDate = (mes, e) => {
	mes.textContent = e.target.value;
	//mes.style.color = 'black';
	mes.style.color = '';
};

//
// const hidePrintForms = () => {
// 	let pforms = document.querySelector('.firstSection');
// 	pforms.classList.add('hide');
// 	pforms.classList.remove('firstSection');
// };

//--czyszczenie zawartości inputów wydruku
const cleanForm = (input) => {
	input.forEach((element) => {
		if (element.value === '') {
			element.value = '';
		} else {
			element.value = '';
		}
	});
};

//---dodanie  tekstów komunikatów o braku tekstów
const defaultValueView = (title, message, date) => {
	title.textContent = 'Nie dodałeś tytułu';
	title.style.color = 'grey';
	message.textContent = ' Nie dodałeś treści';
	message.style.color = 'grey';
	date.textContent = ' ';
	return;
};

const showThird = (p) => {
	p.forEach((el) => {});
};

const btns = [arrow, btnGroup, btnPrice];

btnPrint.addEventListener('click', (element) => {
	showColumn(secondColumn, 'hide', 'secondColumnStyle');
	showColumn(templateItem, 'hide', 'templateStyle');
	showColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
	showColumn(printView, 'hide', 'printViewStyle');
	hideColumn(main, 'hide', 'mainStyle');
	showColumn(btnPrintView, 'hide', 'btnsView');
});

arrow.addEventListener('click', (element) => {
	hideColumn(secondColumn, 'hide', 'secondColumnStyle');
	hideColumn(printView, 'hide', 'printViewStyle');
	showColumn(main, 'hide', 'mainStyle');
	hideColumn(btnPrintView, 'hide', 'btnsView');
});

//----tryb jasny ciemny wywołanie
btnMode.addEventListener('click', changeMode);

//---wywołanie funkcji uzupełniającej na bieżąco wydruk, prosto z formularza---
inputTitle.addEventListener('keyup', (e) => writeTextUptoDate(titleP, e)); //nasłuchanie na to co jest wpisane w inputa tytułu i przypisanie do tutułu w podglądzie wydruku

inputMessage.addEventListener('keyup', (e) => writeTextUptoDate(messageP, e)); //nasłuchanie na to co jest wpisane w inputa wiadomości i przypisanie do tutułu w podglądzie wydruku
date.addEventListener('input', (e) => writeTextUptoDate(pdata, e)); //nasłuchanie na to co jest wybrane w inputa daty i przypisanie do tutułu w podglądzie wydruku

//--czyszczenie wszystkich wartości w formularzu drukowania
btnClean.addEventListener('click', (e) => {
	//e.preventDefault(); //chcemy zeby przycisk nie przeładowywał strony
	cleanForm([date, inputTitle, inputMessage]); //funkcja bedzie wywoływana i jako argumety bedzie po kolej przyjmowac wszystkie elementy tablicy, beda one argumentem który u nas nazywa sie input
	defaultValueView(titleP, messageP, pdata); //po wyczyszczeniu formularza wydruku domyślne wartości dla trzeciej kolumny
});

//--otworzyc 2gą kolumnę po kliknieniu jakiegokolwiek przycisku z menu
// btnsMenu.forEach((btns) =>
// 	btns.addEventListener('click', (e) => {
// 		showColumn(secondColumn, 'hide', 'secondColumnStyle');
// 	})
// );





btnGroup.addEventListener('click', () => {
	showColumn(secondColumn, 'hide', 'secondColumnStyle');
	hideColumn(printView, 'hide', 'printViewStyle');
	hideColumn(templateItem, 'hide', 'templateStyle');
	hideColumn(main, 'hide', 'mainStyle');
	showColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
	hideColumn(btnPrintView, 'hide', 'btnsView');
});

btnPrice.addEventListener('click', () => {
	showColumn(secondColumn, 'hide', 'secondColumnStyle');
	showColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
	//hideColumn(thirdSiteToPrint, 'hide', 'thirdLayoutStyle');
	hideColumn(templateItem, 'hide', 'templateStyle');
	hideColumn(main, 'hide', 'mainStyle');
	hideColumn(printView, 'hide', 'printViewStyle');
	hideColumn(btnPrintView, 'hide', 'btnsView');
});
