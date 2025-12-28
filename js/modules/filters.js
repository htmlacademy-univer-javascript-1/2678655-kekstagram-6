import { DEBOUNCE_DELAY } from '../data/data.js';
import { debounce, filterHandlers } from '../utils/utils-filters.js';
import { deletePhotosFragment, renderPhotos } from './render-photos.js';

export function initFilters(photos) {
  const imgFilters = document.querySelector('.img-filters');
  const buttonFiltersList = document.querySelectorAll('.img-filters__button');
  imgFilters.classList.remove('img-filters--inactive');

  const debouncedRender = debounce((photos) => {
    deletePhotosFragment();
    renderPhotos(photos);
  }, DEBOUNCE_DELAY);

  imgFilters.addEventListener('click', (evt) => {
    const targetClass = evt.target.classList;
    const isFilterButton = targetClass.contains('img-filters__button');
    const isActiveButton = targetClass.contains('img-filters__button--active');

    if (!isFilterButton || isActiveButton) {
      return;
    }

    buttonFiltersList.forEach((el) => {
      el.classList.remove('img-filters__button--active');
    });

    targetClass.add('img-filters__button--active');

    const filterFunction = filterHandlers[evt.target.id];
    const filteredPhotos = filterFunction(photos);
    debouncedRender(filteredPhotos);
  });
}

