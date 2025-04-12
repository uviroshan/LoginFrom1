// Create animated stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('span');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = '1px solid #ff4545';
        } else {
            input.style.border = 'none';
        }
    });

    const errorMessage = document.getElementById('errorMessage');
    if (!isValid) {
        errorMessage.style.display = 'block';
        this.classList.add('shake');
        setTimeout(() => this.classList.remove('shake'), 500);
    } else {
        errorMessage.style.display = 'none';
        // Add your login logic here
        alert('Login successful! Welcome to the universe!');
        this.reset();
    }
});

// Initialize stars
createStars();

// Add random comet
setInterval(() => {
    const comet = document.createElement('div');
    comet.className = 'comet';
    comet.style.left = Math.random() * -200 + 'px';
    comet.style.top = Math.random() * -200 + 'px';
    document.querySelector('.container').appendChild(comet);

    setTimeout(() => comet.remove(), 10000);
}, 5000);