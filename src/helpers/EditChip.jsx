import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ColorsPalet from '../helpers/ColorsPalet'
import Popover from '@material-ui/core/Popover'

import Styles from './editChipStyles.module.scss'

export default function EditChip(props) {
  const [anchorEl, setOpenEdit] = useState(null)
  const [openColorsPalet, setOpenColorsPalet] = useState(null)

  const handleClick = (event) => {
    setOpenEdit(event.currentTarget)
  }

  const handleSelectColor = (event) => {
    setOpenColorsPalet(event.currentTarget)
  }

  const handleClose = (toClose) => {
    if (toClose === 'anchorEl') {
      setOpenEdit(null)
    }
    if (toClose === 'openColorsPalet') {
      setOpenColorsPalet(null)
    }
  }

  const open = Boolean(openColorsPalet)
  const id = open ? 'simple-popover' : undefined
  return (
    <>
      <div className={`${Styles.container}`} onClick={handleClick}>
        {props.label}
        <EditIcon className={`${Styles.icon}`} />
      </div>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose('anchorEl')}
      >
        {props.editText && (
          <MenuItem onClick={() => handleClose('anchorEl')}>
            Editar Texto
          </MenuItem>
        )}
        {props.editColor && (
          <>
            <MenuItem
              onClick={(event) => {
                handleClose('openColorsPalet')
                handleSelectColor(event)
              }}
            >
              Editar Color
            </MenuItem>
            <Popover
              id={id}
              open={open}
              openColorsPalet={openColorsPalet}
              onClose={() => handleClose('openColorsPalet')}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <ColorsPalet selectColor={props.selectColor} />
            </Popover>
          </>
        )}
      </Menu>
    </>
  )
}
