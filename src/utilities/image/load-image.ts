/**
 * Creates an HTMLImageElement and loads the image source.
 * @param src Path to the image.
 * @param onLoaded Callback function for when the image is loaded.
 * @param onError Callback function for when the image fails to load.
 * @returns an HTMLImageElement
 */
const loadImage = (src: string, onLoaded?: CallBackFunction, onError?: CallBackFunction): HTMLImageElement => {
  const image = new Image();

  if (onLoaded) {
    image.addEventListener('load', onLoaded);
  }

  if (onError) {
    image.addEventListener('error', onError);
  }

  image.src = src;

  return image;
};

export default loadImage;
