const allElements = document.querySelectorAll("body *");

let arr = [];
let num1;
let num2;
let operation;

allElements.forEach(element => {
    if (element.id) {
        const newConst = document.getElementById(`${element.id}`)

        if (element.id === 'btn0' || element.id === 'btn1') {
            element.addEventListener('click', () => {
                arr.push(element.innerText);
                res.innerText = arr.join('');
            })
        }
        if (element.id === 'btnSum' || element.id === 'btnMul' || element.id === 'btnSub' || element.id === 'btnDiv') {
            element.addEventListener('click', () => {
                num1 = arr.join('');
                arr = [];
                operation = element.innerText;
                res.innerText = operation;

                return operation, num1;
            });
        }
    }
});

btnClr.addEventListener('click', () => {
    arr = [];
    res.innerText = '';
});

btnEql.addEventListener('click', () => {
    num2 = arr.join('');
    arr = [];
    switch (operation) {
        case '+':
            result = (parseInt(num1, 2) + parseInt(num2, 2)).toString(2);
            break;
        case '-':
            result = (parseInt(num1, 2) - parseInt(num2, 2)).toString(2);
            break;
        case '*':
            result = (parseInt(num1, 2) * parseInt(num2, 2)).toString(2);
            break;
        case '/':
            result = Math.floor(parseInt(num1, 2) / parseInt(num2, 2)).toString(2);
            break;
        default:
            console.error('Invalid operation');
            return;
    }
    res.innerText = result;
});