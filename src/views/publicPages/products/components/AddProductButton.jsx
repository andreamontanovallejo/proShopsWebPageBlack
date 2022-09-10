import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { ModifyQuantityStored } from './ModifyQuantityStored'
import { DivProductsAdded, DivStoredProduct } from './addProductButtonStyles'
import Button from '../../../../helpers/Button'
import { useState } from 'react'
import { useEffect } from 'react'

export const AddProductButton = props => {
  const { product } = props

  const [storagedProducts, setStoragedProducts] = useState(
    JSON.parse(localStorage.getItem('shoppingCartProshops')),
  )

  useEffect(() => {
    localStorage.setItem(
      'shoppingCartProshops',
      JSON.stringify(storagedProducts),
    )
  }, [storagedProducts])

  return (
    <>
      {product && product.manualProductAvailability.state === 'Disponible' ? (
        storagedProducts &&
        storagedProducts.filter(e => e.id === product._id).length > 0 ? (
          <DivStoredProduct>
            <ModifyQuantityStored
              storagedProducts={storagedProducts}
              setStoragedProducts={setStoragedProducts}
              product={product}
            />
            <DivProductsAdded>
              <ShoppingCartIcon />
              {storagedProducts.find(e => e.id === product._id).quantity}
            </DivProductsAdded>
          </DivStoredProduct>
        ) : (
          <Button
            icon={'ShoppingCartIcon'}
            background={'green'}
            textColor={'white'}
            text={'Agregar'}
            onClick={() => {
              const addNewProduct = // Probado, no usar storagedProducts en vez de JSON.parse(localStorage.getItem('shoppingCartProshops'))
                JSON.parse(localStorage.getItem('shoppingCartProshops')) !==
                null
                  ? JSON.parse(
                      localStorage.getItem('shoppingCartProshops'),
                    ).filter(e => e.id === product._id).length > 0
                    ? [
                        ...JSON.parse(
                          localStorage.getItem('shoppingCartProshops'),
                        ),
                      ]
                    : [
                        ...JSON.parse(
                          localStorage.getItem('shoppingCartProshops'),
                        ),
                        { id: product._id, quantity: 1 },
                      ]
                  : [{ id: product._id, quantity: 1 }]

              setStoragedProducts(addNewProduct)
            }}
          />
        )
      ) : (
        <div>Temporalmente no disponible</div>
      )}
    </>
  )
}
