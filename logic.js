function insert(num){
    document.getElementById('output').innerHTML += num;
    console.log('Function called')
}
function clearText(){
    document.getElementById('output').innerHTML = "";
    console.log('clear called');
}
function bsp(){
    var exp = document.getElementById('output').innerHTML;
    exp = exp.substring(0,n-1);
    document.getElementById('output').innerHTML = exp; 

}
function equals(){
    var exp = document.getElementById('output').innerHTML;
    console.log(exp);
    if(exp){
        exp = eval(exp);
        document.getElementById('output').innerHTML = exp;
        console.log("After evaluation: "+exp);
        
    }
}