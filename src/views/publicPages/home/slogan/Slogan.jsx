import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import InputText from '../../../../helpers/InputText'

import { DivContainer } from './sloganStyles'

export default function Slogan(props) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <DivContainer>
      {isEditing ? (
        <InputText
          error={[]}
          type={'text'}
          name={'slogan'}
          defaultValue={props.slogan}
          placeholder={'Ingresa un texto'}
          onChange={props.onChangeSlogan}
        />
      ) : (
        props.slogan || 'Bienvenidos a Emporio Gorroño'
      )}
      {!isEditing && props.user && props.user.userType === 'admin' && (
        <EditIcon onClick={() => setIsEditing(true)} />
      )}
    </DivContainer>
  )
}
