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
import { useEffect } from 'react'

export const StepOne = props => {
  const {
    acceptOrder,
    legalDocumentoToTheOrder,
    offerInvoice,
    products,
    salesDocumentTypes,
    savedProducts,
    setLegalDocument,
    setSavedProducts,
    step,
  } = props

  const [storaged, setStoraged] = useState(savedProducts)
  useEffect(() => {
    setStoraged(savedProducts)
  }, [savedProducts])

  const [totalProducts, setTotalProducts] = useState(
    savedProducts.reduce((acc, curr) => {
      const productsFound =
        products.length > 0 && products.find(e => e._id === curr.id)

      const pricePerProductType = productsFound
        ? productsFound.price * curr.quantity
        : 0

      acc = acc + pricePerProductType
      return acc
    }, 0),
  )

  useEffect(() => {
    setTotalProducts(
      savedProducts.reduce((acc, curr) => {
        const productsFound =
          products.length > 0 && products.find(e => e._id === curr.id)

        const pricePerProductType = productsFound
          ? productsFound.price * curr.quantity
          : 0

        acc = acc + pricePerProductType
        return acc
      }, 0),
    )
  }, [savedProducts])

  const error = storaged.find(e => e.error)

  return (
    <>
      <RightSideSmallScreen>
        <CardSummary
          acceptOrder={acceptOrder}
          deliveryPrice={0}
          error={error}
          legalDocumentoToTheOrder={legalDocumentoToTheOrder}
          offerInvoice={offerInvoice}
          products={products}
          salesDocumentTypes={salesDocumentTypes}
          savedProducts={storaged}
          setLegalDocument={setLegalDocument}
          step={step}
          totalProducts={totalProducts}
        />
      </RightSideSmallScreen>
      <DivContent>
        <LeftSide>
          <DivSummary className={`card`}>
            {`Carrito de compras: ${products.length} producto(s)`}
          </DivSummary>
          {products.length > 0 && savedProducts && savedProducts.length > 0 ? (
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
            deliveryPrice={0}
            error={error}
            legalDocumentoToTheOrder={legalDocumentoToTheOrder}
            offerInvoice={offerInvoice}
            products={products}
            salesDocumentTypes={salesDocumentTypes}
            savedProducts={storaged}
            setLegalDocument={setLegalDocument}
            step={step}
            totalProducts={totalProducts}
          />
        </RightSideBigScreen>
      </DivContent>
    </>
  )
}
