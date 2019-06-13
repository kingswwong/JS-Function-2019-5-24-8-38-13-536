function palindrome(message){
    let flag = false;
    for(let i = 0;i < message.length / 2;i++){
        if(message.charAt(i) !== message.charAt(message.length - i - 1)){
            flag = true;
        }
    }
    return !flag;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
