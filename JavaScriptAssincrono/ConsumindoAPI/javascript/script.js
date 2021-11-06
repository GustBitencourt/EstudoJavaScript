const API_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat')

//função assincrona
const getCats = async () => {
    try {
        const data = await fetch(API_URL);

        //converter pra json
        const json = await data.json(); 

        return json.webpurl;

    } catch (err) {
        console.log(err.message);

    }
}

//função assincrona
const loadImage = async () => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImage);
loadImage();

//Outra forma de realizar a funcao getcat
const getCats2 = async () => {
    
    const data = await fetch(API_URL)
        .then((response) => response.json())
        .catch((error) => console.log(error));

    return json.webpurl;    
}