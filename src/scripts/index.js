import { applyInputRangeStyle } from './inputRange.js'
import { albumList } from './albumsDatabase.js'
import toggleTheme from './theme.js';

function routine() {
    applyInputRangeStyle();
}

routine();

function createAlbumCard(album) {
    const card = document.createElement('article');
    card.classList.add('album-card');

    const img = document.createElement('img');
    img.classList.add('img-albums');
    img.src = album.img;
    img.alt = `Capa do álbum ${album.title}`;

    const title = document.createElement('h3');
    title.classList.add('album-title');
    title.textContent = album.title;

    const bandMusic = document.createElement('div');
    bandMusic.classList.add('band-music');

    const band = document.createElement('p');
    band.textContent = album.band;

    const genre = document.createElement('p');
    genre.textContent = album.genre;

    bandMusic.append(band, genre);

    const albumPrice = document.createElement('div');
    albumPrice.classList.add('album-price');

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `R$ ${album.price}`;

    const buyButton = document.createElement('button');
    buyButton.classList.add('button-buy');
    buyButton.textContent = 'Comprar';

    albumPrice.append(price, buyButton);

    card.append(img, title, bandMusic, albumPrice);
    return card;
}

function displayAlbums() {
    const albumContainer = document.getElementById('albums');
    albumContainer.innerHTML = '';

    albumList.forEach(album => {
        const albumCard = createAlbumCard(album);
        albumContainer.appendChild(albumCard);
    });


    initFilter();
}

function initFilter() {
    const priceFilter = document.getElementById('id_do_seu_input');
    const priceValue = document.querySelector('.high-light');


    priceFilter.max = 150;

    const updatePrice = () => {
        const selectedPrice = parseFloat(priceFilter.value);


        priceValue.textContent = `R$${selectedPrice.toFixed(2).replace('.', ',')}`;


        const albums = document.querySelectorAll('.album-card');

        albums.forEach(album => {
            const priceText = album.querySelector('.price')?.textContent || '';
            const albumPrice = parseFloat(priceText.replace('R$', '').replace(',', '.'));

            if (!isNaN(albumPrice)) {
                if (albumPrice <= selectedPrice) {
                    album.style.display = 'block';
                } else {
                    album.style.display = 'none';
                }
            }
        });
    };


    priceFilter.value = priceFilter.max;

    updatePrice();


    priceFilter.addEventListener('input', updatePrice);
}

document.addEventListener('DOMContentLoaded', displayAlbums);
document.addEventListener('DOMContentLoaded', () => {
    toggleTheme();
});
