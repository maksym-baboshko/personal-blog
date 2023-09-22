type Mods = Record<string, boolean | string>;

type ClassNamesFunc = (cls: string, mods: Mods, additional: string[]) => string;

export const classNames: ClassNamesFunc = (cls, mods, additional) => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, cond]) => Boolean(cond))
      .map(([cls]) => cls)
  ].join(' ');
};

classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
  'pdg'
]); // 'remove-btn hovered selectable pdg'
