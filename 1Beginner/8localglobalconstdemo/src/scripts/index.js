'use strict';

// Global Variables.
let globalUserName = 'Global User';
const USER_NAME = 'Global User';

const _lblGlobalUser = 'lblGlobalUser';
const _lblFunctionUser = 'lblFunctionUser';
const _lblIfUser = 'lblIfUser';

function getUserNames(){
    
    let localUserName = 'Function Scoped Local User';

    const lblGlobalUser = getElementById(_lblGlobalUser);
    lblGlobalUser.innerText = `Global User Name: ${globalUserName}`;
    console.log(`Global Variable: ${globalUserName}`);

    const lblFunctionUser = getElementById(_lblFunctionUser);
    lblFunctionUser.innerHTML = `Local User Name: ${localUserName}`;
    console.log(`Local User: ${localUserName}`)

    if( globalUserName === USER_NAME){

        let localUserName = 'If Scoped User Name';
        const lblIfUser = getElementById(_lblIfUser);
        lblIfUser.innerText = `If Scoped User Name: ${localUserName}`;

        console.log(`Global Variable: ${globalUserName}`);
        console.log(`Local User: ${localUserName}`)
    }

    console.log(`Global Variable: ${globalUserName}`);
    console.log(`Local User: ${localUserName}`)

}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

