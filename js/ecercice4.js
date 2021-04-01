function displayInput(){
    var firstName = document.form1.firstName.value;
    var lastName = document.form1.lastName.value;
    var city = document.form1.city.value;
    if(firstName && lastName && city){
      alert('Nom : ' + firstName + '\n' + 'Prénom : ' + lastName + '\n' + 'Ville : ' + city);
    } else {
      alert('Veuillez remplir les champs');
    }
}