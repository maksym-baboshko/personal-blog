import { useCallback } from 'react'

import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { type tAuthCredentials } from '../model/types'
import { AuthCredentialsSchema } from '../model/schemas'

export const useAuthForm = () => {
  const formMethods = useForm<tAuthCredentials>({
    resolver: valibotResolver(AuthCredentialsSchema)
  })

  const { t } = useTranslation('common')

  const getFieldValidationMessage = useCallback(
    (fieldName: keyof tAuthCredentials) => {
      const errorMessageKey = formMethods.formState.errors[fieldName]?.message
      return errorMessageKey && t(errorMessageKey)
    },
    [formMethods.formState.errors, t]
  )

  return { getFieldValidationMessage, ...formMethods }
}
