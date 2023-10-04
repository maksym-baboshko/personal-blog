import { createPortal } from 'react-dom'

import { type PortalFC } from './Portal.types'

export const Portal: PortalFC = ({ children, container }) => {
  return createPortal(children, container ?? document.body)
}
