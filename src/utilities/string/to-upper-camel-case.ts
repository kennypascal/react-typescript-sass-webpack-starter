import toCamelCase from './to-camel-case';

/**
 *
 *
 * @export
 * @param {string} string
 * @returns {string} A string as upper camel case (pascal case)
 */
export default function toUpperCamelCase(string: string): string {
  return string.charAt(0).toUpperCase() + toCamelCase(string).slice(1);
}
