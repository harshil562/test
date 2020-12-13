import images from '../assets';

export const productItems = [
  { imageUri: images.oneImage, id: 1, name: 'Item-1', price: '100', category: 'clothes' },
  { imageUri: images.twoImage, id: 2, name: 'Item-2', price: '200', category: 'clothes' },
  { imageUri: images.threeImage, id: 3, name: 'Item-3', price: '300', category: 'clothes' },
  { imageUri: images.fourImage, id: 4, name: 'Item-4', price: '400', category: 'clothes' },
  { imageUri: images.fiveImage, id: 5, name: 'Item-5', price: '500', category: 'watches' },
  { imageUri: images.sixImage, id: 6, name: 'Item-6', price: '600', category: 'watches' },
  { imageUri: images.sevenImage, id: 7, name: 'Item-7', price: '700', category: 'watches' },
  { imageUri: images.eightImage, id: 8, name: 'Item-8', price: '800', category: 'watches' },
]

export const categories = [{ name: 'clothes', id: 1 }, { name: 'watches', id: 2 }];

export const ITEMS_TO_SHOW = 3;