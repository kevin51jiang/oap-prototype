import React, { useState } from "react";
import { expenseCat } from "../../constants/schemas";
import "./index.scss";

export default class RadioDrop extends React.Component {
  state = {
    selectedCat: "",
    selectedSubCat: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedCat !== this.state.selectedCat ||
      prevState.selectedSubCat !== this.state.selectedSubCat
    ) {
      this.props.onChange(this.state.selectedCat, this.state.selectedSubCat);
    }
  }

  render() {
    return (
        <div className="ontario-form-group">
          <select
            className="ontario-input ontario-dropdown"
            id="dropdown-list-example"
            name="dropdown-list-example"
            value={this.state.selectedCat}
            onChange={(e) => this.setState({ selectedCat: e.target.value })}
          >
            {Object.keys(expenseCat).map((val) => (
              <option key={expenseCat[val].value} value={expenseCat[val].value}>
                {expenseCat[val].value}
              </option>
            ))}
          </select>
          <div className="ontario-form-group">
            <fieldset className="ontario-fieldset">
              <div className="ontario-radios">
                {expenseCat[this.state.selectedCat].sub.map((val) => {
                  return (
                    <div className="ontario-radios__item" key={val}>
                      <input
                        className="ontario-radios__input"
                        id={val + "-input"}
                        name="subcat"
                        type="radio"
                        onChange={() => this.setState({ selectedSubCat: val })}
                      />
                      <label
                        className="ontario-label ontario-radios__label"
                        htmlFor={val + "-input"}
                      >
                        {val}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </div>
    );
  }
}
