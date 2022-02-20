// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', renderGallery(galleryItems));

function renderGallery(elemensGallery) {
  const makeUp = elemensGallery
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}"  />
     </a>`,
    )
    .join('');

  return makeUp;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
