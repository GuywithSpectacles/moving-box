//*Function  to move the square back and forth*/
function movingSquare(speed) {
    const square = document.getElementById('square');
    let position = 0; // Initial position
    let direction = 1; // Initial direction (1 = move right, -1 = move left)

    // Function to animate the square
    function animate() {
        position += parseInt(speed) * direction; // Update position

        // Reverse direction if square reaches the edges of the viewport
        if (position >= window.innerWidth - square.offsetWidth || position <= 0) {
            direction *= -1;
        }

        square.style.left = position + 'px'; // Apply new position
        requestAnimationFrame(animate); // Loop the animation
    }

    animate(); // Start animation
}


document.getElementById('btn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    let speedParams = document.getElementById('speedparams').value;

    speedParams = parseInt(speedParams);

    movingSquare(speedParams); // Start moving the square
});

document.getElementById('bBtn').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});
