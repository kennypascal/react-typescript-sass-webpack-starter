/**
 *
 *
 * @export
 * @returns {string} Returns the window location hash without #'
 */

export default function getLocationHash(): string {
  return window.location.hash.replace(/^#/, '');
}
