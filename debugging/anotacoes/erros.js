/*
ECMAScript error
ocorrem em tempo de execução
composto por
    mensagem
    nome
    linha
    Call Stack

DOMException
erros relacionados ao DOM
relacionando codigo javascript a página da web
erros referentes a estrutura da arvore de elemnentos dentro da pagina da web
ex: 
    string com caracter invalido
    inserir no em local invalido...


-throw, return, try/catch (espiar java)

function verificaPalindromo(string) {
    if (!string) throw "String invalida!"; // throw dá um comportamento de erro
    return string === string.split("").reverse().join("");
}

function tryCatchExemplo(string) {
    try {
        verificaPalindromo(string)
    }
    catch (e) {
        throw e;
    }
    finally {
        console.log("A string enviada foi: " + string);
    }
}
tryCatchExemplo("ala");


- Objeto Error
new Error(message, filename, lineNumber)
todos os parametros são opcionais
const MeuErro = new Error('mensagem inválida');
throw MeuErro;
*/