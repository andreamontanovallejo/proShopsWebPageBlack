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
        <Measure>{`${product.measure.number} ${product.measure.measureType.name}`}</Measure>
        <Price>{`$ ${Number(product.price).toLocaleString('de-DE')}`}</Price>

        <DivSpecialties>
          {product.specialties.map(each => (
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
