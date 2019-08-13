
    var personInput = prompt('pick an odd number between 1 and 50');
for (var i = 1; i <= 50; i+=2) {
    if (i == personInput) {
        console.log('yikes ' + personInput)
        continue;

    }
    console.log('odd numbers ' + i)
}