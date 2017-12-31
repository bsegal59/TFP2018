const max = process.argv[2];

let FizzBuzz = function*(){
    let num = 0 ;
    while (num<max){
        num+=1;
        let val = num;
        if (num%15===0){
            val = "FizzBuzz";
        }else if (num%5===0){
            val = "Buzz";
        }else if (num%3===0){
            val = "Fizz";
        }
        yield val;
    }
}();

for (var n of FizzBuzz){
    console.log(n)
}
