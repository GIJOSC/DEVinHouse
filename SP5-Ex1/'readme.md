# Hoisting

Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

No nosso exemplo acima, como a variável mensagemDentroDoIf está dentro de uma function, a declaração da mesma é elevada (hoisting) para o topo do seu contexto, ou seja, para o topo da function.

É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.

# var

Considerando o conceito de hoisting, vamos fazer um pequeno teste usando uma variável declarada com var antes mesmo dela ter sido declarada:

void function(){ 
    console.log(mensagem); 
}();
var mensagem;

No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

Ok, mas qual é o impacto que temos quando fazemos esse tipo de uso?

Imagine que nosso código contenha muitas linhas e que sua complexidade não seja algo tão trivial de compreender.

Às vezes, queremos declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do nosso código. Ter que lidar com o escopo de função das variáveis declaradas com var (escopo abrangente) pode confundir a cabeça até de programadores mais experientes.

Sabendo das "complicações" que as variáveis declaradas com var podem causar, o que podemos fazer para evitá-las?

# let - Levando em conta o escopo de cada bloco de código

Um variável declarada com let leva em conta, não a função onde foi criada, mas sim o bloco de código de sua origem. Isso significa que se a declararmos dentro de um if(), switch() ou for(), ela será “enxergada” apenas dentro desta parte do código, dentro deste escopo específico.

Vamos ver como ficaria o código da função returnCar() com o let:

function returnCar() {

    let car = 'Land Rover';

    if (car === 'Land Rover') {

        let car = 'Ferrari';

        console.log('Dentro do if: ' + car);

    }

    console.log('Fora do if: ' + car);

}

Agora, ao realizar a chamada desta função, veremos o seguinte resultado:
Resultado de nosso código com let

Note que agora a string “Ferrari” só foi identificada dentro do if(). Fora dele a string “Land Rover” continuou a ser identificada, que era o que esperávamos.

Podemos perceber assim que usar o let nos ajuda a evitar confusões no código quanto ao escopo de execução.

Vamos ver mais um exemplo sobre essa diferença com outro recurso que usamos bastante: laços de repetição.

Imagine que queremos criar um for() que irá exibir os anos da década de 2000. Contudo, iremos definir um console.log() fora deste laço também, para conferir o índice final, da seguinte forma:

for (var i = 2000; i <= 2010; i++) {

    console.log(i);

}

console.log('Índice fora do laço de repetição: ' + i);

Ao executar este código, veremos o seguinte resultado:
Resultado de nosso for() com o var

Os anos foram corretamente exibidos, mas o índice foi reconhecido fora do for(), com o valor “2011”. Mas, como já falamos, isso não faz muito sentido.

Vamos testar o mesmo código, mas agora com o let:

for (let i = 2000; i <= 2010; i++) {

    console.log(i);

}

console.log('Índice fora do laço de repetição: ' + i);

Os anos serão exibidos da mesma forma, mas o último console irá retornar o seguinte erro:
Erro de referência na variável i

O erro informa que a variável i não foi identificada. Isso ocorreu pois essa variável só é reconhecida dentro do for(), que é o nosso objetivo de fato. Isso inclusive ajuda nosso código a ficar mais leve.

Levando em conta tudo isso, é recomendado que sempre escolhamos usar let em vez de var.

# const - Criando variáveis constantes

Nossa última maneira de declarar uma variável é por meio de const, usada para definir uma constante. Talvez pensemos: “Mas como é possível usar uma declaração de variável para criar uma constante?”

Isso pode parecer não ter sentido. Entretanto, declarar uma variável como const não significa necessariamente que seu valor não pode ser mudado. Significa que não podemos sobrescrever o seu identificador. Vamos entender isso melhor.

Vamos criar uma constante que irá conter o valor do IP de nosso site:

const IP = '127.0.0.1';

console.log(IP);

Ao executar o código acima, veremos o seguinte resultado:
Retorno de nossa constante no console

O valor da constante foi corretamente retornado.

Entretanto, vamos tentar redefinir o valor dela. Iremos usar o seguinte código para isso:

const IP = '127.0.0.1';

IP = '192.168.0.1';

console.log(IP);

Se tentarmos executar este código, veremos o seguinte resultado:
Erro retornado no console

Note que agora um erro foi retornado, informando que não podemos redefinir o valor de uma variável constante. Isso é de fato o que esperamos de uma constante.

Mas, se nossa constante for um objeto ou um array, podemos alterar suas propriedades. Vamos ver um exemplo.

Vamos criar uma constante que irá conter os valores de acesso administrativo:

const USER_ADMIN = {
    name: 'Ronaldo Braz',
    login: 'root'
};

Vamos alterar o valor da propriedade login, com o código abaixo:

USER_ADMIN.login = 'admin';

Ao executar console.log(USER_ADMIN), veremos o seguinte resultado:
Resultado de nosso objeto no console

Agora o código funcionou normalmente e a propriedade login foi alterada. Essa é uma ressalva sobre as variáveis constantes no JavaScript.

Uma outra regra interessante sobre constantes é que devemos obrigatoriamente definir um valor para ela quando a declararmos, diferentemente do que ocorre com o var e let. Imagine que simplesmente informamos o identificador de uma constante, como no código abaixo:

const SITE;

Se executarmos o código, veremos o seguinte erro:
Erro de inicialização de uma constante

Note que o erro informa que não definimos um valor para a constante em sua declaração.
