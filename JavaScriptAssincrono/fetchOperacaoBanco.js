fetch('https://api-endereco.com/', {
    method: 'GET',
    cache: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json))

    //retorna promisse


//EXEMPLO 2
fetch('https://api-endereco.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json))

//retorna promisse