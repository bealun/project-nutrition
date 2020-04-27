import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import { BarcodeScanner } from './BarcodeScanner'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  return (
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={(event) => dispatch(fetchProduct(event.target.value))}></input>
      </label>
      <p>
        {" "}
        7311070347272 - Pågen Gifflar. 
        8005110413520 - Mutti tomato.
        7622300245108 - O'boy.
        5000396026993 -Digestive
      </p>

      {!showScanner && (
        <button type="button" onClick={() => setShowScanner(true)}>
          Show scanner
        </button>
      )}
      {showScanner && (
        <BarcodeScanner 
        onDetected={code => {
          console.log('Got barcode', code)
          setShowScanner(false)
          dispatch(fetchProduct(code))
        }} />
      )}
    {/* <BarcodeScanner onDetected={() => {dispatch(fetchProduct())}} ></BarcodeScanner> */}
  </div>
  )
}

