// auth load and changes
auth.onAuthStateChanged(userCred => {
    const logout = document.querySelector('#logout-btn');
    const add = document.querySelector('.add-btn');
    const modalContainer = document.querySelector('#modal');
    if (userCred) {
        console.log('Admin logged in :', userCred);
        logout.hidden = false;
        add.hidden = false;
        modalContainer.hidden = false;
    } else {
        console.log('Admin logged out');
        logout.hidden = true;
        add.hidden = true;
        modalContainer.hidden = true;
    }
})

// logout
const logout = document.querySelector("#logout-btn");
    logout.addEventListener('click', (e) => {
        e.preventDefault(); 

        auth.signOut();
})