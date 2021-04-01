function displayAge() {
var age = document.getElementById('age').value;
if(age) { //si la var age exist, sinon line 13
    if(isNaN(age) == false && age > 0) {
        if(age >= 18) {
            alert('Vous êtes majeur');
        } else {
            alert('Vous êtes mineur');
        }
        } else {
        alert('Entrez age valide');
    }
} else {
    alert('Entrez la valeur correcte')
}
}