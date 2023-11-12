const API_KEY = "ADHzPOTYLNDYKUj27qLZPT8Ea6M";
const API_URL = "https://ci_jshint.herokuapp.com/api";
const resultsModal = new bootstrap.modal(document.getElementById("resultsModal"));


document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }

}
