import React from "react";
import { useSelector } from 'react-redux'

export const ProductItem = () => {
  const productItems = useSelector((store) => store.products.product)
  console.log('ProductItem:', productItems)
  console.log('Items:', productItems.product)

  // const map = new Map(Object.entries(productItems.product.nutrient_levels));

  return (
    <section>
      {productItems.product && (<h1>Brand: {productItems.product.brands}</h1>)}
      {productItems.product && (<h1>Allergens: 
        {productItems.product.allergens_hierarchy.map((allergen) => 
        (allergen.replace(/\w+:/, ' ').replace('-', ' ')))}
        </h1>)}
        {productItems.product && (<h1>Nutrients: 
          {Object.entries(productItems.product.nutrient_levels).forEach(([key, value]) => 
          console.log(`${key}: ${value}`)
          )}
          </h1>)}
    </section>
  )
}
