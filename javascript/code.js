let randomPeeps = []
let assendingData = true

fetch('https://randomuser.me/api?results=20')
.then(response=> response.json())
.then(data => {
    randomPeeps = data.results
    displayPeople(randomPeeps)
});
function displayPeople(people) {
    let container = document.getElementsByClassName('card')[0]  
    container.innerHTML = " "
if (people.length === 0 ) {
    document.getElementById('notFoundMessage').innerText = ''
    people.forEach(person => {
        let personDiv = document.createElement('div')
        personDiv.textContent = `${person.name.first} ${person.name.last}`
        container.appendChild(personDiv)})
} else {
    document.querySelector('[empty-label]').innerText = 'Name not found.'
 
}
}
//to search random people
function filterNames() {
    let searchInput = document.querySelector('[data-input]')
    let searchTerm = searchInput.value.toLowerCase()
    if (searchTerm === '') {
        displayPeople(randomPeeps);
    } else {
        let filteredPeople = randomPeeps.filter(person =>
            person.name.first.toLowerCase().includes(searchTerm)
        );
        displayPeople(filteredPeople)
    }
}
let filtbtn = document.querySelector('[data-btn]').addEventListener('input', filterNames)
function toggleSort() {
    let sortedPeople = randomPeeps.slice().sort((a, b) =>
    a.name.first.localeCompare(b.name.first)
    )
    randomPeeps = randomPeeps === sortedPeople ? sortedPeople.reverse() : sortedPeople
    displayPeople(peopleData)
}
let srtbtn = document.querySelector('[data-btn]').addEventListener('click',toggleSort)



// search for specific name
//
