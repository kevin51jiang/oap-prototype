import create from "zustand";

import { devtools } from "zustand/middleware";

export const useStore1 = create((set) => ({
  OAPNum: "",

  desiredVerificationCode: "",
  generateAndSendVerificationCode: () => {
    // send the post request here
    // fetch('... verification code')

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    set(() => ({ desiredVerificationCode: verificationCode }));
  },

  birthday: "01/01/01",
}));

export const useStore2 = create(
         devtools((set) => ({
           verificationCode: "",
           expenseCategory: "",
           expenseSub: "",
           company: "",
           name: "",
           title: "",
           registrationNum: "",
           invoiceNum: "",
           invoiceDate: "",
           totalAmt: 0,
           expenseCard: {
             cat: "",
             subCat: "",
             company: "",
             name: "",
             title: "",
             register: "",
             year: "",
             month: "",
             day: "",
             invoiceNum: "",
             desc: "",
             amount: 0,
           },
           enteredExpenses: [],
         }))
       );

export const useStore3 = create(
  devtools((set) => ({
    setThing: (attrib, newVal) => set(() => ({ [attrib]: newVal })),
    email: "",
    wantsSecondary: "",
    primary: {
      firstName: "",
      lastName: "",
      DOB: "",
      address: {
        streetNameNum: "",
        unit: "",
        city: "",
        postal: "",
        province: "",
      },
      mailing_addr: {
        streetNameNum: "",
        unit: "",
        city: "",
        postal: "",
        province: "",
      },
      phone: "",
      preferredMethod: "",
    },
    secondary: {
      firstName: "",
      lastName: "",
      DOB: "",
      address: {
        streetNameNum: "",
        unit: "",
        city: "",
        postal: "",
        province: "",
      },
      email: "",
      phone: "",
    },
    child: {
      firstName: "",
      lastName: "",
      DOB: "",
      schoolBoard: "",
      schoolName: "",
      gender: "",
    },
  }))
);

export const useGlobalStore = create(
  devtools((set) => ({
    flow: 1,
    setFlow: (newFlow) => set((state) => ({ flow: newFlow })),
  }))
);
