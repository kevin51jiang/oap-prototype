import React from 'react';

const AttendsSchool = (props) => {
    return ( 
        <h3>Does this child attend school?</h3>

        <div className="ontario-form-group">
            <fieldset className="ontario-fieldset">
              <div className="ontario-radios">
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
                
              </div>
            </fieldset>
          </div>
     );
}
 
export default AttendsSchool;