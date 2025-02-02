// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Add hover effect for game cards
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Login button click event
document.querySelector('.login-btn').addEventListener('click', () => {
    alert('Login functionality coming soon!');
});

// Add random background images to game cards
const gameImages = [
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
];

document.querySelectorAll('.game-img').forEach((img, index) => {
    img.style.backgroundImage = `url(${gameImages[index]})`;
});
