'use strict'

const resultArray = (()=> {
	const ukrLanguageButton = document.getElementsByClassName('language__button language__button--ukr') [0];
	const rusLanguageButton = document.getElementsByClassName('language__button language__button--rus') [0];
	
	let str1 = 'abide abode abode дотримуватися соблюдать arise arose arisen виникати поялвяться awake awoke awoken прокидатися просыпаться backslide backslid backslid/backslidden відступати отступать be was/were been бути быть beat beat beaten бити бить become became become ставати становиться befall befell befallen спіткало произошло beget begot begotten породити порождать begin began begun починати начинать behold beheld beheld дивитися смотреть bend bent bent згинатися сгибаться bereave bereft bereft втрачати терять beseech besought besought благати умолять beset beset beset обставити обставлять bestride bestrode bestridden переступати переступать bet bet bet ставити ставить bind bound bound пов’язувати связывать bite bit bitten вкусити укусить bleed bled bled кровоточити кровоточить blow blew blown дути дуть break broke broken ламати ламать breed bred bred вирощувати разводить bring brought brought приносити приносить broadcast broadcast broadcast передавати передавать build built built будувати строить burn burnt burnt горіти гореть burst burst burst вибухати взрываться bust bust/busted bust/busted розорювати разорять buy bought bought купляти покупать can could - могти мочь cast cast cast кидати кидать catch caught caught хапати ловить choose chose chosen вибирати выбирать cling clung clung чіплятися цепляться come came come приходити приходить cost cost cost коштувати стоить creep crept crept повзти ползать cut cut cut різати резать deal dealt dealt вирішувати решать dig dug dug копати копать do did done робити делать draw drew drawn малювати рисовать dream dreamt dreamt мріяти мечтать drink drank drunk пити пить drive drove driven керувати водить dwell dwelt dwelt жити жить eat ate eaten їсти есть interweave interwove interwoven вплітати вплетать fall fell fallen падати падать feed fed fed годувати кормить feel felt felt відчувати чувствовать fight fought fought боротися бороться find found found знаходити находить flee fled fled уникати избегать fling flung flung кидати бросать fly flew flown літати летать forbid forbad(e) forbidden забороняти запрещать forecast forecast forecast прогнозувати прогнозировать forget forgot forgotten забувати забывать forgive forgave forgiven пробачати прощать forsake forsook forsaken залишати оставлять foresee foresaw foreseen передбачати предвидеть foretell foretold foretold пророкувати предсказывать freeze froze frozen заморожувати замораживать get got got отримувати получать give gave given давати давать go went gone йти идти grind ground ground молоти молоть grow grew grown рости расти hang hung hung повісити повесить have had had мати иметь hear heard heard чути слышать hide hid hidden ховатися прятаться hit hit hit вдарити ударить hold held held тримати держать hurt hurt hurt ранити ранить keep kept kept зберігати хранить know knew known знати знать lay laid laid класти класть lead led led вести вести lean leant leant спиратися опираться leap leapt leapt стрибати прыгать learn learnt learnt вчити изучать leave left left полишати оставлять lend lent lent позичати одалживать let let let дозволяти позволять lie lay lain лежати лежать lose lost lost втрачати терять make made made зробити сделать mean meant meant означати значить meet met met зустрічати встретить pay paid paid платити платить mistake mistook mistaken помилятися ошибаться overhear overheard overheard підслуховувати подслушивать oversleep overslept overslept проспати проспать put put put покласти положить read read read читати читать rid rid rid позбавлятися лишиться ride rode ridden їхати ехать ring rang rung дзвонити звонить rise rose risen підніматись подниматься run ran run бігти бежать say said said казати говорить see saw seen бачити видеть seek sought sought шукати искать sell sold sold продавати продавать send sent sent надсилати посылать set set set встановлювати устанавливать shake shook shaken трясти трясти shed shed shed проливати проливать shine shone shone світитися светиться shit shit/shat shit/shat гадити гадить shoot shot shot стріляти стрелять show showed shown показувати показывать shrink shrank shrunk стискати сжимать shut shut shut закривати закрывать sing sang sung співати петь sink sank sunk опускатися опускаться sit sat sat сидіти сидеть slay slew slain вбивати убивать sleep slept slept спати спать slide slid slid ковзати скользить sling slung slung перекидати закидывать slink slunk slunk крастися красться slit slit slit розрізати разрезать smell smelt smelt пахнути пахнуть speak spoke spoken розмовляти разговаривать speed sped sped прискорювати ускоряться spend spent spent витрачати тратить spin spun spun крутити крутить spit spat spat плювати плевать split split split розділяти разделять spoil spoilt spoilt псувати портить spread spread spread поширювати распространять spring sprang sprung виникати появляться stand stood stood стояти стоять steal stole stolen красти воровать stick stuck stuck прикріплювати прикреплять sting stung stung жалити жалить stink stank stunk смердіти вонять stride strode stridden крокувати шагать strike struck strucken вдаряти ударять string strung strung зав’язувати завязывать strive strove striven досягати достигать swear swore sworn клястися клясться sweep swept swept підмітати подметать swim swam swum плисти плыть swing swung swung гойдати качать take took taken брати брать teach taught taught навчати учить tear tore torn рвати рвать tell told told розповідати рассказывать think thought thought думати думать throw threw thrown кидати бросать thrust thrust thrust штовхати толкать tread trod trodden ступати ступать understand understood understood розуміти понимать undertake undertook undertaken братися браться undo undid undone скусовувати отменять upset upset upset засмучувати огорчать wake woke woken прокидатися просыпаться wear wore worn одягати носить weave wove woven ткати ткать weep wept wept плакати плакать win won won вигравати побеждать withdraw withdrew withdrawn виводити выводить withstand withstood withstood протистояти противостоять wring wrung wrung вичавлювати выджать write wrote written писати писать'
	let array1 = str1.split(' ');
	let resultArray = [];
	let x = 4;

	ukrLanguageButton.onclick = function() {
		for(let i = 4; i <= array1.length; i = i + 4) {
			array1.splice(i, 1);
		}

		for (let i = 0; i < (array1.length/4); i++) { 
			let countArray = array1.slice(x-4,x);
			resultArray.push(countArray);
			x += 4;
		}
		wordInitialization();

	secondPage.style.display = 'flex'; 
	firstPage.style.display = 'none';	
	}

	rusLanguageButton.onclick = function() {
		for(let i = 3; i <= array1.length; i = i + 4) {
			array1.splice(i, 1);
		}

		for (let i = 0; i < (array1.length/4); i++) { 
			let countArray = array1.slice(x-4,x);
			resultArray.push(countArray);
			x += 4;
		}
		wordInitialization();

	secondPage.style.display = 'flex'; 
	firstPage.style.display = 'none';
	}

 	return resultArray;
}) ();


