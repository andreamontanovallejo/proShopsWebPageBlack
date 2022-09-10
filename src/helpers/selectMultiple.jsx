import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

export default function MultipleSelectCheckmarks(props) {
  const [actualSelected, setActualSelected] = React.useState(props.defaultValue)

  React.useEffect(() => {
    setActualSelected(props.defaultValue)
  }, [props.defaultValue])

  const handleChange = newValue => {
    const findedNewItem =
      actualSelected && actualSelected.find(e => e._id === newValue._id)

    const selecteds = findedNewItem
      ? actualSelected.filter(e => e._id !== newValue._id)
      : [...actualSelected, newValue]

    props.onChange(selecteds)
  }

  return (
    <div>
      <FormControl sx={{ width: '100%', heigth: 58.578 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          error={props.error.length > 0}
        >
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          error={props.error.length > 0}
          value={props.defaultValue ? props.defaultValue : ''}
          input={<OutlinedInput label={props.placeholder} />}
          renderValue={selected =>
            selected.map(e => e[props.keyMessageName]).join(', ')
          }
          MenuProps={MenuProps}
        >
          {props.arrayOptions.map(option => (
            <MenuItem
              key={option[props.keyValueName]}
              value={option}
              onClick={() => handleChange(option)}
            >
              <Checkbox
                checked={
                  props.defaultValue.find(e => e._id === option._id) ===
                  undefined
                    ? false
                    : true
                }
              />

              <ListItemText primary={option[props.keyMessageName]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
