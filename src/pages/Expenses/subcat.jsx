import React, { useState } from "react";
import { expenseCat } from "../../constants/schemas";
import "./index.scss";
import { useHistory, withRouter } from "react-router-dom";
import { Callout, Button, Dropdown } from "on-ds";
import { useStore2 } from "../../constants/stores";
import {
  MANAGE_EXPENSES,
  LANDING,
  ADD_SERVICE_PROVIDER,
} from "../../constants/routes";

export const Component = withRouter(({ history, location }) => {});

class RadioSub extends React.Component {
  state = {
    selectedCat: "Other therapies and specialized services",
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
    const { location, history } = this.props;
    return (
      <>
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
                      {val} <br></br>{" "}
                    </label>
                  </div>
                );
              })}
              <br></br>
              <Button
                className="ontario-columns ontario-small-12 myButton"
                data={{
                  skin: "primary",
                  id: "apply-for-funding",
                  text: "Next",
                }}
                onClickHandler={() => {
                  history.push(ADD_SERVICE_PROVIDER);
                }}
              />
            </div>
          </fieldset>
        </div>
      </>
    );
  }
}

export default withRouter(RadioSub);
