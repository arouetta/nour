function hideIt()

{

    document.getElementById("alert").style.display="block";

}
SignUp.addEventListener('click', e => {e.preventDefault();



    alert.style.display = "none";

    // TODO:CHECK THE EMAIL IS VALID

    var promise = auth.createUserWithEmailAndPassword(email.value, pass.value);

    promise.catch(e => {

        showAlert(e.message);

        formulaire.reset();

    })

    showAlert('you just signed up ! you can sign in now')

    auth.signOut();

    formulaire.reset();})



    