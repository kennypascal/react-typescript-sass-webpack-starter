import elementPosition from '../element/element-position';
import scrollWindowDestination from './scroll-window-destination';

const DURATION = 600;

/**
 * Scrolls to an anchor
 * @param element | HTMLElement
 * @param [offset] | Offset the scroll to positon
 * @param [duration] | Animation duration
 */
const scrollToAnchor = (event, offset = 0, duration: number = DURATION): void => {
  const element = event.currentTarget as HTMLElement;
  const isAnchorHref = element &&
    element.getAttribute('href') &&
    element.getAttribute('href').substr(0, 1) === '#';

  /* if anchor # */
  if (isAnchorHref) {
    const anchorHref = element &&
    element.getAttribute('href') &&
    element.getAttribute('href').substr(0, 1) === '#' &&
    element.getAttribute('href').replace('#', '');

    console.log('Scroll to anchor', anchorHref);

    const destinationList = [];

    if (event.preventDefault) {
      event.preventDefault();
    }

    // get any nodes with an id matching the anchor href
    if (document.querySelectorAll(`[id="${anchorHref}"]`)) {
      [].slice.call(document.querySelectorAll(`[id="${anchorHref}"]`)).map((id): number => destinationList.push(id));
    }

    // get any nodes with a name matching the anchor href
    if (document.querySelectorAll(`[name="${anchorHref}"]`)) {
      [].slice.call(document.querySelectorAll(`[name="${anchorHref}"]`)).map((id): number => destinationList.push(id));
    }

    // get scroll to anchor (first element)
    const anchorElement: Element | undefined = destinationList ? destinationList[0] : undefined;

    // get scroll to anchor destination
    let destination;
    if (anchorElement) {
      const targetElmentTopToPageBottom = document.documentElement.scrollHeight - elementPosition(anchorElement).y;
      const difference = targetElmentTopToPageBottom - window.innerHeight;
      destination = difference > 0 && anchorElement ? elementPosition(anchorElement).y + offset : document.documentElement.scrollHeight - window.innerHeight;
    } else {
      destination = 0;
    }

    // execute scroll
    scrollWindowDestination(destination, duration);
  } else {
    console.log('Linking to', element.getAttribute('href'));
  }
};

export default scrollToAnchor;
