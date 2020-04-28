import React from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { products } from '../reducers/products'

import './styles/Listed.css'

export const ProductItem = () => {
  const dispatch = useDispatch()
  const productItems = useSelector((store) => store.products.item)
  console.log('ProductItem:', productItems)
  console.log('Items:', productItems.product)

  // Restarts 
  const handleClick = () => {
    return (
      dispatch(products.actions.restart())
    )
  }

  // Catches error
  if (productItems.status === 0) {
    return (
    <div>
      <button className="restartButton" onClick={handleClick}>
        Scan a new product
      </button>
      <h1>Product not found</h1>
    </div>
      )
  } else {

  //If product found show info
  return (
    <section className="productInfo">
      <button className="restartButton" onClick={handleClick}>
        Scan a new product
      </button>
      {productItems.product && (<div className="productInfoContainer"><h1>Brand:</h1> <h2>{productItems.product.brands}</h2></div>)}
      {productItems.product && (<div className="productInfoContainer"><h1>Product:</h1> <h2>{productItems.product.product_name}</h2></div>)}
      {productItems.product && (<div className="productInfoContainer"><h1>Allergens:</h1><h2>
        {productItems.product.allergens_hierarchy === [] ? productItems.product.allergens_hierarchy.map((allergen) => 
        (allergen.replace(/\w+:/, ' ').replace('-', ' '))) : `No allergens found`}</h2></div>)
      }
      {productItems.product && (<div className="nutrientsMap"><h1>Nutrients: </h1><h2>
        {Object.entries(productItems.product.nutrient_levels).map(([key, value]) =>
        (<p>{key}: {value}</p>))}</h2></div>)
      }
    </section>
  )}
}
