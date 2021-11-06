new Error(message, fileName, lineNumber);
//parametros opcionais

const meuErro = new Error("Meu erro foi estar ao seu lado!");
meuErro.name = "Nome Personalizado";
throw meuErro;


