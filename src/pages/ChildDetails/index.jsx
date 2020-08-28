import React, { useEffect } from "react";
import { Input } from "on-ds";
import { useStore3 } from "../../constants/stores";
import DatePicker from "../../components/DatePicker";
import { useState } from "react";
import { Checkbox } from "antd";
import { CHILD_DETAILS } from "../../constants/routes";
import { useHistory } from "react-router-dom";
import { Button } from "on-ds";

const PrimaryCaregiverDetails = (props) => {
  const store = useStore3();
  //   const secondary = useStore3((state) => state.primary);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseAddress, setHouseAddress] = useState({});
  const [DOB, setDOB] = useState("");

  const [sameAsPrimaryCaregiver, setSameAsPrimaryCaregiver] = useState(true);

  const history = useHistory();

  useEffect(() => {
    store.secondary.firstName = firstName;
  }, [firstName]);

  useEffect(() => {
    store.secondary.lastName = lastName;
  }, [lastName]);

  useEffect(() => {
    store.secondary.houseAddress = houseAddress;
  }, [houseAddress]);

  useEffect(() => {
    store.secondary.DOB = DOB;
  }, [DOB]);

  useEffect(() => {
    if (sameAsPrimaryCaregiver) {
      store.secondary.houseAddress = {};
      setHouseAddress({});
    }
  }, [sameAsPrimaryCaregiver]);

  return (
    <div className="primary-caregiver-details">
      <h1>Secondary caregiver details</h1>

      <label htmlFor="firstName">First Name</label>
      <Input
        data={{ id: "firstName", char: "20", value: firstName }}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <label htmlFor="lastName">Last name</label>
      <Input
        data={{ id: "lastName", char: "20", value: lastName }}
        onChange={(e) => setLastName(e.target.value)}
      />

      <h2>Date of birth</h2>
      <DatePicker onChange={(dob) => setDOB(dob)} />

      <h2>House Address</h2>
      <Checkbox
        onChange={(e) => setSameAsPrimaryCaregiver(e.target.checked)}
        defaultChecked={true}
        className="ontario-margin-bottom-16-!"
      >
        Same as primary caregiver
      </Checkbox>

      {!sameAsPrimaryCaregiver && (
        <>
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
        </>
      )}

      <Button
        data={{ id: "next", skin: "primary", text: "Next" }}
        onClickHandler={() => {
          history.push(CHILD_DETAILS);
        }}
      />
    </div>
  );
};

export default PrimaryCaregiverDetails;
