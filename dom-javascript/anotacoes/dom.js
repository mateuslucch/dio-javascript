/*
dom - document object model

padrao de como acessar e modificar os elementos html de uma página

dom vs bom
 bom - browser object model
tudo que está dentro da janela do browser (document(dom está aqui), location, hisotry, screen, navigator)


MÉTODOS

estrutura html - tags, classe, id(unico)

<h1 id='umaid'></h1>
document.getElementById('umaid');  // retorna unico valor, id é unica
<li> projeto qqr</li>
document.getElementsByTagName('li'); // retorna array com todos elementos
<h1 classe='umaclasse'></h1>
document.getElementsByClassName('umaclasse'); // retorna array com todas classes

document.querySelectorAll('.uma_classe .outra_classe #umid li'); //busca todos elementos com uma das classes, id ou nome da tag

document.createElement(element) //cria um novo elemento html
document.removeChild(element) //remove um elemento de um parent
document.appendChild(element) //adiciona em um parent
document.replaceChild(new,old) //troca um elemento old por new

ESTILOS

Element.classList

const meuElemento = document.getElementById('meu elemento')

meuElemento.classList.add('novoestilo'); // adiciona classe "novoestilo"
meuElemento.classList.remove('classe'); //remove a classe do elemento
meuElemento.classList.toggle('darkmode'); //remove ou adiciona a classe, dependendo de ja existir ou não

//css

document.getElementsByTagName('p').style.color = "blue"; // adiciona estilo a p, acessando css do elemento diretamente

EVENTOS

EVENTOS DE Mouse:
mouseover,mouseout
mouse clique:
click,dbclick
atualização:
Change,load

acionando eventos:

const botao = document.getElementById('meubotao');

botao.addEventListener('clic',funcao);  //(evento,fução)

//dentro do html:
<h1 onclick='mudatexto(this)'>clique aqui</h1>

<script>
    function  mudatexto(id) {
        IdleDeadline.innerHTML = "Mudei!"; //altera o valor de clique aqui da tag h1
    }
</script>

*/