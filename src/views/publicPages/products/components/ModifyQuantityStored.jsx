import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import InputNumber from '../../../../helpers/InputText'

import { DivModifyQuantity } from './modifyQuantityStoredStyles'

export const ModifyQuantityStored = props => {
  const { product, storagedProducts, setStoragedProducts } = props

  return (
    <DivModifyQuantity>
      <RemoveCircleOutlineIcon
        onClick={() => {
          const selectedProduct = storagedProducts.find(
            e => e.id === product._id,
          )

          const subtractedOne = {
            id: selectedProduct.id,
            quantity: selectedProduct.quantity - 1,
          }

          const modifyStoredProducts =
            selectedProduct.quantity - 1 > 0
              ? [
                  ...storagedProducts.filter(e => e.id !== product._id),
                  subtractedOne,
                ]
              : [...storagedProducts.filter(e => e.id !== product._id)]

          setStoragedProducts(modifyStoredProducts)
        }}
      />
      <InputNumber
        type={'number'}
        error={[]}
        min={0}
        max={product.stock}
        onChange={event => {
          const selectedProduct = storagedProducts.find(
            e => e.id === product._id,
          )

          const modifiedProduct = {
            id: selectedProduct.id,
            quantity: event.target.value,
          }

          const modifyStoredProducts =
            event.target.value <= 0
              ? [...storagedProducts.filter(e => e.id !== product._id)]
              : event.target.value >= product.stock
              ? [
                  ...storagedProducts.filter(e => e.id !== product._id),
                  { id: selectedProduct.id, quantity: product.stock },
                ]
              : [
                  ...storagedProducts.filter(e => e.id !== product._id),
                  modifiedProduct,
                ]

          if (event.target.value.trim() !== '') {
            setStoragedProducts(modifyStoredProducts)
          }
        }}
      />
      <AddCircleOutlineIcon
        onClick={() => {
          const selectedProduct = storagedProducts.find(
            e => e.id === product._id,
          )

          const addedOne = {
            id: selectedProduct.id,
            quantity: selectedProduct.quantity + 1,
          }

          const modifyStoredProducts =
            selectedProduct.quantity + 1 <= product.stock
              ? [
                  ...storagedProducts.filter(e => e.id !== product._id),
                  addedOne,
                ]
              : storagedProducts

          setStoragedProducts(modifyStoredProducts)
        }}
      />
    </DivModifyQuantity>
  )
}
