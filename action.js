var result = "";
var temp = 0;
var opt;
var z = "";

function function1(val){
    if (opt != '/' && opt != '*' && opt != '+' && opt != '-') {
        document.getElementById('number').value += val;
    } else {
        z = z + val;
        document.getElementById('number').value = z;
    }
    temp = document.getElementById('number').value;
}

function function2(val){
    z = "";
    opt1 = val;
    result == "" ? result = temp : calculate(opt);
    temp = "";
    document.getElementById('number').value = result;
    opt = opt1; 
} 

function calculate(opt) {
    if (opt == '+') {
        result = parseInt(result) + parseInt(temp);
    } else if (opt == '-') {
        result = parseInt(result) - parseInt(temp);
    } else if (opt == '*') {
        result = parseInt(result) * parseInt(temp);
    } else if (opt == '/') {
        result = parseInt(result) / parseInt(temp);
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
        document.getElementById('number').value = result;
        opt = " ";
    }
}