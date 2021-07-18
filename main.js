function Add(){
    var LetsAddTodayShallWe =
     Number(document.getElementById("firststartoftheday").value) + Number(document.getElementById("contuiningtheday").value)
    console.log(LetsAddTodayShallWe);
    }
    function Subtract(){
    var LetsSubtractTodayShallWe = 
        Number(document.getElementById("firststartoftheday").value) - 
        Number(document.getElementById("contuiningtheday").value);
    console.log(LetsSubtractTodayShallWe);
    }
function Multi(){
    var LetsMultiplyTodayShallWe = 
    Number(document.getElementById("firststartoftheday").value) *
    Number(document.getElementById("contuiningtheday").value);
console.log(LetsMultiplyTodayShallWe);
}
function Divide(){
    var LetsDivideTodayShallWe = 
    Number(document.getElementById("firststartoftheday").value) /
    Number(document.getElementById("contuiningtheday").value);
console.log(LetsDivideTodayShallWe);
}