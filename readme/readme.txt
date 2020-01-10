para executar o código pelo terminal basta acessa a pasta onde o código está e digitar

node codigo.js

para complitar as alterações pelo terminal, basta acessar a pasta onde o código está e digitar

tsc codugo.js

para configurar o servidor no projeto e poder executar o código pelo browser
basta acessar o raiz do projeto e digitar: 

npm i -s live-server

feito isso acessar o raiz do projeto e digitar: npm start que o servidor npm sobe e ja abre o browser
onde podemos acompanhar a execução do projeto pelo console do navegador.


depois que executar o comando acima na raiz do projeto,
abrir um outro terminal e executar
tsc -w
o comando acima irá ficar monitorando qualquer alteração nos arquivos do projeto e quando 
encontrar automaticamente ja disponibiliza e atualiza o browser. evitando tendo que compilar o arquivo todas
as vezes que implementar uma alteração