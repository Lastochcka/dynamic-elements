const board = document.querySelector('#board')
const colors = [ '#EDA1A3', '#99BDB0', '#ABBD85', '#F8C5D4', '#F57FA2', '#F27468', '#F1C69B', '#40A0B0']
const SQUARES_NUMBER = 616

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#ffffff'
    element.style.boxShadow = `0 0 2px #ffffff`

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}