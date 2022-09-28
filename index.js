const init = function(){
    document.getElementById('reset-button').addEventListener('click', reset);
    document.getElementById('submit-button').addEventListener('click', submit);
}

const reset = function(ev){
    ev.preventDefault(); //to prevent default 
    document.getElementById('userForm').reset();
}

const send = function(ev){
    ev.preventDefault();
    ev.stopPropagation();
    //
    let ret = validate();
    //Async (to some async thing then use a promise with .then and .catch)deep stuff..
    if(ret){
        //we are good to go
        document.getElementById('userForm').submit();
    }else{
        //bad user
        let err = document.querySelector('.error');
        let input = err.querySelector('input');
        err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);
    }
}

const validate = function(ev){
    let valid = false;
    //checkbox (or radio button grouped by names)
    let chk = document.getElementById('alive');
    // .check .value
    alert(chk.checked)

    //select
    let select = document.getElementById('input-age');
    // .selectedIndex .options .length .selectedValue .value

    //inputs for text, email, tel, color, number...
    let first = document.getElementById('input-first');
    let last = document.getElementById('input-last');
    let email = document.getElementById('input-email');
    //.value, .defaultValue,

    //return a bolean || and object with details about the failures
    return true;
}
document.addEventListener('DOMContentLoaded', init);