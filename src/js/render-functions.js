// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryImgs = document.querySelector(".gallery");

const lightbox = new SimpleLightbox('.gallery a', {caprionsData: 'alt'});

export function renderImages(data) {
    const galleryMarkup = data.map(({largeImageURL,webformatURL,tags,likes,views,comments,downloads})=> {
        return `<li class="gallery-item">
        <a class="gallery-item-link" href="${largeImageURL}">
        <img class="item" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="item-info-container">
        <li class="item-additional-info">
        <p><span class="accent">Likes</span></br>${likes}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Views</span></br>${views}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Comments</span></br>${comments}</p>
        </li>
        <li class="item-additional-info">
        <p><span class="accent">Downloads</span></br>${downloads}</p>
        </li>
        </ul>
        </li>`
    })

    galleryImgs.insertAdjacentHTML('beforeend', galleryMarkup);
    
    lightbox.refresh();
}

