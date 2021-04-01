function displayInput(){
    var nom = document.form1.nom.value;
    var prenom = document.form1.prenom.value;
    var ville = document.form1.ville.value;
    if(nom && prenom && ville){
      alert('Nom : ' + nom + '\n' + 'Prenom : ' + prenom + '\n' + 'Ville : ' + ville);
    } else {
      alert('Veuillez remplir les champs');
    }
}