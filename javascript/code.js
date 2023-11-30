let randomPeeps = [];
let inptdiv = document.getElementById("res");
let url = 'https://randomuser.me/api?results=20'

fetch('https://randomuser.me/api?results=20')
.then(response=> response.json())
.then(data => {
    randomPeeps = data.results
    console.log(randomPeeps);
   // displayPeople(randomPeeps)
return randomPeeps
});
randomPeeps.map(item => {
    inptdiv.innerHTML += `
    <div>${item.gender}</div>
    `
})
function displayPeople(people) {
    let container = document.getElementsByClassName('card')[0]  
    container.innerHTML = " "
if (people.length === 0 ) {
    document.querySelector('[empty-label]').innerText = 'Name not found.'
} else {
    document.getElementById('notFoundMessage').innerText = ''
    people.forEach(person => {
        let personDiv = document.createElement('div')
        personDiv.textContent = `${person.name.first} ${person.name.last}`
        container.appendChild(personDiv)})
    
 
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
    displayPeople(sortedPeople)
}

