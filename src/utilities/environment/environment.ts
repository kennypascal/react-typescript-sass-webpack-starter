/**
 *
 *
 * @export
 * @returns {{ isProduction: boolean }} Returns whether the envoronment is production or development
 */
export default function getEnvironment(): { isProduction: boolean } {
  let isProduction = true;
  if (process.env.NODE_ENV !== 'production') {
    isProduction = false;
  }
  return { isProduction };
}
