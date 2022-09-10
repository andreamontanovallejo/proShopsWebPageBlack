import React from "react";
import Styles from "./rangePickerDateStyles.module.scss";
import RangePicker from "react-range-picker";

function RangePickerDate(props) {
  return (
    <RangePicker
      className={` ${Styles.divRangePicker}`}
      onDateSelected={props.onDateChanges}
      dateFormat="dd  MM yyyy"
      placeholderText="Elige fechas:"
    />
  );
}

export default RangePickerDate;
