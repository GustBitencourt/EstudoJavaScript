const text = "Eu estou na mentoria da Dio";

console.log(text.replace('Eu estou', 'Nós estamos'));


const [ano, mes, dia] = '2021-10-21'.split('-');
console.log(ano, mes, dia);
console.log(`${dia} de ${mes} de ${ano}`);


const dataDio = '2021-10-21';
for(i in dataDio) {
    console.log(dataDio[i]);
}

