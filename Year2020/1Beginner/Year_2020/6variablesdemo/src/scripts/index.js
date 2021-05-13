'use strict';

const _txtName = 'txtName';
const _txtAge = 'txtAge';
const _txtAgeV1 = 'txtAgeV1';
const _checkboxIsPhd = "checkboxIsPhd";

function setName() {
    let _name = '';

    const txtName = getElementById(_txtName);

    _name = txtName.value;
    console.log(`Name: ${_name}. Type Of: ${typeof(_name)}`);
}

function setAge() {
    let _age = 0;
    console.log(`Age: ${_age}. Type Of: ${typeof(_age)}`);

    const txtAge = getElementById(_txtAge);

    _age = +txtAge.value;   // Converting from string to numeric using + symbol
    console.log(`Age: ${_age}. Type Of: ${typeof(_age)}`);
}

function setAgeV1() {
    let _age = 0;
    console.log(`Age: ${_age}. Type Of: ${typeof(_age)}`);

    const txtAge = getElementById(_txtAgeV1);

    _age = +txtAge.value;   // Converting from string to numeric using + symbol
    console.log(`Age: ${_age}. Type Of: ${typeof(_age)}`);
}

function setIsPhd(){

    let _isPhd = false;
    console.log(`Is Phd: ${_isPhd}. Type Of: ${typeof(_isPhd)}`);

    const checkboxIsPhd = getElementById(_checkboxIsPhd);
    _isPhd = checkboxIsPhd.checked;

    console.log(`Is Phd: ${_isPhd}. Type Of: ${typeof(_isPhd)}. Value: ${checkboxIsPhd.value}`);

}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

