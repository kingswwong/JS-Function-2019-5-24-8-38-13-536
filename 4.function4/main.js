function countWords(message){
    let arr = message.split(" ")
    let count = 0;
    let reg =  /^[a-zA-Z]/;
    for(let i = 0;i < arr.length;i++){
        if(reg.test(arr[i])){
            count++;
        }
    }
    return count;
}
countWords('Good morning, I love JavaScript.');
