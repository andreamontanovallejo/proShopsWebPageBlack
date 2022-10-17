import React, { useEffect, useState } from 'react'
import { Divider } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Image, Transformation } from 'cloudinary-react'
import InputNumber from '../../../../helpers/InputText'
import { ModifyQuantityStored } from '../../products/components/ModifyQuantityStored'
import {
  About,
  CardEachProduct,
  ColorName,
  ColorQuantity,
  ColorsTitle,
  Content,
  ContentProduct,
  DivBottom,
  DivColors,
  DivModifyQuantity,
  DivPrice,
  EachColor,
  ImageDiv,
  Packaging,
  PriceBigScreen,
  PriceSmallScreen,
  ProductName,
  Quantity,
  QuantitySmallScreen,
} from './cardProductStyles'

export const CardProduct = props => {
  const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`
  const { product, savedProducts, setStoraged } = props

  const quantity =
    product && savedProducts.length > 0
      ? savedProducts.find(e => e.id === product._id).quantity
      : 0

  const [isEditing, setIsEditing] = useState(undefined)

  return (
    <CardEachProduct className={`card`}>
      <ImageDiv>
        <Image
          alt="producto Proshops"
          cloudName={cloudName}
          loading="lazy"
          publicId={product.imgSaved[0].url}
          quality="auto"
        >
          <Transformation fetchFormat="auto" quality="auto" />
        </Image>
      </ImageDiv>
      <Content>
        <ContentProduct>
          <About>
            <ProductName>{product.productName}</ProductName>
            <Packaging>{`${product.packaging[0].name} de ${product.measure.number} ${product.measure.measureType.name}`}</Packaging>

            <PriceSmallScreen>{`Precio unitario: $${product.price.toLocaleString(
              'de-DE',
            )}`}</PriceSmallScreen>
            <QuantitySmallScreen>
              <Quantity>
                <ShoppingCartIcon />
                {quantity}
              </Quantity>
            </QuantitySmallScreen>
          </About>
          <DivPrice>
            <PriceBigScreen>{`Precio unitario: $${product.price.toLocaleString(
              'de-DE',
            )}`}</PriceBigScreen>
            <Quantity>
              <ShoppingCartIcon />
              {quantity}
            </Quantity>
          </DivPrice>
        </ContentProduct>

        <Divider />
        <DivBottom>
          <DivModifyQuantity>
            <ModifyQuantityStored
              product={product}
              storagedProducts={savedProducts}
              setStoragedProducts={newArray => {
                props.setSavedProducts(newArray)

                localStorage.setItem(
                  'shoppingCartProshops',
                  JSON.stringify(newArray),
                )
              }}
            />
            <DeleteIcon
              onClick={() => {
                const filtering = savedProducts.filter(
                  e => e.id !== product._id,
                )

                props.setSavedProducts(filtering)

                localStorage.setItem(
                  'shoppingCartProshops',
                  JSON.stringify(filtering),
                )
              }}
            />
          </DivModifyQuantity>
        </DivBottom>
      </Content>
    </CardEachProduct>
  )
}
