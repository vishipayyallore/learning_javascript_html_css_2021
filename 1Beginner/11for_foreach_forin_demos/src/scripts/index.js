'use strict';

const cars = ["Saab", "Volvo", "BMW", "Alto", "Zen", "Swift"];
const person = { id: 101, name: 'Shiva Sai', age: 26, salary: 1234.56, isPhd: true };

function showForLoopDemo(){
    
    const forLoopPara = getElementById('forlooppara');
    for(let i = 0; i < cars.length; i++){
        forLoopPara.innerText += ` ${i+1}. ${cars[i]} | `;
    }
}

function showForEachDemo(){
    
    const forEachPara = getElementById('foreachpara');
    cars.forEach((car, index) => {
        forEachPara.innerText += ` ${index+1}. ${car} | `;
    });
}

function showForInDemo(){

    const forInPara = getElementById('forinpara');
    for(const property in person){
        forInPara.innerText += ` ${property} === ${person[property]} | `;   
    }
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

    /*
    const ages = [1, 2, 3];
    
    ages.forEach((age) => {
        console.log(age);
    });
    */