
const ulVitrine = document.querySelector(".cards")

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
    const form         = document.createElement("form");
    const pAddCarrinho = document.createElement("p");

    imgCard.src             = img
    imgCard.alt             = nomeItem
    h4Categoria.innerHTML   = categoria
    h2Produto.innerHTML     = nomeItem
    pDescricao.innerHTML    = descricao
    pValor.innerHTML        = `R$ ${valor}`
    pAddCarrinho.innerHTML  = addCarrinho

    ulVitrine.appendChild(liCard)
    liCard.appendChild(imgCard)
    liCard.appendChild(h4Categoria)
    liCard.appendChild(h2Produto)
    liCard.appendChild(pDescricao)
    liCard.appendChild(pValor)
    liCard.appendChild(form)
    form.appendChild(pAddCarrinho)

    liCard.classList.add("cardBox")
    pValor.classList.add("preco")
    form.classList.add("formulario")
    pAddCarrinho.classList.add("addCarrinho")

  }
}
criarCardVitrine(data)

//////////////
// DADOS A ENVIAR PARA O CARRINHO

const formulario = document.querySelector(".formulario")
formulario.addEventListener("click", enviarCarrinho)

let arrCarrinho = []

function enviarCarrinho(event){
  
  // event.preventDefault();
  // console.log('evento: ', event);
  console.log('current target: ', event.currentTarget);
  console.log('target: ', event.target);

  const novoItem        = {}
  novoItem.img          = data.img
  novoItem.nome         = data.nameItem
  novoItem.valor        = data.value
  novoItem.removeCart   = "Remover produto"
  
  arrCarrinho.push(novoItem)
}
enviarCarrinho(data)
console.log(arrCarrinho)

//////////////
// CRIAR CARD CARRINHO

function criarCardCarrinho(itensCart){

  const ulCart = document.querySelector(".ulCarrinho")

  for(let i = 0; i < arrCarrinho.length; i++){

    const img         = arrCarrinho[i].img
    const nome        = arrCarrinho[i].nome
    const valor       = arrCarrinho[i].valor
    const removeCart  = arrCarrinho[i].removeCart

    const liCart       = document.createElement("li")
    const divImg       = document.createElement("div")
    const imgCart      = document.createElement("img")
    
    const divPCart     = document.createElement("div")
    const h2Cart       = document.createElement("h2");
    const pValor       = document.createElement("p");
    const pRemove      = document.createElement("p");

    imgCard.src             = img
    imgCard.alt             = nome
    h2Produto.innerHTML     = nome
    pValor.innerHTML        = `R$ ${valor}`
    pRemove.innerHTML       = removeCart

    ulCart.appendChild(liCart)
    liCart.appendChild(divImg)
    divImg.appendChild(imgCart)

    liCart.appendChild(divPCart)
    divPCart.appendChild(h2Cart)
    divPCart.appendChild(pValor)
    divPCart.appendChild(pRemove)

    imgCart.classList.add("imgCar")
    h2Cart.classList.add("h2Carrinho")
    pRemove.classList.add("removerProd")
  }

}
criarCardCarrinho(arrCarrinho)