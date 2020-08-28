import React, { useState } from "react";
import { Checkbox } from "antd";
import { Input, Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";
import { useHistory } from "react-router-dom";
import { SECONDARY_CAREGIVER_CONTACT } from "../../constants/routes";

const SecondaryCaregiverAddress = () => {
  const [sameAsHome, setSameAsHome] = useState(false);
  const [mailingAddress, setMailingAddress] = useState({});
  const history = useHistory();
  return (
    <>
      <h1>Secondary caregiver address</h1>

      <h3>House address</h3>
      <Checkbox
        onChange={(e) => setSameAsHome(e.target.checked)}
        className="ontario-margin-bottom-16-!"
        value={sameAsHome}
      >
        Same as primary caregiver
      </Checkbox>

      <>
        <label htmlFor="street">Street</label>
        <Input
          data={{
            id: "street",
            char: "20",
            value: sameAsHome ? "123 Ottawa Road" : mailingAddress.street || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, street: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="unit">Unit</label>
        <Input
          data={{
            id: "unit",
            char: "20",
            value: sameAsHome ? "" : mailingAddress.unit || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, unit: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="city">City</label>
        <Input
          data={{
            id: "city",
            char: "20",
            value: sameAsHome ? "Ottawa" : mailingAddress.city || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, city: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="postalCode">Postal code</label>
        <Input
          data={{
            id: "postalCode",
            char: "20",
            value: sameAsHome ? "K2J 0K6" : mailingAddress.postal || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, postal: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="province">Province</label>
        <Input
          data={{
            id: "province",
            char: "20",
            value: sameAsHome ? "ON" : mailingAddress.province || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, province: e.target.value })
          }
          disabled={sameAsHome}
        />
      </>

      <Button
        data={{ id: "next", skin: "primary", text: "Next step" }}
        onClickHandler={() => {
          history.push(SECONDARY_CAREGIVER_CONTACT);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </>
  );
};

export default SecondaryCaregiverAddress;
