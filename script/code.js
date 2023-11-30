//fetch data from the api

fetch('https://randomuser.me/api?results=20')
.then(response => response.json())
.then(data => {
    let people = data.results;
    displayPeople(people);
})
.catch(error => console.log(error));

//display people
function displayPeople(people) {
    let resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    people.forEach(person => {
        let personDiv = document.createElement('div');
        personDiv.textContent = `${person.name.first} ${person.name.last}`;
        resultsContainer.appendChild(personDiv);
    });
}


//SEARCH FUNCTIONALITY
let searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  let searchTerm = searchInput.value.toLowerCase();
  let peopleDivs = document.querySelectorAll('#resultsContainer div');
  
  peopleDivs.forEach(personDiv => {
    let personName = personDiv.textContent.toLowerCase();
    if (searchTerm === '') {
      personDiv.style.display = 'block';
    }else if (personName.includes(searchTerm)) {
        personDiv.style.display = 'block';
    }else {
        personDiv.style.display = 'none';
    }
});

let notFoundMessage = document.getElementById('notFoundMessage');
notFoundMessage.style.display = 'none';
});

//SORT
let ascendingOrder = true;
let sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', () => {
  let peopleDivs = document.querySelectorAll('#resultsContainer div');
  let sortedPeople = Array.from(peopleDivs).sort((a, b) => {
    let nameA = a.textContent.toLowerCase();
    let nameB = b.textContent.toLowerCase();
    if (ascendingOrder) {
      return nameA.localeCompare(nameB);
    }else {
        return nameB.localeCompare(nameA);
    }
});

sortedPeople.forEach(personDiv => {
    resultsContainer.appendChild(personDiv);
});

ascendingOrder = !ascendingOrder;
});
