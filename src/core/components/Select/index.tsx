/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export interface ISelectBoxValues {
  id: number,
  label: string,
}

export interface ISelectBox {
  name: string,
  value: string,
  options: Array<ISelectBoxValues> | undefined,
  handleChange(value: React.ChangeEvent<{ value: unknown }>): void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 232,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectBox: React.FC <ISelectBox> = ({
  name, value, options, handleChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label={name}
      >
        {options && options.map((option) => (
          <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
        ))}

      </Select>
    </FormControl>
  );
};

export default SelectBox;
