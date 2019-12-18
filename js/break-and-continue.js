while (true){
    var personInput = parseInt(prompt('pick an odd number between 1 and 50'));
    if(personInput % 2 !== 0 && personInput > 0 && personInput < 51)
        break;
}

console.log('user entered ' + personInput);

for (var i = 1; i < 50; i+=2){
    if (personInput === i){
        console.log('Yikes skipped ' + personInput)
        continue;
    }
    console.log(i)
}