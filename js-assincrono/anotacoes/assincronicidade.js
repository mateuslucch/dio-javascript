/*
Assincrono
nao ocorre ou nao se efetiva ao mesmo tempo

função async retorna uma promise quando é chamada
asincrona retorna um valor, promise sera resolvida com o valor retornado
assincrona lança excessão ou valor, promise será rejeitada com o valor lançado

Promises
3 estados
1)pending
2)fulfilled
3)rejected

ex:
const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve("resolvida");
    }, 2000);
});

await pausa a execução da função assincrona e espera pela resolução da promise

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou')
    .catch((err) => console.log(err.message));

*/
//-Async/await
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {

        window.setTimeout(() => { resolve("resolvida"); }, 3000);

    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou')
        .catch((err) => console.log(err.message));

    return resolved;
}

resolvePromise();
/*
APIs

intermediar resultados do backend com o que é apresentado no frontend
json formato mais comum

fetch
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

operações no banco(post, get, put, delete, etc)

*/