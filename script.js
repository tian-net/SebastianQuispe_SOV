// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Carga dinámica del video de YouTube
document.addEventListener('DOMContentLoaded', function() {
    const youtubeEmbed = document.querySelector('.youtube-embed');
    youtubeEmbed.innerHTML = `
        <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/?listType=user_uploads&list=UCAy8Qkj1AQuqnKiogNdshBA" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
});