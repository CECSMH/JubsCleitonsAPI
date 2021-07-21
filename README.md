# JubsCleitonsAPI
Api CRUD de carros, capaz de criar, deletar, editar e lista carros conforme solicitado.
<br>
<br>
<h2>Index</h2>
<ul>
<li><a href="#Tecnologias">Tecnologias</a></li>
<li><a href="#Rotas">Rotas</a></li>
<li><a href="#instalação">Instalação</a></li>
<li><a href="#Como-usar">Como usar</a></li>
</ul>

<br><br><br>

## Tecnologias

<ul>
<li>Node.js</li>
<li>Express</li>
<li>Cors</li>
<li>MongoDB</li>
<li>Mongoose</li>
</ul>
<br><br>


## Rotas 
<br>metodo: rota (vulgo), função<br><br>
<ul>
<li>POST:<code> http://localhost:8080/store/</code> (/store/), Criar</li>
<li>PUT:<code> http://localhost:8080/store/update/60f77f4974180535acd75c01</code> (/store/update/:id), Editar</li>
<li>DELETE: <code>http://localhost:8080/store/delete/60f77f4974180535acd75c01</code> (/store/delete/:id), Deletar</li>
<li>GET:<code>http://localhost:8080/store/fetch</code>(/store/fetch), Listar todos</li>
<li>GET:<code>http://localhost:8080/store/fetch/60f77f4974180535acd75c01</code>(/store/fetch/:id), Buscar um</li>
<li>GET:<code>http://localhost:8080/store/filter?</code>(/store/filter?brand=fiat&model=mile...), Busca filtrada</li>
</ul>
<br>
<br>

## Instalação
<p>Primeiro, certifique-se de que tem todos os recursos abaixo instalados</p>
<ol>
<li><a href="https://nodejs.org/en/">Node.js </a></li>
<li><a href="https://docs.npmjs.com/cli/v7/commands/npm-install">npm</a> ou <a href="https://yarnpkg.com/getting-started/install">yarn</a></li>
<li><a href="https://insomnia.rest/download">Insomnia</a></li>
<li><a href="https://www.mongodb.com/try/download/community">MongoDB</a></li>
</ol>
<p>Segundo, Faça o download do projeto .zip</p>
<ol>
<li>Extraia onde desejar</li>
<li>Abra o terminal ou cmd na pasta onde você estraiu e execute o comando <code>npm install</code> ou <code>yarn install</code></li>
<li>Nesse mesmo terminal, execute o comando <code>npm start</code> ou <code>yarn start</code> logo apos a finalização da instalação</li>
<li>ONLINE! a API está rodando na porta 8080.</li>
</ol>
<br>
<br>

## Como usar
<p>Com a api rodando, e o insomnia aberto podemos começar.</p>
<ol>
<li>Criar um novo resgistro de carro, use o metodo POST e a rota<code> http://localhost:8080/store/</code><p>O corpo da requisição deve ser feito em notação json, seguindo o seguinte pattern:</p> 

```
{
	"brand" : String,
	"model" : String,
	"version" : String,
	"year" : Number,
	"mileage" : Number,
	"transmission" : String,
	"price" : Number
}
```
	
	
Exemplo:

```
{
	"brand" : "Fiat",
	"model" : "Uno",
	"version" : "Mile",
	"year" : 2008,
	"mileage" : 50000,
	"transmission" : "manual",
	"price" : 14000
}
```

caso uma dessas caracteristicas não seja preenchida, a api retornará erro(codigo 400), e um aviso de que a respectiva caracterista está faltando<br>
caso tenha sucesso, retornará a propria requisição (codigo 200).
</li><br>
<li>Para listar todos os carros registrados, use o metodo GET e a rota<code>http://localhost:8080/store/fetch</code>, a api retornará todos os carros em notação JSON em ordem crescente de ano.
</li><br>
<li>Para buscar um registro em especifico, use o metodo GET e a rota:<br> <code>http://localhost:8080/store/fetch/id_do_registro_que_quer_buscar</code> <br>exemplo <code>http://localhost:8080/store/fetch/60f77f4974180535acd75c01</code>
<p>A api retornará o respectivo registro ou caso não exista, restornará erro 404.</p>
</li><br>
<li>Para editar qualquer carro registrado, use o metodo PUT e a rota:<br> <code>http://localhost:8080/store/update/id_do_registro_que_quer_editar</code> <br>exemplo <code>http://localhost:8080/store/update/60f77f4974180535acd75c01</code><br>
use notação JSON no corpo da requisição com uma ou mais caracteristicas que quer editar:
	
```
{
	"caracteristica" : "nova informação",
	"caracteristica" : "nova informação"
}
```

Exemplo:
	
```
{
  	"brand" : "ford",
	"model" : "fusion",
 	"mileage" : 20000,
}
```
	
</li>
<li>Para deletar qualquer carro, use o metodo DELETE e a rota:<br> <code>http://localhost:8080/store/delete/id_do_veiculo_que_sera_deletado</code> exemplo: <code>http://localhost:8080/store/delete/60f77f4974180535acd75c01</code>
</li>
<li>Para realizar uma busca com filtro, use o metodo GET e a rota: <code>http://localhost:8080/store/filter?"caracteristicas&range..."</code><br>
exemplos de uso:<br> Filtrar por marca e ano, <code>http://localhost:8080/store/filter?brand=fiat&year=2007</code>.<br>
Filtrar por quilometragem e preço, <code>http://localhost:8080/store/filter?mileage=30000&price=23000</code>.<br>
Filtrar por range de preço e range de ano(adicione endPrice e endYaer)<br> <code>http://localhost:8080/store/filter?price=20000&endPrice=50000&year=2008&endYear=2019</code>.<br>
E possivel filtrar por qualquer caracteristica simultaneamente<br> <code>http://localhost:8080/store/filter?price=20000&endPrice=50000&brand=fiat&mileage=50000&transmission=manual</code>

</li>
</ol>


