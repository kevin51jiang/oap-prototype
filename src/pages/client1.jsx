import React from "react";
import ExpenseCard from "../components/ExpenseCard";

const Client1 = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <ExpenseCard
          category="Other therapies and specialized services"
          subcategory="Speech and language pathology"
          amount={700}
          date={new Date()}
        />
        <ExpenseCard
          category="Other therapies and specialized services"
          subcategory="Speech and language pathology"
          amount={500}
          date={new Date()}
        />
        <ExpenseCard
          category="Other therapies and specialized services"
          subcategory="Speech and language pathology"
          amount={300}
          date={new Date()}
        />
        <ExpenseCard
          category="Other therapies and specialized services"
          subcategory="Speech and language pathology"
          amount={71100}
          date={new Date()}
        />
      </div>
    </>
  );
};

export default Client1;
