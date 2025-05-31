const uploadForm = document.getElementById('uploadForm');
const newsImage = document.getElementById('newsImage');
const newsInfo = document.getElementById('newsInfo');

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const file = newsImage.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageUrl = e.target.result;
        const infoText = newsInfo.value;

        let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
        newsList.unshift({ image: imageUrl, info: infoText });

        localStorage.setItem('newsList', JSON.stringify(newsList));
        alert('News uploaded successfully!');
        uploadForm.reset();
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});