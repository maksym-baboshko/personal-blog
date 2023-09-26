import { type FC } from 'react'

import { type FallbackProps } from 'react-error-boundary'

interface PageErrorProps extends FallbackProps {}

export type PageErrorFC = FC<PageErrorProps>
