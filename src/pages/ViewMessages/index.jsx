import React from "react";
import Message from "./Message";
import { useParams } from "react-router-dom";

import MessageExtended from "./MessageExtended";
import { useState } from "react";
import { useEffect } from "react";

const messages = {
  1234: {
    title: "Interim One-Time Funding approved",
    desc:
      "Your Interim One-Time Funding was approved. You can now begin your approved Ad labore deserunt est occaecat sunt labore. Voluptate non nulla do irure laboris ea. Incididunt adipisicing consectetur voluptate ea anim cillum dolore aute laboris cupidatat labore labore consectetur laboris. In labore mollit duis deserunt ipsum nisi reprehenderit irure cupidatat tempor qui duis. Incididunt dolore anim ea nulla esse sunt.",
    date: new Date(2020, 4, 3, 12, 10),
    content: <p>This is some very very very interesting body text</p>,
    status: "unread",
    id: "1234",
  },
  49848463: {
    title: "OAP registration completed",
    desc:
      "Your registration for the Ontario Autism Program was successfully processed on March 29, 2020. We’ve assigned you an OAP number and you should receive an invitation to apply for Interim One-Time Funding shortly. Need help or have questions? Contact us at oap@ontario.ca or call 1-800-XXX-XXXX.",
    content: (
      <>
        <p>
          Your registration for the Ontario Autism Program was successfully
          processed on <b>March 29, 2020</b>. <br />{" "}
        </p>
        <p>
          We’ve assigned you an OAP number and you should receive an invitation
          to apply for Interim One-Time Funding{" "}
          <span style={{ color: "#f00" }}>shortly</span>.{" "}
        </p>
        <p>
          Need help or have questions? Contact us at{" "}
          <a href="mailto:oap@ontario.ca">oap@ontario.ca</a> or call
          1-800-XXX-XXXX.
        </p>
      </>
    ),
    date: new Date(2020, 3, 29, 10, 45),
    status: "unread",
    id: "49848463",
  },
  84746256: {
    title: "OAP registration completed",
    desc:
      "You registration for the Ontario Autism Program was successfully submitted Reprehenderit aliquip aliquip non sint consequat in veniam officia labore elit voluptate id culpa labore. Et mollit aliqua nisi nisi sunt deserunt. Nostrud eiusmod eiusmod aliquip enim. Cillum deserunt eu labore magna aute cupidatat et. Ut voluptate dolore consequat magna anim non commodo nisi sint commodo mollit do. In cupidatat sint consequat ut pariatur velit aliquip. Eu laborum ad qui irure proident veniam.",
    date: new Date(2020, 3, 11, 10, 15),
    content: <p> This is some very very very interesting body text</p>,
    status: "read",
    id: "84746256",
  },
};

const ViewMessages = (props) => {
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <div className="view-messages">
      <h1>View updates</h1>

      {!openMessage ? (
        <>
          <p>
            Messages will act as an archive for all the status updates you’ve
            previously received.
          </p>

          {Object.keys(messages).map((messageId) => (
            <Message {...messages[messageId]} setOpenMessage={setOpenMessage} />
          ))}
        </>
      ) : (
        <>
          {messages[openMessage] && (
            <MessageExtended
              back={() => setOpenMessage(null)}
              {...messages[openMessage]}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ViewMessages;
