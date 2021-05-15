const createCardNode = ()=>{
        const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('Agenda/Topic                   SAAS-0000')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)