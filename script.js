const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimaition()

function breatheAnimaition() {
    text.innerHTML = 'Breathe In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'
        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimaition, totalTime)