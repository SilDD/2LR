import React from 'react'
import {useLocalSearchParams} from 'expo-router'
import CategoryListingPage from '../pages/genericListingPage'

export default function BarsListing() {
  const params = useLocalSearchParams()
  const showFavoritesOnly = params.favorites === 'true'

  return (
    <>
      {showFavoritesOnly ? (
        <CategoryListingPage categoryId="live" showFavoritesOnly={true} />
      ) : (
        <CategoryListingPage categoryId="live" />
      )}
    </>
  )
}