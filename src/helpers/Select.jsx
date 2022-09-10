import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
// import FormHelperText from '@material-ui/core/FormHelperText'

import Styles from './selectStyles.module.scss'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    width: '100%',
  },
}))

export default function InputSelect(props) {
  const classes = useStyles()

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  return (
    <FormControl
      variant="outlined"
      className={`${classes.formControl} ${Styles.formControl}`}
    >
      {props.error.length === 0 ? (
        <>
          <InputLabel ref={inputLabel} className={`${Styles.label}`}>
            {props.placeholder}
          </InputLabel>
          <Select
            className={`${Styles.select}`}
            name={props.name}
            onChange={event => props.onChange(event.target.value)}
            labelWidth={labelWidth}
            value={props.defaultValue ? props.defaultValue : ''}
          >
            {props.firstOption && (
              <MenuItem
                key={props.firstOption[props.keyValueName]}
                value={props.firstOption[props.keyValueName]}
              >
                {props.firstOption[props.keyMessageName]}
              </MenuItem>
            )}
            {props.arrayOptions.map(option => (
              <MenuItem
                key={option[props.keyValueName]}
                value={option[props.keyValueName]}
              >
                {option[props.keyMessageName]}
              </MenuItem>
            ))}
          </Select>
        </>
      ) : (
        <>
          <InputLabel error ref={inputLabel} className={`${Styles.label}`}>
            {props.placeholder}
          </InputLabel>
          <Select
            error
            className={`${Styles.select}`}
            name={props.name}
            onChange={event => props.onChange(event.target.value)}
            labelWidth={labelWidth}
            value={props.defaultValue ? props.defaultValue : ''}
          >
            {props.arrayOptions.map(option => (
              <MenuItem
                key={option[props.keyValueName]}
                value={option[props.keyValueName]}
              >
                {option[props.keyMessageName]}
              </MenuItem>
            ))}
          </Select>
          {/* {props.error !== 'empty' ? (
            <FormHelperText error>{props.error}</FormHelperText>
          ) : null} */}
        </>
      )}
    </FormControl>
  )
}
