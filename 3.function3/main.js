function alphabetSort(message){
    let arr = message.split('');
    arr.sort();
    return arr.join('')
}
alphabetSort('hello');
