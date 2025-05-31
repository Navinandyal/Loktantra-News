const newsData = [
    {
        image: 'https://via.placeholder.com/100',
        info: 'Information about news article 1.'
    },
    {
        image: 'https://via.placeholder.com/100',
        info: 'Information about news article 2.'
    },
    {
        image: 'https://via.placeholder.com/100',
        info: 'Information about news article 3.'
    }
];

const newsSection = document.getElementById('news-section');

newsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = 'News Image';

    const info = document.createElement('div');
    info.className = 'info';
    info.textContent = item.info;

    card.appendChild(img);
    card.appendChild(info);

    newsSection.appendChild(card);
});