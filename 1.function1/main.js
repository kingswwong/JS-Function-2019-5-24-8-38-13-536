function reverseString(message){
    let temp = "";
    for(let i = message.length - 1;i >= 0;i--){
        temp += message.substr(i, 1);
    }
    return temp;
}
reverseString('hello');
