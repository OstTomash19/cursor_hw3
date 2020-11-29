const getMaxDigit = (number) => Math.max(... Array.from(String(number)).map((item) => parseInt(item)));

const getDegreeOfNumber = (number, degree) => {
    let degreeOfNumber = 1;
    for(let i = 0; i < Math.abs(degree); i++) {
        degreeOfNumber *= number;
    }
    
    if(degree < 0) degreeOfNumber = 1 / degreeOfNumber;

    return degreeOfNumber;
};

const makeTheFirstLetterUpperCase = (name) => name[0].toUpperCase().concat(name.slice(1, name.length).toLowerCase());

const getSalaryAfterTax = (dirtySalary, ...taxes) => dirtySalary - ((dirtySalary/100) * taxes.reduce((total, current) => total + current));

const getRandomNumber = (firstNumber, secondNumber) => Math.floor((Math.random() * secondNumber) + firstNumber);

const countLetter =  (letter, word) => {
    let counter = 0;
    word.toLowerCase().split('').forEach(char => {
        if(char === letter.toLowerCase()) {
            counter++;
        } 
    });
    return counter;
};

const convertCurrency = (currency) => {
    const buyDollarPrice = 28.36;
    const sellDollarPrice = 28.25;
    let receivedMoney;

    if(currency.toUpperCase().includes('UAH')) {
        receivedMoney = (+currency.split('UAH')[0]/buyDollarPrice) + ' $';
    } else if(currency.includes('$')) {
        receivedMoney = (+currency.split('$')[0] * sellDollarPrice) + ' UAH';
    } else {
        throw "Sorry, something is wrong, you entered an incorrect currency";
    }
    return receivedMoney;
};

const getRandomPassword = (numberOfDigit = 8) => {
    let newPassword = '';
    for(let i = 0; i < numberOfDigit; i++) newPassword += (Math.ceil(Math.random() * 10) - 1);
    return +newPassword;
};

const deleteLetters = (letter, word) => {
    let arrayWithoutSomeLetter = '';

    word.split('').forEach(oneLetter => {
        if(oneLetter !== letter) arrayWithoutSomeLetter += oneLetter;
    });
    return arrayWithoutSomeLetter;
};

const isPalyndrom = (word) => {
    const palyndrom = word.split(' ').join('').toLowerCase().split('');
    const reversePalyndrom = word.split(' ').join('').toLowerCase().split('').reverse();
    let countCoincidence = 0;

    for(let i = 0; i < word.length; i++) {
        if(palyndrom[i] === reversePalyndrom[i]) countCoincidence++;
    }

    return countCoincidence === word.length;
};

const deleteDuplicateLetter = (str) => {
    let arrayWithoutDuplicate = '';
    
    str.toLowerCase().split('').forEach(letter => {
        if(str.toLowerCase().indexOf(letter) === str.toLowerCase().lastIndexOf(letter)){
            arrayWithoutDuplicate += letter;
        }
    });

    return arrayWithoutDuplicate;
};

console.log(`Функція №1: ${getMaxDigit(1236)};
Функція №2: ${getDegreeOfNumber(7,2)};
Функція №3: ${makeTheFirstLetterUpperCase('cUrSoR')};
Функція №4: ${getSalaryAfterTax(1000, 18, 1.5)};
Функція №5: ${getRandomNumber(1, 100)};
Функція №6: ${countLetter("а", "Асталавіста")};
Функція №7: ${convertCurrency("2836UAH")};
Функція №8: ${getRandomPassword()};
Функція №9: ${deleteLetters('a', 'blablabla')};
Функція №10: ${isPalyndrom("Я несу гусеня")};
Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")};`);