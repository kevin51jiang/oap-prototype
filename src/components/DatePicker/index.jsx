import React from "react";

import { Input } from "on-ds";
import { useState } from "react";

import "./index.scss";
import { useEffect } from "react";

const DatePicker = (props) => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (props.onChange) {
      props.onChange(`${date}/${month}/${year}`);
    }
  }, [date, month, year]);

  return (
    <div className="date-picker">
      <div className="date-block flex-double">
        <label htmlFor="year">YYYY</label>
        <Input
          data={{ char: "4", id: "year", name: "year", value: year }}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </div>
      <div className="date-block">
        <label htmlFor="month">MM</label>
        <Input
          data={{ char: "2", id: "month", name: "month", value: month }}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
      </div>
      <div className="date-block">
        <label htmlFor="date">DD</label>
        <Input
          data={{ char: "2", id: "date", name: "date", value: date }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DatePicker;
