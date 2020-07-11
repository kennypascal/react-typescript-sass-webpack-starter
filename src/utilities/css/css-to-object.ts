export default function cssToOject(css: string): Partial<CSSStyleDeclaration> {
  let styleObj;
  css
    .toLowerCase()
    .replace(/-(.)/g, (m, g): string => g.toUpperCase())
    .replace(/;\s?$/g, '')
    .split(/;/g)
    .map((sp): string[] => sp.split(/:/g))
    .map(
      (s): CSSStyleDeclaration => {
        if (s[0] && s[1]) {
          styleObj[s[0].replace(/\s/g, '')] = s[1].replace(/^\s+|\s+$/g, '');
        }
        return styleObj;
      }
    );
  return styleObj;
}
