
const _txtFriends = 'txtFriends';

function loopFriends(){

    let index = 1;
    const txtFriends = getElementsByName(_txtFriends);

    // For Loop
    for(const friend in txtFriends){
        txtFriends[friend].value = `${index++}. ${txtFriends[friend].value}`;
    }

    // Array.forEach
    txtFriends.forEach(friend => console.log(friend.value));
}

function getElementsByName(elementName) {

    return document.getElementsByName(elementName);
}