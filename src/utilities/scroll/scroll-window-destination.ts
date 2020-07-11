const DURATION = 600;

/**
 *
 *
 * @export
 * @param {*} [to] | Destination of the scroll, default is 0
 * @param {number} [duration] | Duration on the scroll
 * @description | Animates the window scroll to specified destination
 */
const scrollWindowDestination = (to = 0, duration = DURATION): void => {
  const element = document.scrollingElement || document.documentElement;
  const start = element.scrollTop;
  const change = to - start;
  const startDate = +new Date();
  const adjustedDuration = duration;

  function easeInOutQuad(currentTime, startValue, changeValue, durationEase): string {
    let t = currentTime;
    const b = startValue;
    const c = changeValue;
    const d = durationEase;

    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t -= 1;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function animateScroll(): void {
    const currentDate = +new Date();
    const currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, adjustedDuration), 10);
    if (currentTime < adjustedDuration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  }

  animateScroll();
};

export default scrollWindowDestination;
