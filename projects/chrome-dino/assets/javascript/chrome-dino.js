document.addEventListener('DOMContentLoaded', () => {
    const dino = document.getElementById('chromeDino');
    const background = document.getElementById('background');

    let isJumping = false;
    let gravity = 0.9;
    let isGameOver = false;
    let position = 0;

    // // To start, and restart the game.
    // function startGame() {
    //     gameControl.classList.add('no-display')
    //     gameControl.classList.remove('display')
    // }


    function jumping() {
        let count = 0;
        let timerId = setInterval(function () {
            if (count === 15) {
                clearInterval(timerId);
                let downTimerId = setInterval(function () {
                    if (count === 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    }
                    // Go down
                    position -= 5;
                    count--;
                    position = position * gravity;
                    dino.style.bottom = position + 'px';
                }, 20)
            }

            // Jumping
            position += 30;
            count++;
            position = position * gravity;
            dino.style.bottom = position + 'px';
        }, 20)
    }

    function generateObstacles() {
        let randomTime = Math.random() * 6000;
        let obstaclePosition = 1000;
        const obstacle = document.createElement('div');

        if (!isGameOver) {
            obstacle.classList.add('cactus');
        }

        background.appendChild(obstacle);
        obstacle.style.left = obstaclePosition + 'px';

        let timerId = setInterval(function () {

            if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
                clearInterval(timerId);
                // gameControl.classList.add('display')
                // gameControl.classList.remove('no-display')
                background.innerHTML = '<h1 class="game-over">Game Over</h1>';

                isGameOver = true;

                while (background.childElementCount > 1) {
                    background.removeChild(background.firstChild);
                }

            }

            obstaclePosition -= 10;
            obstacle.style.left = obstaclePosition + 'px'
        }, 20);

        if (!isGameOver) {
            setTimeout(generateObstacles, randomTime)
        }
    }

    function control(event) {
        if (event.key === 'ArrowUp') {
            if (!isJumping) {
                isJumping = true;
                jumping();
            }
        }
    }

    generateObstacles()

    document.addEventListener('keyup', control);
    // document.addEventListener('click', startGame);
})