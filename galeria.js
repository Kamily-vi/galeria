"use strict"
 
const imagens = [
    "./img/imagens 1.png",
    "./img/imagens 4.png",
    "./img/imagens 6.png",
    "./img/imagens 8.png",
    "./img/imagens 2.png",
    "./img/imagens 3.png",
    "./img/imagens 5.jpg",
    "./img/imagens 7.jpg"
]

const limparId = (url) => url.replace("./img/", "").slipt(".")[0].replace(" ", "-")
 
const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")
 
    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-items")
    novoLink.innerHTML = `<img src="${urlImagem}" alt=""></img>`
 
    container.appendChild(novoLink)
}
 

const carregarGaleria = (imagens) => imagens.forEach(criarItem)

const criarSlide = (urlImagem, indice) => {
    const container = document.querySelector(".slide-container")
    const novoDiv = document.createElement("div")
    novoDiv.classList.add("slide")
    novoDiv.id = limparId(urlImagem)

    const indiceAnterior = indice <= 0 ? arr.length - 1 : indice - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice >= arr.length -1 ? 0 : indice + 1
    const iDProximo = limparId(arr[indiceProximo])

    novoDiv.innerHTML = `
    <div class="imagem-container">
    <a href="" class="icones fechar">&#10006;</a>
    <a href="${idAnterior}" class="icones anterior">&#171;</a>
    <img src="${urlImagem}" alt="">
    <a href="${iDProximo}" class="icones proximo">&#187;</a>
    </div>
`
    container.appendChild(novoDiv)

}

const carregarSlide = (imagens) => imagens.forEach(criarSlide)
 
carregarGaleria(imagens)
carregarSlide(imagens)