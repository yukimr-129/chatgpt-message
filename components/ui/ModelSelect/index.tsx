'use client'

import { memo } from 'react'
import Select from 'react-select'
import useSWR from 'swr'

import { Data } from '@/pages/api/getModel'

type Props = {
  models: Data | undefined
  isLoading: boolean
}

export const ModelSelect = memo(({ models, isLoading }: Props) => {
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003',
  })

  //   const options =
  return (
    <div className='mt-2'>
      <Select
        className='mt-2'
        instanceId='modelSelect'
        options={models?.modelOptions || []}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{ control: (state) => 'bg-[#434654] border-[#434654]' }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  )
})

ModelSelect.displayName = 'ModelSelect'
