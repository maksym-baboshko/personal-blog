import { type TypedUseSelectorHook, useSelector } from 'react-redux'

import { type RootState } from '@shared/types/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
