
const _txtFriends = 'txtFriends';
const txtFriends = getElementsByName(_txtFriends);

function forLoopFriends() {

    for (let index = 0; index < txtFriends.length; index++) {
        txtFriends[index].value = `${index + 1}. ${txtFriends[index].value}`;
    }
}

function forEachV1() {

    const forEachV1 = getElementById('forEachV1');

    // Version 1
    txtFriends.forEach(friend => console.log(friend.value));

    // Version 1.1
    txtFriends.forEach(friend => {
        forEachV1.innerText += (` ${friend.value} \n`);
    });
}


function forEachV2() {
    const forEachV2 = getElementById('forEachV2');

    txtFriends.forEach((friend, index) => {
        forEachV2.innerText += (` ${index + 1}. ${friend.value} \n`);
    });
}

function forEachV3() {

    txtFriends.forEach(showFriends);
}

function showFriends(friend, index) {
    const forEachV3 = getElementById('forEachV3');

    forEachV3.innerText += (` ${index + 1}. ${friend.value} \n`);
}

function getElementById(elementId) {

    return document.getElementById(elementId);
}

function getElementsByName(elementName) {

    return document.getElementsByName(elementName);
}
