const form = document.getElementById("novoItem")

form.addEventListener('submit', (evento) => {
    evento.preventDefault() //evento são os dados que são eviados no submit. Previnir o comportamento padrão

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

//toda vez que eu apertar submit, eu preciso que um elemento seja criado no meu html.

function criaElemento(nome, quantidade){
    
    //cria a li
    //<li class="item"><strong>7</strong>Camisas</li>
    const newItem = document.createElement('li')
    newItem.classList.add("item") //li tem a classe "item"
    const itemNumber = document.createElement('strong')
    itemNumber.innerHTML = quantidade 

    newItem.appendChild(itemNumber) //li puxa o strong para dentro dele
    newItem.innerHTML += nome

    //cria a ul
    //<ul class="lista">
    const list = document.getElementById("lista")
    list.appendChild(newItem) //ul puxa a li para dentro dela
    
}