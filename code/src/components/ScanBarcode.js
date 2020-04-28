import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../reducers/products'
import { BarcodeScanner } from './BarcodeScanner'
import { products } from '../reducers/products'

import './styles/Scanned.css'

export const ScanBarcode = () => {
  const dispatch = useDispatch()
  const [showScanner, setShowScanner] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [barcodeInput, setBarcodeInput] = useState('')

  //Function to handle scanned on camera
  const handleDetected = (code) => {
    dispatch(fetchProduct(code))
    dispatch(products.actions.isScanned())
    setShowScanner(false)
  }

  //Handles manual input
  const handleChange = (event) => {
    event.preventDefault()
    dispatch(fetchProduct( barcodeInput ))
    dispatch(products.actions.isScanned())
    setShowInput(false)
  }

  // Ch
  return (
    <div className="scannedContainer">

      <img src={process.env.PUBLIC_URL + '/barcodeimg.png'} alt="Barcode"/>

      {!showScanner && (
        <button 
          className="scanButton" 
          type="button" 
          onClick={() => setShowScanner(true)}
        >
          Scan your product
        </button>
      )}
      {showScanner && (
        <BarcodeScanner 
        onDetected={handleDetected} />
      )}

      {!showInput && (
        <button 
          className="scanButton" 
          type="button" 
          onClick={() => setShowInput(true)}
        >
          Add product manually
        </button>
      )}
      {showInput && (
        <form onSubmit={handleChange} className="scannedContainer">
          <label>
            {" "}
            Add your code here:{" "}
            <input 
              type="number" 
              className="manualInput"
              value={barcodeInput}
              onChange={event => setBarcodeInput(event.target.value)}
            >
            </input>
          </label>
          <button
            className="scanButton"
            type="submit"
            disabled={barcodeInput === ''}
          >
            Submit code
          </button>
        </form>
      )}
  </div>
  )
}

