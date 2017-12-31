const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator](){
        let num = 0;
        return {
            next(){
                let val;
                num+=1;
                if (num%3===0 && num%5===0){
                    val='FizzBuzz';
                }else if (num%5===0){
                    val='Buzz';
                }else if (num%3===0){
                    val='Fizz';
                }else{
                    val=num;
                }
                if(num<max) return {done:false,value:val};
                return {done:true};
            }
        }
    }
}

for (var n of FizzBuzz){
    console.log(n)
}
