const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 1000);
});


const simpleFunction = async () => {
    const data = await asyncTimer();
    console.log(data);

    const dataJSON = await fetch('Url').then(res => 
        res.json());

    return data;
}

simpleFunction().then(data => {
    console.log(data);

}).catch(err => {
    console.log(err);
})