
const _txtFriends = 'txtFriends';

const employee = {
    id: 101,
    name: 'Manish',
    age: 25,
    isPhd: false
}

function loopFriends(){

    const txtFriends = getElementsByName(_txtFriends);

    for(let index=0; index<txtFriends.length; index++){
        txtFriends[index].value = `${index+1}. ${txtFriends[index].value}`;
    }
    
    for(property in employee){
        console.log(`${property} === ${employee[property]}`);
    }

    for(property in txtFriends[0]){
        console.log(`${property} === ${employee[property]}`);
    }
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

function getElementsByName(elementName) {

    return document.getElementsByName(elementName);
}
