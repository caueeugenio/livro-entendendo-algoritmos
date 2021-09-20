// ordenar listas de artistas dos mais tocados p os menos tocados

let artistas = [
  {
    nome_artista: "Radio Head",
    contador: 156,
  },
  {
    nome_artista: "Kishore Kumar",
    contador: 141,
  },
  {
    nome_artista: "The Black Keys",
    contador: 35,
  },
  {
    nome_artista: "Neutral Milk Hotel",
    contador: 94,
  },
  {
    nome_artista: "Beck",
    contador: 88,
  },
  {
    nome_artista: "The Strokes",
    contador: 61,
  },
  {
    nome_artista: "Wilco",
    contador: 111,
  },
];

// var artistaMaisTocado = 0;
// var artistaMenosTocado = 0;

// var teste = "";

// var teste2 = "";

// var novoArray = [];
// for (var i = 0; i < artistas.length; i++) {
//   if (artistas[i].contador > artistaMaisTocado) {
//     teste = artistas[i];
//     novoArray.push(artistas[i])
 
//   } else if (artistas[i].contador < artistaMenosTocado) {
//     teste2 = artistas[i];
//   }
//   console.log(novoArray)
// }
// console.log(`O artista mais tocado é o ${teste.nome_artista}, ele tem o total de ${teste.contador} reproduções`);

function artistaMaisTocado(array){
  let maiorElemento = array[0];
  let maiorIndice = 0;

  for(let i = 1; i < array.length; i++){
    if(array[i].contador > maiorElemento.contador){
      maiorElemento = array[i];
      maiorIndice = i;
    }
  }
  return maiorIndice;
}

function selectionSort(array){
  let arraySortiado = [];
  let length = array.length;

  for(let i = 0; i < length; i++){
    let maiorIndice = artistaMaisTocado(array);
    arraySortiado.push(array.splice(maiorIndice, 1)[0]);
  }
  return arraySortiado;
}

function encontreArtista() {
  let artistas = [
    {
      nome_artista: "Radio Head",
      contador: 156,
    },
    {
      nome_artista: "Kishore Kumar",
      contador: 141,
    },
    {
      nome_artista: "The Black Keys",
      contador: 35,
    },
    {
      nome_artista: "Neutral Milk Hotel",
      contador: 94,
    },
    {
      nome_artista: "Beck",
      contador: 88,
    },
    {
      nome_artista: "The Strokes",
      contador: 61,
    },
    {
      nome_artista: "Wilco",
      contador: 111,
    }];
    console.log(selectionSort(artistas));
}
  

encontreArtista();