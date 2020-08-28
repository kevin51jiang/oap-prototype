import React from "react";
import { Card } from "antd";
import { styled, css } from "emotion";
import { getFormattedDate } from "../utils";
import "../constants/schemas";

import { GoChevronRight } from "react-icons/go";
import "./ExpenseCard.scss";

const ExpenseCard = (props) => {
  return (
    <div className="ontario-columns ontario-small-12 ontario-medium-6">
      <div
        className={"expense-card " + (props.className ? props.className : "")}
        style={props.style || {}}
      >
        <div className="category">{props.category}</div>
        <div className="middle-container">
          <span className="subcategory">{props.subcategory}</span>
        </div>

        <div className="chev-icon">
          <GoChevronRight onClick={props.onClick ? props.onClick : () => {}} />
        </div>

        <div className="card-bottom">
          <div className="bottom-opt">
            <span>Amount</span> <br />${props.amount.toFixed(2)}
          </div>
          <div className="bottom-opt">
            <span>Receipt date</span> <br />
            {getFormattedDate(props.date)}
          </div>
          <div className="bottom-opt">
            {!props.noDelete && <button>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
