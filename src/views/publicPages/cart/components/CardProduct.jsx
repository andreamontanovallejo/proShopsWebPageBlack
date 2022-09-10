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
    savedProducts.length > 0
      ? savedProducts.find(e => e.id === product._id).quantity
      : 0

  const [colorsSelected, setColorsSelected] = useState([
    ...product.colors
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(e => {
        return {
          colorId: e._id,
          colorName: e.name,
          quantity: 0,
        }
      }),
  ])

  const [sumOfColors, setSumOfColors] = useState(0)
  const [isEditing, setIsEditing] = useState(undefined)

  /*   useEffect(() => {
    const sum = colorsSelected.reduce((a, b) => a + b.quantity, 0)
    setSumOfColors(sum)
    setIsEditing(undefined)

    if (colorsSelected.length > 0) {
      const others = savedProducts.filter(e => e.id !== product._id)
      const newArray = [
        ...others,
        {
          ...savedProducts.find(e => e.id === product._id),
          colorsSelected,
          error: parseInt(sum) !== parseInt(quantity),
        },
      ].sort((a, b) => a.id.localeCompare(b.id))

      props.setSavedProducts(newArray)

      localStorage.setItem('shoppingCartProshops', JSON.stringify(newArray))
      setStoraged(newArray)
    }
  }, [colorsSelected]) */

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
            <Packaging>{`${product.packaging.name} de ${product.measure.number} ${product.measure.measureType.name}`}</Packaging>

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
          <DivColors>
            {product.colors.length > 0 && (
              <>
                <ColorsTitle>Elige los colores:</ColorsTitle>
                {colorsSelected.map(color => (
                  <EachColor key={color.colorId}>
                    {isEditing === color.colorId ? (
                      <InputNumber
                        defaultValue={color.quantity}
                        min={0}
                        max={quantity - (sumOfColors - color.quantity)}
                        type={'number'}
                        error={[]}
                        disabled={
                          sumOfColors >= quantity && color.quantity === 0
                        }
                        onChange={event => {
                          const otherColors = colorsSelected.filter(
                            e => e.colorId !== color.colorId,
                          )

                          setColorsSelected(
                            [
                              ...otherColors,
                              {
                                colorId: color.colorId,
                                colorName: color.colorName,
                                quantity:
                                  parseInt(event.target.value) >
                                  quantity - (sumOfColors - color.quantity)
                                    ? parseInt(quantity) -
                                      (sumOfColors - color.quantity)
                                    : parseInt(event.target.value) < 0
                                    ? 0
                                    : parseInt(event.target.value),
                              },
                            ].sort((a, b) =>
                              a.colorName.localeCompare(b.colorName),
                            ),
                          )
                        }}
                      />
                    ) : (
                      <ColorQuantity>
                        {color.quantity}{' '}
                        <EditIcon onClick={() => setIsEditing(color.colorId)} />
                      </ColorQuantity>
                    )}

                    <ColorName>{color.colorName}</ColorName>
                  </EachColor>
                ))}
              </>
            )}
          </DivColors>

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
