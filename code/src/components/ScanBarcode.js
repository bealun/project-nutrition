import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import { BarcodeScanner } from './BarcodeScanner'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)

  // return (
  //   <>
      // {!showScanner && (
      //   <button type="button" onClick={() => setShowScanner(true)}>
      //     Show scanner
      //   </button>
      // )}

      // {showScanner && (
      //   <BarcodeScanner onDetected={(code) => {
      //     console.log('Got barcode', code)
      //     setShowScanner(false)
      //   }} />
      // )}
  //   </>
  // )
  return (
    <div>
      <label>
        {" "}
        Test codes here:{" "}
        <input type="text" onChange={() => dispatch(fetchProduct())}></input>
      </label>
      <p>
        {" "}
        Use the field above to test barcodes manually and keep an eye on your
        console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
      </p>

      {/* {!showScanner && (
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
      )} */}
    {/* <BarcodeScanner onDetected={() => {dispatch(fetchProduct())}} ></BarcodeScanner> */}
  </div>
  )
}

