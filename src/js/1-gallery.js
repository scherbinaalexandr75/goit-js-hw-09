import { galleryItems } from './galleryItems.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const classGallery = document.querySelector('.gallery');

const newImages = images => {
  const imgItems = images.map(
    img =>
      `<li class="gallery-item"><a class="gallery-link" href="${img.original}"> <img class = "gallery-image" src="${img.preview}" alt="${img.description}"/></a></li>`
  );

  classGallery.insertAdjacentHTML('afterbegin', imgItems.join(''));
};

newImages(images);


new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
