function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient',{
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text();
        })
        .then(function (text) {
            console.log(text);
        });
}


/******************
* 2 POST long hand: /one
******************/

function postToOne(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.text()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(response){
            console.log('Success:', response);
        })
}


/******************
* 3 POST /one: Arrow Function
******************/
function postToOneArrow(){
    var url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}