
function alunosAprovados(alunos, mediaFinal) {

    let aprovados = [];

    for (aluno of alunos) {

        if (aluno.nota >= mediaFinal) {
            aprovados.push(aluno.nome);
        }
    }
    return aprovados;
}

// solução aula
function alunosAprovados2(alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

const mediaFinal = 2;

console.log(`Lista de aprovados: ${alunosAprovados(alunos, mediaFinal)}`);
console.log(`Lista de aprovados(solução aula): ${alunosAprovados2(alunos, mediaFinal)}`);