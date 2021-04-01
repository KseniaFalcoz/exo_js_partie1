function displayResult(){
var firstNumber = document.getElementById('first').value;
var secondNumber = document.getElementById('second').value;
var result = firstNumber * secondNumber;
    if(result) {
        alert('Résultat:' + result);
    } else {
        alert('Tapez des chiffres');
    }
}