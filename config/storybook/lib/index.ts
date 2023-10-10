import { withTheme } from './decorators/with-theme'
import { withRouter } from './decorators/with-router'
import { withI18next } from './decorators/with-i18next'

export { globalTypes } from './preview/globalTypes'

export const decorators = [withRouter, withI18next, withTheme]
