import React from "react";

import { Callout, Button } from "on-ds";

import LogoLink from "../../components/LogoLink";

import { MdInsertDriveFile, MdEdit, MdRefresh } from "react-icons/md";

import "./index.scss";
import { useGlobalStore } from "../../constants/stores";
import { MANAGE_EXPENSES } from "../../constants/routes";
import ApplyForFunding from "./ApplyForFunding";
import IOTFDeposited from "./IOTFDeposited";
import ReviewAndSubmitExpensesCallout from "./ReviewAndSubmitExpensesCallout";

const data = {
  firstName: "Joel",
  lastName: "Cotton",
  OAPNum: "f-042-0452",
  regDate: new Date(2020, 3, 11),
};

const Dashboard = (props) => {
  const global = useGlobalStore();

  const ViewMessages = () => {
    return (
      <>
        <span>View updates</span> <span style={{ color: "#f00" }}>(2)</span>
      </>
    );
  };

  return (
    <div className="dashboard">
      <h1 className="ontario-margin-bottom-32-!">
        Welcome to your OAP dashboard!
      </h1>

      <h2>Joel Cotton</h2>
      <div className="ontario-margin-bottom-8-!">
        <div className="oap-num">Registration date: March 11, 2020</div>
        <div className="oap-num">OAP Number: {data.OAPNum}</div>
      </div>

      <div className="ontario-margin-bottom-16-!">
        <a className="child-op" href="#">
          Switch Child
        </a>
        <a className="child-op" href="#">
          Add Child
        </a>
      </div>

      {/* The callout */}
      <div className="ontario-margin-bottom-24-!">
        {global.flow === 1 ? (
          <ApplyForFunding />
        ) : global.flow === "2a" ? (
          <IOTFDeposited />
        ) : global.flow.toString().includes("3") ? (
          <Callout
            data={{
              type: "success",
              message: (
                <div>
                  Joel’s registration for the Ontario Autism Program was
                  submitted <b>March 11, 2020</b> and is waiting to be reviewed.
                  <br />
                  <br />
                  Your submission number is ###-###
                </div>
              ),
            }}
          />
        ) : (
          <ReviewAndSubmitExpensesCallout />
        )}
      </div>

      {global.flow !== 1 && (
        <LogoLink
          icon={MdInsertDriveFile}
          title="Manage Expenses"
          titleLink={MANAGE_EXPENSES}
          text="Create and edit new expenses, and finalize and submit them at the end of your funding period."
        />
      )}
      <LogoLink
        icon={MdRefresh}
        Title={ViewMessages}
        titleLink="/messages"
        text="View status updates related to your application and funding."
      />
      <LogoLink
        icon={MdEdit}
        title="Edit information"
        titleLink="/"
        text="Edit and update you/your child's personal and banking information."
      />
    </div>
  );
};

export default Dashboard;
