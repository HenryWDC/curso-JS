aprendendo a converter string para numero e numero para string, para fazer isso só temos que escrever Number(valor) ou String(valor)
também vamos usar a crase `` para criar um string tamplete para facilitar no uso das variaveis dentro de um texto dentro das crases temos que usar um place holder ex: `texto e texto ${variavel}texto e texto.`


formartar string

variavel string.legth informa o tamanho da string
variavel string.toUpperCase coloca toda a string em maiusculo
variavel string.toLowerCase coloca toda a string em minusculo

formatar numero

variavel numero.toFixed(numeros de casa depois do ponto)
variavel numero.toLocalString('pt-BR', {style: 'currency', currenry: 'BRL'}) usar quando se tratar de um salario.