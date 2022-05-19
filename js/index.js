const ulCart = document.querySelector(".ulCarrinho")
const ulVitrine = document.querySelector(".cards")
let quantidade = 0
let valorTotal = 0
let pTotal = document.querySelector(".valor-total")
let pQuant = document.querySelector(".quantidade")

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
    const divAdd       = document.createElement("div");
    const bAddCarrinho = document.createElement("button");

    imgCard.src             = img
    imgCard.alt             = nomeItem
    h4Categoria.innerHTML   = categoria
    h2Produto.innerHTML     = nomeItem
    pDescricao.innerHTML    = descricao
    pValor.innerHTML        = `R$ ${valor}.00`
    bAddCarrinho.innerHTML  = addCarrinho

    ulVitrine.appendChild(liCard)
    liCard.appendChild(imgCard)
    liCard.appendChild(h4Categoria)
    liCard.appendChild(h2Produto)
    liCard.appendChild(pDescricao)
    liCard.appendChild(pValor)
    liCard.appendChild(divAdd)
    divAdd.appendChild(bAddCarrinho)

    liCard.classList.add("cardBox")
    pValor.classList.add("preco")
    bAddCarrinho.classList.add("addCarrinho")

    const novoItem        = {}
    novoItem.img          = img
    novoItem.nome         = nomeItem
    novoItem.valor        = valor
    novoItem.removeCart   = "Remover produto"

    //ADICIONAR AO CARRINHO
    bAddCarrinho.addEventListener("click", ()=>{
      
      criarCardCarrinho(novoItem)

      valorTotal += novoItem.valor

    })
    
  }
}
criarCardVitrine(data)


//////////////
// CRIAR CARD CARRINHO

function criarCardCarrinho(itensCart){

    const id          = itensCart.id
    const img         = itensCart.img
    const nome        = itensCart.nome
    const valor       = itensCart.valor

    const liCart       = document.createElement("li")
    const divImg       = document.createElement("div")
    const imgCart      = document.createElement("img")
    
    const divPCart     = document.createElement("div")
    const h2Cart       = document.createElement("h2");
    const pValor       = document.createElement("p");
    const bRemove      = document.createElement("button");

    imgCart.src             = img
    imgCart.alt             = nome
    h2Cart.innerHTML        = nome
    pValor.innerHTML        = `R$ ${valor}`
    bRemove.innerText       = `Remover produto`    

    ulCart.appendChild(liCart)
    liCart.appendChild(divImg)
    divImg.appendChild(imgCart)

    liCart.appendChild(divPCart)
    divPCart.appendChild(h2Cart)
    divPCart.appendChild(pValor)
    divPCart.appendChild(bRemove)

    imgCart.classList.add("imgCar")
    h2Cart.classList.add("h2Carrinho")
    bRemove.classList.add("removerProd")
    liCart.classList.add("liCarrinho")

    quantidade++
    let saida = valorTotal + itensCart.valor
    pQuant.innerText = `${quantidade}`
    pTotal.innerText = `R$ ${saida}.00`

    if(quantidade >= 1){
      let vazio = document.getElementById('carrinho-vazio')
      vazio.style.display = 'none'

      let caixa = document.getElementsByClassName('caixa')[0]
      caixa.style.display = 'block'
    }


    //REMOVER DO CARRINHO
    bRemove.addEventListener("click", ()=>{
      
      quantidade--

      valorTotal -= valor

      pQuant.innerText = `${quantidade}`
      pTotal.innerText = `R$ ${valorTotal}.00`

      ulCart.removeChild(liCart)

      if(quantidade < 1){
        let vazio = document.getElementById('carrinho-vazio')
        vazio.style.display = 'block'

        let caixa = document.getElementsByClassName('caixa')[0]
        caixa.style.display = 'none'
      }
    })
}