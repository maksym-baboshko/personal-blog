import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { type StateSchema } from '@shared/types'

export const useTypedSelector: TypedUseSelectorHook<StateSchema> = useSelector
