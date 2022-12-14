import React from 'react'
import { Divider } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Image, Transformation } from 'cloudinary-react'
import { ModifyQuantityStored } from '../../products/components/ModifyQuantityStored'
import emptyImage from '../../../images/emptyProductImage.svg'
import {
  About,
  CardEachProduct,
  Content,
  ContentProduct,
  DivBottom,
  DivModifyQuantity,
  DivPrice,
  ImageDiv,
  ImageEmpty,
  Packaging,
  PriceBigScreen,
  PriceSmallScreen,
  ProductName,
  Quantity,
  QuantitySmallScreen,
} from './cardProductStyles'

export const CardProduct = props => {
  const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`
  const { priceListToUse, product, savedProducts, setStoraged } = props

  const quantity =
    product && savedProducts.length > 0
      ? savedProducts.find(e => e.id === product._id).quantity
      : 0

  return (
    <CardEachProduct className={`card`}>
      <ImageDiv>
        {product.imgSaved.length > 0 ? (
          <Image
            alt="producto Proshops"
            cloudName={cloudName}
            loading="lazy"
            publicId={product.imgSaved[0].url}
            quality="auto"
          >
            <Transformation fetchFormat="auto" quality="auto" />
          </Image>
        ) : (
          <ImageEmpty src={emptyImage}></ImageEmpty>
        )}
      </ImageDiv>
      <Content>
        <ContentProduct>
          <About>
            <ProductName>{product.productName}</ProductName>
            <Packaging>{`${product.packaging[0].name} de ${product.measure.number} ${product.measure.measureType.name}`}</Packaging>

            <PriceSmallScreen>{`Precio unitario: $${
              priceListToUse === '62fdccfaf8f153b5f9d77209'
                ? product.price.toLocaleString('de-DE')
                : Number(
                    product.priceLists.find(e => e.listId === priceListToUse)
                      .value,
                  ).toLocaleString('de-DE')
            }`}</PriceSmallScreen>
            <QuantitySmallScreen>
              <Quantity>
                <ShoppingCartIcon />
                {quantity}
              </Quantity>
            </QuantitySmallScreen>
          </About>
          <DivPrice>
            <PriceBigScreen>{`Precio unitario: $${
              priceListToUse === '62fdccfaf8f153b5f9d77209'
                ? product.price.toLocaleString('de-DE')
                : Number(
                    product.priceLists.find(e => e.listId === priceListToUse)
                      .value,
                  ).toLocaleString('de-DE')
            }`}</PriceBigScreen>
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
