import { forwardRef, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { Select, type SelectProps } from '@shared/ui/Select'

import { type tUserGenderOptions } from '../../model/types'
import { UserGenderLabelKey, UserGenderValue, LABEL_KEY, SELECT_ID } from '../../model/constants'

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
      <>
        <label htmlFor={SELECT_ID} hidden>
          {t(LABEL_KEY)}
        </label>
        <Select
          {...props}
          id={SELECT_ID}
          options={options}
          placeholder={t(LABEL_KEY)}
          autoComplete="sex"
          ref={ref}
        />
      </>
    )
  }
)
