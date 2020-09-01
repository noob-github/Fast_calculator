let sin_val, cos_val, tan_val, ln_val, log_val, e_x_val, add_val, sub_val, mul_val, divide_val, x_y_val;
let first = document.getElementById("first")
console.log(first);
let first_val
first.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        console.log('Enter pressed');
        first_val = first.value;
        console.log(first_val);
        function_grp_1(first_val);
    }
    else {
    }
});
first.addEventListener("focusout", (event) => {
    console.log("focus lost");
    first_val = first.value;
    console.log(first_val);
    function_grp_1(first_val);
})

let second = document.getElementById("second");
console.log(second);
let second_val;
second.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        console.log('Enter pressed');
        second_val = second.value;
        console.log(second_val);
        function_grp_2(first_val, second_val);
    }
    else {
    }
});

function function_grp_1(arg) {
    arg = parseFloat(arg);
    cal_sin(arg);
    cal_cos(arg);
    cal_tan(arg);
    cal_log(arg);
    cal_ln(arg);
    cal_e_x(arg);
}

function cal_sin(arg) {
    try {
        sin_val = Math.sin(arg);
        let sin_div = document.getElementById('sin');
        sin_div.onclick = function () {
            console.log('hello');
            first.value = sin_val;
        }
        sin_div.innerText = `sin(${arg}) = ${sin_val}`;
    } catch (err) {
        console.log('Error in cal_sin : ' + err.message);
    }
}

function cal_cos(arg) {
    try {
        cos_val = Math.cos(arg);
        let cos_div = document.getElementById('cos');
        cos_div.innerText = `cos(${arg}) = ${cos_val}`;
        cos_div.onclick = function () {
            console.log('hello');
            first.value = cos_val;
        }
    } catch (err) {
        console.log('Error in cal_cos : ' + err.message);
    }
}

function cal_tan(arg) {
    try {
        tan_val = Math.tan(arg);
        let tan_div = document.getElementById('tan');
        tan_div.innerText = 'tan(' + arg + ') = ' + tan_val;
        tan_div.onclick = function () {
            console.log('hello');
            first.value = tan_val;
        }
    } catch (err) {
        console.log('Error in cal_tan : ' + err.message);
    }
}

function cal_log(arg) {
    try {
        log_val = Math.log10(arg);
        let log_div = document.getElementById('log');
        log_div.innerText = `log(${arg}) = ${log_val}`;
        log_div.onclick = function () {
            console.log('hello');
            first.value = log_val;
        }
    } catch (err) {
        console.log('Error in cal_log : ' + err.message);
    }
}

function cal_ln(arg) {
    try {
        ln_val = Math.log(arg);
        let ln_div = document.getElementById('ln');
        ln_div.innerText = `ln(${arg}) = ${ln_val}`;
        ln_div.onclick = function () {
            console.log('hello');
            first.value = ln_val;
        }
    } catch (err) {
        console.log('Error in cal_ln : ' + err.message);
    }
}

function cal_e_x(arg) {
    try {
        e_x_val = Math.exp(arg);
        let e_x_div = document.getElementById('e_x');
        e_x_div.innerHTML = 'e<sup style="font-size:xx-small">' + arg + '</sup> = ' + e_x_val;
        e_x_div.onclick = function () {
            console.log('hello');
            first.value = e_x_val;
        }
    } catch (err) {
        console.log('Error in cal_e_x : ' + err.message);
    }
}

function function_grp_2(arg1, arg2) {
    arg1 = parseFloat(arg1);
    arg2 = parseFloat(arg2);
    cal_add(arg1, arg2);
    cal_sub(arg1, arg2);
    cal_mul(arg1, arg2);
    cal_divide(arg1, arg2);
    cal_x_y(arg1, arg2);
}

function cal_add(arg1, arg2) {
    try {
        add_val = (arg1) + (arg2);
        let add_val_div = document.getElementById('add');
        add_val_div.innerHTML = arg1 + "+" +arg2 + " = " + add_val ;
        add_val_div.onclick = function () {
            first.value = add_val;
        }
    } catch (err) {
        console.log("Error in cal_add");
    }
}

function cal_sub(arg1, arg2) {
    try {
        sub_val = arg1 - arg2;
        let sub_val_div = document.getElementById('sub');
        sub_val_div.innerText = `${arg1}-${arg2}=${sub_val}`;
        sub_val_div.onclick = function () {
            first.value = sub_val;
        }
    } catch (err) {
        console.log("Error in cal_sub");
    }
}

function cal_mul(arg1, arg2) {
    try {
        mul_val = (arg1) * (arg2);
        let mul_val_div = document.getElementById('mul');
        mul_val_div.innerText = `${arg1}*${arg2}=${mul_val}`;
        mul_val_div.onclick = function () {
            first.value = mul_val;
        }
    } catch (err) {
        console.log("Error in cal_mul");
    }
}

function cal_divide(arg1, arg2) {
    try {
        divide_val = (arg1) /(arg2);
        let divide_val_div = document.getElementById('divide');
        divide_val_div.innerText = `${arg1}/${arg2}=${divide_val}`;
        divide_val_div.onclick = function () {
            first.value = divide_val;
        }
    } catch (err) {
        console.log("Error in cal_divide");
    }
}

function cal_x_y(arg1 , arg2){
    try {
        x_y_val = Math.pow(arg1,arg2);
        console.log(x_y_val)
        let x_y_val_div = document.getElementById('x_y');
        x_y_val_div.innerHTML = arg1 + '<sup style="font-size:xx-small">' + arg2 + '</sup> = ' + x_y_val;
        x_y_val_div.onclick = function(){
            first.value = x_y_val;
        }
    } catch (err) {
        console.log("Error in cal_x_y" + err.message);
    }
}