const addElement = document.querySelector('.add')
const input = document.querySelector('.input')
const list = document.querySelector('ul')
const total = document.querySelector('.count')
let index = 0

addElement.addEventListener('click', ()=>{
    if (input.value){
        CreateElement()
    }
    input.value = ''
})

function CreateElement(){
    index++
    total.textContent = index
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.textContent = input.value
    li.classList.add('list__item')
    btn.classList.add('remove')
    btn.innerText = 'Remove'
    li.appendChild(btn)

    list.appendChild(li)

    btn.addEventListener('click', (e)=>{
        list.removeChild(li)
        index--
        total.textContent = index
    })
}





