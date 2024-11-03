const aRef = document.getElementById('a');
const bRef = document.getElementById('b');
const opRef = document.getElementById('op');
const ansRef = document.getElementById('ans');

function add(aRef, bRef){
    const a = aRef.value;
    const b = bRef.value;
    ansRef.innerText = a * b;
}

function sub(aRef, bRef){
    const a = aRef.value;
    const b = bRef.value;
    ansRef.innerText = a * b;
}

function div(aRef, bRef){
    const a = aRef.value;
    const b = bRef.value;
    ansRef.innerText = a * b;
}

function multiply(aRef, bRef){
    const a = aRef.value;
    const b = bRef.value;
    ansRef.innerText = a * b;
}

if(String(opRef.value) === '*'){
    aRef.addEventListener('change',function(){
        multiply(aRef, bRef);
    });
}

else if(opRef.value === '+'){
    bRef.addEventListener('change',function(){
        add(aRef, bRef);
    });
}

else if(opRef.value === '-'){
    bRef.addEventListener('change',function(){
        sub(aRef, bRef);
    });
}

else if(opRef.value === '/'){
    bRef.addEventListener('change',function(){
        div(aRef, bRef);
    });
}