console.log("Chamar API com fetch");

fetch('https://api.github.com/orgs/facebook/repos', {
    method: 'GET',
})
.then((res) => res.json())
.then(data => console.log(data));




console.log("\nAsync para chamar APIS");

async function getOrg() {

    try {
        const response = await fetch("/repos", {
            method: 'GET'
        })
        const repositories = await response.json();

    } catch {
        alert("Couldn't get repositories");
    }
}

