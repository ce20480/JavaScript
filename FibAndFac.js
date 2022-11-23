function fib(n){
    // this is more of a function to understand computational complexity of O(2^n)
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
function fac(n){
    var num = 1;
    for (let i = 0; i <= n; i++){
        if (i === 0){
            num = num * 1;
        }else{
            num = num * i;
        }
    } 
    return num
}
console.log(fib(4))
console.log(fac(4))