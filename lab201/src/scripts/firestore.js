// Firestore
db.collection('Tour').get().then(snapshot => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        const tournee = doc.data();
        console.log(tournee);
        // Firebase values
        let concertDate = tournee.concertDate.toDate();
        let festivalName = tournee.festivalName;
        let stateForUSA = tournee.stateUSA;
        let cityName = tournee.cityName;
        let countryName = tournee.country;

        // Values to receive from the modal
        const formModal = document.querySelector('#form-add');

        formModal.addEventListener('submit', e => {
            e.preventDefault();

            let day = formModal['day'].value;
            let month = formModal['month'].value;
            let year = formModal['year'].value;
            let festival = formModal['festival'].value;
            let states = formModal['states'].value;
            let city = formModal['city'].value;
            let country = formModal['country'].value;
            const template = `
            <article class="large-card">
            <span>${day} ${month} ${year} </span>
            <p>${festival} / ${states}, ${city}, ${country}
            </article>
            `
            
            ocument.querySelector('#tour-dates .dates').innerHTML = template;
        })

    });
});
