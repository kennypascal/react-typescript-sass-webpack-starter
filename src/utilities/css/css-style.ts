import toHyphenCase from '../string/to-hyphen-case';

export function setStyle(element: HTMLElement, style: Partial<CSSStyleDeclaration>): void {
  if (style && element) {
    Object.keys(style).map((key): void => {
      const elm = element;
      elm.style[key] = style[key];
      return null;
    });
  }
}

export function clearStyle(element: HTMLElement, style: Partial<CSSStyleDeclaration>): void {
  if (style && element) {
    Object.keys(style).map((key): string => {
      const elm = element;
      elm.style[key] = null;
      elm.style.removeProperty(toHyphenCase(key));
      return null;
    });
  }
}
