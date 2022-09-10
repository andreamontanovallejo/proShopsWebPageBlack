import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { makeStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import React from 'react'
import Styles from './inputPasswordStyles.module.scss'

const useStyles = makeStyles(theme => ({
  text: {
    // '& > *': {
    //   margin: theme.spacing(0),
    //   width: '100%',
    // },
  },
}))

export default function InputPassword(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    password: '',

    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <FormControl
      className={`${classes.text} ${Styles.formInput}`}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">
        {props.placeholder}
      </InputLabel>
      <OutlinedInput
        id={props.name}
        type={values.showPassword ? 'text' : 'password'}
        defaultValue={props.defaultValue}
        name={props.name}
        onChange={event => props.onChange(event)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
    </FormControl>
  )
}
