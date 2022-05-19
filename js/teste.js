
const ulVitrine = document.querySelector(".cards")


// function listaProdutos(listaProd){

//   //PERCORRENDO ARRAY DE FUNCIONARIOS
//   for(let i = 0; i < listaProd.length; i++){
    
//     const produto = listaProd[i]

//     const cardProduto = criarCardVitrine(produto)

//     // ulVitrine.appendChild(cardProduto)
    
//     console.log(produto)
//   } 
// }
// listaProdutos(data)

function criarCardVitrine(produto) {
  
  //for para a criação dos produtos
  for (let i = 0; i < data.length; i++) {
    const id          = data[i].id
    const img         = data[i].img
    const nomeItem    = data[i].nameItem
    const descricao   = data[i].description
    const valor       = data[i].value
    const addCarrinho = data[i].addCart
    const categoria   = data[i].tag

    const liCard       = document.createElement("li")
    const imgCard      = document.createElement("img")
    const h4Categoria  = document.createElement("h4");
    const h2Produto    = document.createElement("h2");
    const pDescricao   = document.createElement("p");
    const pValor       = document.createElement("p");
    const pAddCarrinho = document.createElement("p");

    imgCard.src             = img
    imgCard.alt             = nomeItem
    h4Categoria.innerHTML   = categoria
    h2Produto.innerHTML     = nomeItem
    pDescricao.innerHTML    = descricao
    pValor.innerHTML        = valor
    pAddCarrinho.innerHTML  = addCarrinho

    ulVitrine.appendChild(liCard)
    liCard.appendChild(imgCard)
    liCard.appendChild(h4Categoria)
    liCard.appendChild(h2Produto)
    liCard.appendChild(pDescricao)
    liCard.appendChild(pValor)
    liCard.appendChild(pAddCarrinho)

    liCard.classList.add("cardBox")
    pValor.classList.add("preco")
    pAddCarrinho.classList.add("addCarrinho")
    
    // console.log(liCard)

  }
}
criarCardVitrine(data)
console.log(ulVitrine)