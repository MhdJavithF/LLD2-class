function parent3() {
    var a;
    function child() {
        function child2() {
            var a;
            console.log(a);  // Β und
            a = 30;
        }
        console.log(a); // A. 20
        a = 10;
        child2();
    }

    a = 20;
    child();
    console.log(a); // C. 10

}

parent3();


----------------------
var counter = 0;
setInterval( function() {
    console.log(counter++);
}, 2000 );

======================

const input = [{
id: 1,
type: "CREDIT",
amount: 1000
}, {
id: 1,
type: "DEBIT",
amount: 5000
}, {
id: 1,
type: "CREDIT",
amount: 1000
}, {
id: 1,
type: "CREDIT",
amount: 10000
}, {
id: 1,
type: "DEBIT",
amount: 2000
}];

let credit = 0;
let debit = 0;
input.forEach(item => {
    if(item.type.toLowerCase == 'CREDIT'){
        credit = credit + item.amount;
    }
    else if(item.type == 'DEBIT'){
        debit = debit + item.amount;
    }
});

const output = {
    CREDIT : credit,
    DEBIT : debit
}