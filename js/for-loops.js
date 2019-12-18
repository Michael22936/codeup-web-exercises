
//shows the numbers that are multiple of it
function showMultiplication(num) {
    for (var i = 1; i <= 10; i++){

        console.log(num + ' X ' + i + ' = ' + (num * i));

    }

}

showMultiplication(2);

//see if the number entered in is odd or even
for(var i = 1; i<=10 ;i++){
    var num = Math.floor(Math.random() * 181) + 20;
    if(num % 2 === 0){
        console.log(num + " is Even");
    }else{
        console.log(num + " is Odd");
    }
}

// reduces from 100 by 5
for (var i = 100; i >= 5; i-= 5){
    console.log(i)
}

//makes a pyrimide out of numbers
for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i))
}