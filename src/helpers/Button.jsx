import React from 'react'
import { Button, DivIconEdit } from '../helpers/buttonStyles'
import EditChip from '../helpers/EditChip'
import Agent from '../config'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function button(props) {
  const user = Agent.currentUser
  return (
    <div>
      <Button
        className={`btn`}
        onClick={props.onClick}
        background={props.background}
        textColor={props.textColor}
        disabled={props.disabled}
      >
        {props.icon === 'ShoppingCartIcon' && <ShoppingCartIcon />}
        <span>{props.text}</span>
        {user && user.userType === 'admin' && props.editButton && (
          <DivIconEdit>
            <EditChip editText={props.editText} editColor={props.editColor} />
          </DivIconEdit>
        )}
      </Button>
    </div>
  )
}
