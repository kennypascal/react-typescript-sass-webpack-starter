import loadImage from './load-image';

const IMG_SRC = 'image.jpg';

beforeEach(() => {
  const testImg = loadImage(IMG_SRC);
  testImg.id = 'testImg';
  document.body.appendChild(testImg);
});

afterEach(() => {
  document.body.querySelector('#testImg').remove();
});

it('Returns an img with the src value provided', () => {
  const img = document.body.querySelector('#testImg');
  expect(img.nodeName).toBe('IMG');
  expect(img.getAttribute('src')).toBe(IMG_SRC);
});
