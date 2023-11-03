import { forwardRef, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Select, type SelectProps } from '@shared/ui/Select'

import { type tUserGenderOptions } from '../../model/types'
import { UserGenderValue, UserGenderLabelKey } from '../../model/constants'

const SELECT_ID = 'gender'
const LABEL_KEY = 'fields.gender.label'
const PLACEHOLDER_KEY = 'fields.gender.placeholder'

export const GenderSelect = forwardRef<HTMLSelectElement, SelectProps>(
  function GenderSelect(props, ref) {
    const { t } = useTranslation('profile')

    const options = useMemo((): tUserGenderOptions => {
      return [
        { value: UserGenderValue.MALE, label: t(UserGenderLabelKey.MALE) },
        { value: UserGenderValue.FEMALE, label: t(UserGenderLabelKey.FEMALE) }
      ]
    }, [t])

    return (
      <Select
        {...props}
        id={SELECT_ID}
        options={options}
        label={t(LABEL_KEY)}
        placeholder={t(PLACEHOLDER_KEY)}
        autoComplete="sex"
        ref={ref}
      />
    )
  }
)
