
const _txtFriends = 'txtFriends';

function loopFriends() {

    let index = 1;
    const txtFriends = getElementsByName(_txtFriends);

    // For Loop
    for (const friend in txtFriends) {
        txtFriends[friend].value = `${index++}. ${txtFriends[friend].value}`;
    }

    // Array.forEach Version 1
    txtFriends.forEach(friend => console.log(friend.value));

    // Array.forEach Version 1.1
    txtFriends.forEach((friend) => console.log(friend.value));

    // Array.forEach Version 1.2
    txtFriends.forEach((friend) => { console.log(friend.value) });

    // Array.forEach Version 2 with Arrow function
    txtFriends.forEach((friend) => {

        friend.value += ' New';
        console.log(friend.value)
    });

    // Array.forEach Version 3 with external function
    txtFriends.forEach(processFriend);

}

function processFriend(friend) {

    friend.value += ' "Function"';
    console.log(`Friend: ${friend.value}`);
}

function getElementsByName(elementName) {

    return document.getElementsByName(elementName);
}