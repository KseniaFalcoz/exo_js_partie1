var prenom = prompt('Entrez votre prénom:');
if(isNaN(prenom)){
    alert('Bonjour ' + prenom);
} else {
    alert('Verifiez votre saisie');
}