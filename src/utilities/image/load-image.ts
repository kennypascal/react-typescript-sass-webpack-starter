/**
 * Creates an HTMLImageElement and loads the image source.
 * @param src Path to the image you want to embed.
 * @param onLoaded Callback function for when the image is loaded.
 * @param onError Callback function for when the image fails to load.
 * @returns an HTMLImageElement
 */
const loadImage = (src: string, onLoaded: CallBackFunction, onError: CallBackFunction): HTMLImageElement => {
  const image = new Image();
  image.addEventListener('load', onLoaded);
  image.addEventListener('error', onError);
  image.src = src;

  return image;
};

export default loadImage;
