document.addEventListener('DOMContendLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20)

    function control(e) {
        if(e.keyCode === 32) { // key code for space bar
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) {
            birdBottom += 50
        }
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
        console.log(birdBottom)
    }

    document.addEventListener('keyup', control)


    function generateObstacle() {
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
    }
})