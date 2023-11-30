//

fetch('https://randomuser.me/api?results=50')
.then(response => response.json())
.then(data => {
    let people = data.results;
    displayPeople(people);
})
.catch(error => console.log(error));


function displayPeople(people) {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    people.forEach(person => {
        let personDiv = document.createElement('div');
        personDiv.textContent = `${person.name.first} ${person.name.last}`;
        resultsContainer.appendChild(personDiv);
    });
}