type Mods = Record<string, boolean | string>

type ClassNamesFunc = (
  cls: string,
  mods?: Mods,
  additional?: string[]
) => string

export const classNames: ClassNamesFunc = (cls, mods = {}, additional = []) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, cond]) => Boolean(cond))
      .map(([cls]) => cls)
  ].join(' ')
}

// @return 'remove-btn hovered pdg'
classNames('remove-btn', { hovered: true, red: false }, ['pdg'])
