// 1. Фильтрация продуктов с фотографиями
const productsWithPhotos = products.filter(product => product.photos
&& product.photos.length > 0);
console.log('Продукты с фотографиями:', productsWithPhotos);
// 2. Сортировка продуктов по цене
const sortedProducts = products.slice().sort((a, b) => a.price -
b.price);
console.log('Отсортированные продукты:', sortedProducts);
