import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import InputMultiline from '../../../../helpers/InputMultiline'
import { Image, Transformation } from 'cloudinary-react'

import {
  DivContainer,
  BackgroundImage,
  TextIntroductionContainer,
  Title,
  Text,
  ImgInfo,
  ImgSmall,
  Line,
  DivDisplayFlex,
} from './introductionStyles'

export default function Introduction(props) {
  const [isEditing, setIsEditing] = useState(false)
  const cloudName = 'hz7ogjasa'

  return (
    <DivContainer>
      <BackgroundImage background={props.src}>
        <Image
          cloudName={cloudName}
          publicId={props.src}
          alt="pintura en galeria de arte art gallery"
          quality="auto"
          loading="lazy"
        >
          <Transformation fetchFormat="auto" />
        </Image>
        <ImgSmall>
          <Line>{`Obra: ${props.img.name}`}</Line>
          <Line>{`Artista: ${
            props.authors.find(e => e._id === props.img.author).name
          } ${
            props.authors.find(e => e._id === props.img.author).lastname
          }`}</Line>
        </ImgSmall>
        <DivDisplayFlex>
          <TextIntroductionContainer>
            <Title>
              La Escala - Galería de Arte
              {!isEditing && props.user && props.user.userType === 'admin' && (
                <EditIcon onClick={() => setIsEditing(true)} />
              )}
            </Title>
            {isEditing && props.user && props.user.userType === 'admin' ? (
              <InputMultiline
                error={[]}
                type={'text'}
                min={0}
                max={400}
                name={'textIntroduction'}
                defaultValue={props.textIntroduction}
                placeholder={'Escriba una bienvenida'}
                onChange={props.onChangeTextIntroduction}
              />
            ) : (
              <Text>{props.textIntroduction || ''}</Text>
            )}
          </TextIntroductionContainer>
        </DivDisplayFlex>

        <ImgInfo>
          <Line>{`Obra: ${props.img.name}`}</Line>
          <Line>{`Artista: ${
            props.authors.find(e => e._id === props.img.author).name
          } ${
            props.authors.find(e => e._id === props.img.author).lastname
          }`}</Line>
        </ImgInfo>
      </BackgroundImage>
    </DivContainer>
  )
}
