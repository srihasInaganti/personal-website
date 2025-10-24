
const headshot = document.querySelector('#intro img');

headshot.addEventListener('mousemove', (e) => {
    const rect = headshot.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const moveX = - (x / rect.width) * 20;
    const moveY = - (y / rect.height) * 20;
    
    headshot.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

headshot.addEventListener('mouseleave', () => {
    headshot.style.transform = 'translate(0, 0)';
});