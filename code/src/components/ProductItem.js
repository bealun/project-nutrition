import React from "react";
import { useSelector } from 'react-redux'

export const ProductItem = () => {
  const productItems = useSelector((store) => store.products.product)
  console.log('ProductItem:', productItems)
  console.log(productItems.product)

  return (
    <section>
     {productItems.product && (
      <h1>Info 1234: {/* productItems.product && */ productItems.product.created_t}</h1>
      ) }
      
    </section>
  )
}