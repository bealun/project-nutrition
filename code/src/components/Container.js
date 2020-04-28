import React from 'react'
import { useSelector } from 'react-redux'
import { ScanBarcode } from "components/ScanBarcode";
import { ProductItem } from 'components/ProductItem'

import './styles/Container.css'

export const Container = () => {
  const scanStarted = useSelector((state) => state.products.scanStarted)

  return (
    <main>
      {!scanStarted ? <ScanBarcode /> : <ProductItem />}
    </main>
  )
}