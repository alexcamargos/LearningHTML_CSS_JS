document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')
    const pause = document.querySelector('.pause')
    const gameOver = document.querySelector('.gameover')

    const width = 10

    // First div in our grid.
    let currentIndex = 0
    // First div in our grid.
    let appleIndex = 0
    let currentSnake = [2, 1, 0]
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
    let paused = false

    // To start, and restart the game
    function startGame() {
        gameOver.textContent = ''
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        pause.disabled = false
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2, 1, 0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    // Pause/unpause the game.
    pause.addEventListener('click', () => {
        if (paused) {
            pause.textContent = 'paused'
            paused = false
            interval = setInterval(moveOutcomes, intervalTime)
        } else {
            pause.textContent = 'unpause'
            paused = true
            clearInterval(interval)
        }
    })

    // Function that deals with all the ove outcomes of the Snake.
    function moveOutcomes() {

        // deals with hitting border ans snake hitting self.
        if (
            // If snake hits bottom.
            (currentSnake[0] + width >= (width * width) && direction === width) ||
            // If snake hits right wall.
            (currentSnake[0] % width === width - 1 && direction === 1) ||
            // If snake hits left wall.
            (currentSnake[0] % width === 0 && direction === -1) ||
            // If snake hits the top.
            (currentSnake[0] - width < 0 && direction === -width) ||
            // If snake goes into itself.
            squares[currentSnake[0] + direction].classList.contains('snake'))
                {
                    gameOver.textContent = 'Game over!'
                    // This will clear the interval if any of the above happen.
                    return clearInterval(interval)
                }

        // Removes last item of the array and shows it.
        const tail = currentSnake.pop()

        // Removes class of snake from the TAIL.
        squares[tail].classList.remove('snake')

        // Gives direction to the head of the array.
        currentSnake.unshift(currentSnake[0] + direction)

        // Deals with snake getting apple.
        if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')
    }

    // Generate new apple once apple is eaten.
    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
            // Making sure apples don't appear on the snake.
        } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
    }

    // Assign function to keycodes.
    function control(event) {
        switch (event.key) {
            // If we press the up arrow, the snake will go back ten divs, appearing to go up.
            case "ArrowUp":
                direction = -width;
                break;
                // If we press down, the snake head will instantly appear in the div ten divs from where you are now.
            case "ArrowDown":
                direction = +width;
                break;
                // If we press left, the snake will go left one div.
            case "ArrowLeft":
                direction = -1;
                break;
                // If we press the right arrow on our keyboard, the snake will go right one.
            case "ArrowRight":
                direction = 1;
                break;
        }
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
})