import { useStore } from 'react-redux'

import { type AppStore } from '@app/config/store'

export const useAppStore = useStore as () => AppStore
