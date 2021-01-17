const omdbKey = omdb.OMDB_KEY

let button = document.getElementById("search")
7
button.addEventListener("click", function(){
    let inputTitle = document.getElementById("titleInput").value
    fetch("http://www.omdbapi.com/?type=movie&s=" + inputTitle + "&apikey=" + omdbKey )
    .then(resp => resp.json())
    .then(movies => console.log(movies))
})

function displayMovies(){
    

}