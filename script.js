// Minimal dark theme interactions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.platform-link, .social-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
    // Subtle parallax on cover art
    const coverArt = document.querySelector('.cover-art');
    if (coverArt) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        
        document.addEventListener('mousemove', (e) => {
            const rect = coverArt.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            mouseX = (e.clientX - centerX) / centerX;
            mouseY = (e.clientY - centerY) / centerY;
        });
        
        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;
            
            coverArt.style.transform = `perspective(1000px) rotateY(${currentX * 2}deg) rotateX(${-currentY * 2}deg)`;
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
});
