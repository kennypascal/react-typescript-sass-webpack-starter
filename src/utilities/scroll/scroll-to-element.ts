import elementPosition from '../element/element-position';
import scrollWindowDestination from './scroll-window-destination';

const DURATION = 600;

/**
 * Scrolls to an elemnt
 * @param element | HTMLElement
 * @param [offset] | Offset the scroll to positon
 * @param [duration] | Animation duration
 */
const scrollToElement = (element: Element, offset = 0, duration = DURATION): void => {
  let destination: number;
  if (element) {
    const targetElmentTopToPageBottom = document.documentElement.scrollHeight - elementPosition(element).y;
    const difference = targetElmentTopToPageBottom - window.innerHeight;
    destination = difference > 0 && element ? elementPosition(element).y + offset : document.documentElement.scrollHeight - window.innerHeight;
  } else {
    destination = 0;
  }
  scrollWindowDestination(destination, duration);
};

export default scrollToElement;
