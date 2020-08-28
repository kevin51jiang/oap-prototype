import React, { useEffect } from "react";
import { Input } from "on-ds";
import { useStore3 } from "../../constants/stores";
import DatePicker from "../../components/DatePicker";
import { useState } from "react";
import { Checkbox } from "antd";
import { PRIMARY_CAREGIVER_CONTACTS, LANDING } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { Button } from "on-ds";
import SaveAndFinishLater from "../../components/SaveAndFinishLater";

const PrimaryCaregiverDetails = (props) => {
  const store = useStore3();
  const primary = useStore3((state) => state.primary);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseAddress, setHouseAddress] = useState({});
  const [mailingAddress, setMailingAddress] = useState({});

  const [sameAsHome, setSameAsHome] = useState(true);

  const history = useHistory();

  useEffect(() => {
    store.primary.firstName = firstName;
  }, [firstName]);

  useEffect(() => {
    store.primary.lastName = lastName;
  }, [lastName]);

  useEffect(() => {
    store.primary.houseAddress = houseAddress;
  }, [houseAddress]);

  useEffect(() => {
    store.primary.mailingAddress = mailingAddress;
  }, [mailingAddress]);

  useEffect(() => {
    if (sameAsHome) {
      store.primary.mailingAddress = {};
      setMailingAddress(houseAddress);
    }
  }, [sameAsHome, houseAddress]);

  return (
    <div className="primary-caregiver-details">
      <h1>Primary caregiver details</h1>

      <h2>House Address</h2>
      <label htmlFor="street">Street</label>
      <Input
        data={{
          id: "street",
          char: "20",
          value: houseAddress.street || "",
        }}
        onChange={(e) =>
          setHouseAddress({ ...houseAddress, street: e.target.value })
        }
      />
      <label htmlFor="unit">Unit</label>
      <Input
        data={{ id: "unit", char: "20", value: houseAddress.unit || "" }}
        onChange={(e) =>
          setHouseAddress({ ...houseAddress, unit: e.target.value })
        }
      />
      <label htmlFor="city">City</label>
      <Input
        data={{ id: "city", char: "20", value: houseAddress.city || "" }}
        onChange={(e) =>
          setHouseAddress({ ...houseAddress, city: e.target.value })
        }
      />
      <label htmlFor="postalCode">Postal code</label>
      <Input
        data={{
          id: "postalCode",
          char: "20",
          value: houseAddress.postal || "",
        }}
        onChange={(e) =>
          setHouseAddress({ ...houseAddress, postal: e.target.value })
        }
      />
      <label htmlFor="province">Province</label>
      <Input
        data={{
          id: "province",
          char: "20",
          value: houseAddress.province || "",
        }}
        onChange={(e) =>
          setHouseAddress({ ...houseAddress, province: e.target.value })
        }
      />

      <h2>Mailing Address</h2>
      <Checkbox
        onChange={(e) => setSameAsHome(e.target.checked)}
        className="ontario-margin-bottom-16-!"
        defaultChecked
      >
        Same as home address
      </Checkbox>

      <>
        <label htmlFor="street">Street</label>
        <Input
          data={{
            id: "street",
            char: "20",
            value: mailingAddress.street || "",
          }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, street: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="unit">Unit</label>
        <Input
          data={{ id: "unit", char: "20", value: mailingAddress.unit || "" }}
          onChange={(e) =>
            setMailingAddress({ ...mailingAddress, unit: e.target.value })
          }
          disabled={sameAsHome}
        />
        <label htmlFor="city">City</label>
        <Input
          data={{ id: "city", char: "20", value: mailingAddress.city || "" }}
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
            value: mailingAddress.postal || "",
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
            value: mailingAddress.province || "",
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
          history.push(PRIMARY_CAREGIVER_CONTACTS);
        }}
        className=" ontario-small-12 ontario-medium-8"
      />
      <SaveAndFinishLater />
    </div>
  );
};

export default PrimaryCaregiverDetails;
