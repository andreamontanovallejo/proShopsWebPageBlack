import React, { useState } from 'react'
import { CardSummary } from './CardSummary'
import { CardProduct } from './CardProduct'
import {
  DivContent,
  LeftSide,
  RightSideBigScreen,
  RightSideSmallScreen,
  DivSummary,
} from '../cartStyles'

export const StepOne = props => {
  const { acceptOrder, products, savedProducts, setSavedProducts, step } = props

  const [storaged, setStoraged] = useState(savedProducts)

  const error = storaged.find(e => e.error)

  return (
    <>
      <RightSideSmallScreen>
        <CardSummary
          acceptOrder={acceptOrder}
          error={error}
          products={products}
          savedProducts={storaged}
          step={step}
          deliveryPrice={0}
        />
      </RightSideSmallScreen>
      <DivContent>
        <LeftSide>
          <DivSummary className={`card`}>
            {`Carrito de compras: ${products.length} producto(s)`}
          </DivSummary>
          {savedProducts && savedProducts.length > 0 ? (
            savedProducts
              .sort((a, b) => a.id.localeCompare(b.id))
              .map(productSaved => (
                <CardProduct
                  key={productSaved.id}
                  product={products.find(e => e._id === productSaved.id)}
                  savedProducts={savedProducts}
                  setSavedProducts={setSavedProducts}
                  setStoraged={setStoraged}
                />
              ))
          ) : (
            <div>No tienes productos agregados en tu carrito</div>
          )}
        </LeftSide>
        <RightSideBigScreen>
          <CardSummary
            acceptOrder={acceptOrder}
            error={error}
            products={products}
            savedProducts={storaged}
            step={step}
            deliveryPrice={0}
          />
        </RightSideBigScreen>
      </DivContent>
    </>
  )
}
