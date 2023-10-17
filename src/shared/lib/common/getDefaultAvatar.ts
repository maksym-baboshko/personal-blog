import { appThemes, type AppTheme } from '@shared/constants/theme'

const BASE_URL = 'https://api.dicebear.com/7.x/thumbs/svg?seed=Coco'

export const getDefaultAvatar = (theme: AppTheme) => {
  const t = appThemes.find((t) => t.key === theme)
  const shapeColor = t?.color.slice(1)
  const backgroundColor = t?.backgroundColor.slice(1)

  const options = { shapeColor, backgroundColor }

  const query = Object.entries(options)
    .map(([key, value]) => `&${key}=${value}`)
    .join('')

  return BASE_URL + query
}
