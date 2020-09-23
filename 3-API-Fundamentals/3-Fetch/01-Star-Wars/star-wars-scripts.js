let starWarsPlanetList = document.querySelector('ul');

fetch('https://swapi.dev/api/planets')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let planets = json.results;

    for(p of planets){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPlanetList.appendChild(listItem);
    }

   
});






