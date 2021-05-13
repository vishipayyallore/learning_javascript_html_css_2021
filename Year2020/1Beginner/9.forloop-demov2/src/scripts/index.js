
const _txtFriends = 'txtFriends';
const txtFriends = getElementsByName(_txtFriends);

const employee = {
    id: 101,
    name: 'Manish',
    age: 25,
    isPhd: false
}

const cars = ["Saab", "Volvo", "BMW", "Alto", "Zen", "Swift"];
const person = { id: 101, name: 'Shiva Sai', age: 26, salary: 1234.56, isPhd: true, 
    address: {
        city: 'Unknown', 
        state: 'UP'
    } };

function loopFriends() {
    // For Loop
    for (let index = 0; index < txtFriends.length; index++) {
        txtFriends[index].value = `${index + 1}. ${txtFriends[index].value}`;
    }
}

function showForInObject() {
    const forInObject = getElementById('forInObject');
    let index = 1;

    for (property in employee) {
        forInObject.innerText += ` ${index++}. ${property} = ${employee[property]} | `;
    }
}

function showForInTextbox() {
    const forInTextbox = getElementById('forInTextbox');
    let index = 1;

    for (property in txtFriends[0]) {
        forInTextbox.innerText += ` ${index++}. ${property} = ${employee[property]} | `;
    }
}


function showForInDemo(){

    const forInPara = getElementById('forinpara');
    for(const property in person){

        console.log(`${typeof(person[property])}`);
        if(typeof(person[property]) === 'object'){
            console.log(JSON.stringify(person[property]));
        }
        forInPara.innerText += ` ${property} === ${person[property]} | `;   
    }
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

function getElementsByName(elementName) {

    return document.getElementsByName(elementName);
}
