var firstName = prompt('Entrez votre prénom:');
if(isNaN(firstName)){
    alert('Bonjour ' + firstName);
} else {
    alert('Verifiez votre saisie');
}