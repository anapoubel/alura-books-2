let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosDaAPI();

async function getLivrosDaAPI() {
   const res = await fetch(endPointDaAPI);
   livros = await res.json();
   let livrosComDesconto = aplicarDesconto(livros);
   exibirLivrosNaVitrine(livrosComDesconto)
}