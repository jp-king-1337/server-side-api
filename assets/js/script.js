// Make a request to the Star Wars API
// Get the first 10 starships

// From the starship data you receive, output the X-Wing’s model name
// and manufacturer to the DOM(Window)

// Try making the request with fetch() and jQuery ($.get())

var baseURL = "https://api.giphy.com/v1/gifs/";
var apiKey = `YV0aGSUKbpJiEmsSihIsu8tHNCjIH2Uk`;
var url = baseURL + `random?api_key=${apiKey}&tag=elmo&rating=g`;

function handleResponse(res) {
    return res.json();
}

function outputData(res) {
    console.log(res.data);
    // var xwing = (data.results[6]);
    // var p = document.createElement("p");

    // p.innerText = xwing.name;
    // document.body.append(p);
}

// fetch(url)
//     .then(handleResponse)
//     .then(outputData);

$.get(url).then(outputData);