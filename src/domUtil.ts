export const getInputDomValueWithIdSelector = (selector: string): string | undefined => {
  const target = document.querySelector(`#${selector}`) as HTMLInputElement;
  if (!target) return undefined;
  return target.value;
};
