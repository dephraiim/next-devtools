'use client'

import React from 'react'
import useSWR from 'swr'
import useSearchElement from '@/hooks/use-search-element'
import { rpcClient } from '../client'
import AllAssets from './(components)/all-assets'

export default function Page() {
  const { data } = useSWR('getStaticAssets', () => rpcClient.getStaticAssets.query())
  const { element, filteredData } = useSearchElement(data, (item, searchText) => item?.file?.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <div>
      {element}

      {
        filteredData.length > 0 && (
          <AllAssets data={filteredData} />
        )
      }
    </div>
  )
}
