import React from 'react'
import {
  DivProduct,
  ProductName,
  DivSpecialties,
  Measure,
  Price,
  DivImageSpecialty,
  DivButton,
  Span,
  SaleByMeasureInBulk,
  NotAvailable,
} from '../productsStyles'
import { Image, Transformation } from 'cloudinary-react'

import { ProductImageAndLikes } from './ProductImageAndLikes'
import { AddProductButton } from './AddProductButton'

export const Product = props => {
  const { product } = props
  const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`

  return (
    <DivProduct className="card" key={product._id}>
      <Span>
        <ProductImageAndLikes
          product={product}
          setLikes={props.setLikes}
          pushTo={props.props.pushTo}
        />

        <ProductName>{product.productName}</ProductName>

        {product.pricePerMeasure && (
          <>
            <SaleByMeasureInBulk>{`Venta por ${
              props.measuresInBulks.find(
                e => e._id === product.measureInBulk._id,
              ).salePer
            }`}</SaleByMeasureInBulk>
            <NotAvailable>Temporalmente no disponible</NotAvailable>
          </>
        )}
        <Measure>{`${product.measure.number} ${
          product.pricePerMeasure
            ? props.measuresInBulks.find(
                e => e._id === product.measureInBulk._id,
              ).salePer
            : product.measure.measureType.name
        }`}</Measure>

        <Price>{`$ ${
          props.priceListToUse === '62fdccfaf8f153b5f9d77209'
            ? Number(Number(product.price).toFixed()).toLocaleString('de-DE')
            : Number(
                Number(
                  product.priceLists.find(
                    e => e.listId === props.priceListToUse,
                  ).value,
                ).toFixed(),
              ).toLocaleString('de-DE')
        }`}</Price>

        <DivSpecialties measureInBulk={product.measureInBulk}>
          {product.specialties.slice(0, 4).map(each => (
            <DivImageSpecialty key={each._id}>
              <Image
                key={each._id}
                cloudName={cloudName}
                publicId={each.cloudinaryUrl}
                alt="specialty"
                quality="auto"
                loading="lazy"
              >
                <Transformation fetchFormat="auto" quality="auto" />
                <Transformation height="30" crop="scale" />
              </Image>
            </DivImageSpecialty>
          ))}
        </DivSpecialties>
        <DivButton>
          <AddProductButton product={product} />
        </DivButton>
      </Span>
    </DivProduct>
  )
}