const store = {
	randomArray: null,
	index: null, 
	inputWord: false,
};

var firstPage =  document.getElementsByClassName('first-page') [0];
var secondPage = document.getElementsByClassName('second-page') [0];
var inputsField = [...document.getElementsByTagName('input')];

function wordInitialization() {

	var randomOfResultArray = resultArray[Math.floor(Math.random() * resultArray.length)];
	store.randomArray = randomOfResultArray;

	const index = Math.floor(Math.random()*4);
	store.index = index;
	var selectWord = randomOfResultArray[index];

	var randomInput = inputsField[index];

	randomInput.classList.add('input--disabled');
	randomInput.disabled = true;
	randomInput.value = selectWord;

	store.inputWord = false;

	setTimeout(() => {
		document.querySelector('input:not(:disabled)').focus()
	}, 0)
}


function addButtonHandlers() {

	const exitButton = document.getElementsByClassName('button button--exit') [0];
	var acceptButton = document.getElementsByClassName('button button--accept') [0];
	var message = [...document.getElementsByClassName('message')];
	const rightAnswer = document.getElementsByClassName('counter counter--passed') [0];
	const wrongAnswer = document.getElementsByClassName('counter counter--failed') [0];
	let rightCounter = 0;
	let wrongCounter = 0;
	

	const initNextWord = () => {
				 
		let counter = 0;

		inputsField.forEach((item, index) => {
				
			if(!item.disabled) {
		
				if (item.value.toLowerCase() !== store.randomArray[index]) {
					item.classList.add('input--error');
					message[index].innerText = store.randomArray[index];
				} else  {
					item.classList.add('input--accept');
					message[index].innerText = '';
				}
			}

			if  (item.value.toLowerCase() === store.randomArray[index]){
				counter++;
			}
		});

		function chekUserAnswer () {

			if(counter === store.randomArray.length) {
				if(store.inputWord === false) {
					rightCounter++;
					rightAnswer.innerText = rightCounter;
				}

				inputsField.forEach((item) => {
					item.value = '';
					message.value = '';
					item.classList.remove('input--error');
					item.classList.remove('input--accept');
					item.classList.remove('input--disabled');
					item.disabled = false;
				});
				
					wordInitialization ();
			} else {
				if(store.inputWord === true) {
					wrongCounter = wrongCounter
				} else {
					store.inputWord = true;
					wrongCounter++; 
					wrongAnswer.innerText = wrongCounter;
				}
			}
		}
		chekUserAnswer();
	};

	
	acceptButton.onclick = initNextWord;

	window.addEventListener('keypress', (e) => {
		if(e.keyCode === 13) {
			initNextWord();
		}
	});


	
	exitButton.onclick = function() {
		window.close();
	}
	
}

addButtonHandlers();



