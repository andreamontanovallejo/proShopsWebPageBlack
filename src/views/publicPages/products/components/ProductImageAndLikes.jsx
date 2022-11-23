import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Image, Transformation } from 'cloudinary-react'
import emptyImage from '../../../images/emptyProductImage.svg'
import { useState } from 'react'
import {
  DivImage,
  DivLikesAndMorePhotos,
  DivNextPicture,
  DivPreviousPicture,
  ImageEmpty,
} from '../productsStyles'
import LikesAndDislikes from './likesAndDislikes'

export const ProductImageAndLikes = props => {
  const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`
  const { product } = props
  const [pictureIndex, setPictureIndex] = useState({
    index: 0,
    product: undefined,
  })
  return (
    <>
      <DivImage
        onClick={() => props.pushTo(`/products/product/${product._id}`)}
      >
        {product.imgSaved.length > 0 ? (
          <Image
            className={`productImage`}
            cloudName={cloudName}
            id={product._id}
            publicId={product.imgSaved[pictureIndex.index].url}
            alt="Producto proshops"
            quality="auto"
            loading="lazy"
          >
            <Transformation fetchFormat="auto" quality="auto" />
          </Image>
        ) : (
          <ImageEmpty src={emptyImage} alt="Producto proshops"></ImageEmpty>
        )}
      </DivImage>
      <DivLikesAndMorePhotos>
        {product.imgSaved.length > 0 && (
          <DivPreviousPicture disable={pictureIndex.index === 0}>
            <ArrowBackIosIcon
              onClick={() => {
                pictureIndex.index > 0 &&
                  setPictureIndex({
                    index: pictureIndex.index - 1,
                    product: product._id,
                  })
              }}
            />
          </DivPreviousPicture>
        )}

        <LikesAndDislikes product={product} setLikes={props.setLikes} />

        {product.imgSaved.length > 0 && (
          <DivNextPicture
            disable={pictureIndex.index === product.imgSaved.length - 1}
          >
            <ArrowForwardIosIcon
              onClick={() => {
                pictureIndex.index < product.imgSaved.length - 1 &&
                  setPictureIndex({
                    index: pictureIndex.index + 1,
                    product: product._id,
                  })
              }}
            />
          </DivNextPicture>
        )}
      </DivLikesAndMorePhotos>
    </>
  )
}
