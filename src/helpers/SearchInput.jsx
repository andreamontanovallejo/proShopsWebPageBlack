import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import Styles from './SearchInputStyles.module.scss'

const useStyles = makeStyles(theme => ({
  text: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
    },
  },
}))

export default function SearchInput(props) {
  const classes = useStyles()

  return (
    <form
      className={`${classes.text} ${Styles.formInput}`}
      noValidate
      autoComplete="off"
    >
      {props.error.length === 0 ? (
        <>
          <Paper className={classes.root} elevation={1}>
            <TextField
              autoFocus={props.autoFocus}
              type={props.type}
              className={`${Styles.textField}`}
              id="mui-theme-provider-outlined-input"
              variant="outlined"
              InputProps={{ inputProps: { min: props.min, max: props.max } }}
              name={props.name}
              defaultValue={props.defaultValue}
              label={props.placeholder}
              onChange={event => props.onChange(event.target.value)}
            />
            {props.showIcon && (
              <IconButton aria-label="Search">
                <SearchIcon />
              </IconButton>
            )}
          </Paper>
        </>
      ) : (
        <Paper className={classes.root} elevation={1}>
          <TextField
            error
            autoFocus={props.autoFocus}
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
          {props.showIcon && (
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
          )}
        </Paper>
      )}
    </form>
  )
}
