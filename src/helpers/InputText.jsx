import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import Styles from './inputTextStyles.module.scss'

const useStyles = makeStyles(theme => ({
  text: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
    },
  },
}))

export default function Input(props) {
  const classes = useStyles()

  return (
    <form
      className={`${classes.text} ${Styles.formInput}`}
      noValidate
      autoComplete="off"
    >
      {props.error.length === 0 ? (
        <TextField
          disabled={props.disabled}
          type={props.type}
          className={`${Styles.textField}`}
          id="mui-theme-provider-outlined-input"
          variant="outlined"
          InputProps={{ inputProps: { min: props.min, max: props.max } }}
          name={props.name}
          defaultValue={props.defaultValue}
          label={props.placeholder}
          onBlur={event => props.onChange(event)}
        />
      ) : (
        <TextField
          disabled={props.disabled}
          error
          type={props.type}
          className={`${Styles.textField}`}
          id="outlined-error"
          variant="outlined"
          InputProps={{ inputProps: { min: props.min, max: props.max } }}
          name={props.name}
          defaultValue={props.defaultValue}
          label={props.error !== 'empty' ? props.error : props.placeholder}
          onBlur={event => props.onChange(event)}
        />
      )}
    </form>
  )
}
