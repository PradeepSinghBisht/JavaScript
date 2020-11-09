var result = "";
var temp = 0;
var opt;
var z = "";
function function1(val){
    if (opt != '/' && opt != '*' && opt != '+' && opt != '-') {
        document.getElementById('number').value += val;
        temp = document.getElementById('number').value;
        console.log(temp);
    } else {
        z = z + val;
        document.getElementById('number').value = z;
        temp = z;
    }
}

function function2(val){
    z = "";
    opt1 = val;
    console.log(opt1);
    if (val == '+') {
        if (result == ""){
            check();
        } else {
            calculate(opt);
        }
          
    } else if (val == '-') {
        if (result == ""){
            check();
        } else {
            calculate(opt);
        }
    } else if (val == '*') {
        if (result == ""){
            check();
        } else {
            calculate(opt);
        }
    } else if (val == '/') {
        if (result == ""){
            check();
        } else {
            calculate(opt);
        }
    }
    opt = opt1; 
} 

function check() {
    result = temp;
    temp = "";
    console.log(result);
    document.getElementById('number').value = result;
}

function calculate(opt) {
    if (opt == '+') {
        result = parseInt(result) + parseInt(temp);
        temp = "";
        console.log(result);
        document.getElementById('number').value = result;
    } else if (opt == '-') {
        result = parseInt(result) - parseInt(temp);
        temp = "";
        console.log(result);
        document.getElementById('number').value = result;
    } else if (opt == '*') {
        result = parseInt(result) * parseInt(temp);
        temp = "";
        console.log(result);
        document.getElementById('number').value = result;
    } else if (opt == '/') {
        result = parseInt(result) / parseInt(temp);
        temp = "";
        console.log(result);
        document.getElementById('number').value = result;
    }
}

function results(val) {
    if (val == 'C') {
        document.getElementById('number').value = '';
        temp = "";
        result = "";
        opt = "";
    } else if (val == '=') {
        calculate(opt);
        opt = " ";
    }
}