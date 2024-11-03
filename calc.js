const aRef = document.getElementById('a');
const bRef = document.getElementById('b');
const opRef = document.getElementById('op');
const ansRef = document.getElementById('ans');

function calculate(){
    const a = Number(aRef.value);
    const b = Number(bRef.value);

    if(opRef.value == '+'){
        add(a, b);
    }

    else if(opRef.value == '*'){
        multiply(a, b);
    }

    else if(opRef.value == '-'){
        sub(a, b);
    }

    else if(opRef.value == '/'){
        div(a, b);
    }

    function add(a, b){
        ansRef.innerText = a + b;
    }

    function sub(a, b){
        ansRef.innerText = a - b;
    }

    function div(a, b){
        ansRef.innerText = a / b;
    }

    function multiply(a, b){
        ansRef.innerText = a * b;
    }
}

aRef.addEventListener('input',calculate);
bRef.addEventListener('input',calculate);
opRef.addEventListener('change',calculate);