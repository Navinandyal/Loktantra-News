const newsSection = document.getElementById('news-section');

window.addEventListener('DOMContentLoaded', function() {
    const newsList = JSON.parse(localStorage.getItem('newsList')) || [];

    newsList.forEach(news => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = news.image;
        img.alt = 'News Image';

        const info = document.createElement('div');
        info.className = 'info';
        info.textContent = news.info;

        card.appendChild(img);
        card.appendChild(info);
        newsSection.appendChild(card);
    });
});