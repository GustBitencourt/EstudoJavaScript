fetch('urlRequirida')
    .then(response => {
        if (response.status === 200) {
            return response.json()

        } else {
            throw new Error('Request Error');
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    })


//Post
fetch('urlRequirida', {
    method: 'POST',
    body: JSON.stringify()
})
    .then(response => {
        if (response.status === 200) {
            return response.json()

        } else {
            throw new Error('Request Error');
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    })