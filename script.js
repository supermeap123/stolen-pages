// script.js

// Heart GIF animation
const heartContainer = document.querySelector('.hearts');
setInterval(() => {
    const heart = document.createElement('div');
    heart.style.position = 'absolute';
    heart.style.width = '50px';
    heart.style.height = '50px';
    heart.style.backgroundImage = 'url(https://bestanimations.com/Signs&Shapes/Hearts/animatedhearts/pierced-heart-emoji-animated-gif.gif)';
    heart.style.backgroundSize = 'contain';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heartContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);