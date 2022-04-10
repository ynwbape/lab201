// Les champs
const loginField = document.querySelector('#login-field'); 

// login
loginField.addEventListener('submit', (e) => {
    e.preventDefault();
    // récupérer les infos
    const email = loginField['login-email'].value;
    const password = loginField['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(userCred => {
        console.log(userCred);
        window.location.href = '../index.html';
    }).catch(error => console.log('there is an '+error));
})

