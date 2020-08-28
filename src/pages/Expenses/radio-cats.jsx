import React from "react";
import { withRouter } from "react-router-dom";
import { expenseCat } from "../../constants/schemas";
import "./index.scss";

export const Component = withRouter(({ history, location }) => {});

class RadioDrop extends React.Component {
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
  //
  render() {
    const { location, history } = this.props;
    return (
      <>
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <div className="ontario-radios">
              {Object.keys(expenseCat).map((val) => {
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
                      <p className="no-bolding open-sans">
                        {expenseCat[val].desc}
                      </p>
                    </label>
                  </div>
                );
              })}
            </div>
          </fieldset>
        </div>
      </>
    );
  }
}

export default withRouter(RadioDrop);
