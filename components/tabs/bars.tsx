import React from 'react'
import CategoryListingPage from '../pages/genericListingPage'
import { useLocalSearchParams } from 'expo-router'

export default function BarsListing() {
  const params = useLocalSearchParams()
  const showFavoritesOnly = params.favorites === 'true'

  return (
    <>
      {showFavoritesOnly ? (
        <CategoryListingPage categoryId="bars" showFavoritesOnly={true} />
      ) : (
        <CategoryListingPage categoryId="bars" />
      )}
    </>
  )
}