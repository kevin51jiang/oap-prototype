const countries = [
  "Canada",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo {Democratic Rep}",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland {Republic}",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea North",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar {Burma}",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St Kitts & Nevis",
  "St Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const address = {
  validate: (formData, errors) => {
    return errors;
  },

  schema: {
    type: "object",
    properties: {
      "Street name and number": { type: "string" },
      Unit: { type: "string" },
      City: { type: "string" },
      "Postal code": { type: "string" },
      Province: {
        type: "string",
        enum: [
          "Alberta",
          "British Columbia",
          "Manitoba",
          "New Brunswick",
          "Newfoundland and Labrador",
          "Nova Scotia",
          "Prince Edward Island",
          "Quebec",
          "Saskatchewan",
          "Ontario",
          "Northwest Territories",
          "Nunavut",
          "Yukon ",
        ],
        default: "Ontario",
        title: "Province",
      },
      Country: { type: "string", enum: countries, default: "Canada" },
    },
    required: ["Street name and number", "City", "Province", "Postal code"],
  },
};

export const fullname = {
  validate: (formData, errors) => {
    return errors;
  },
  schema: {
    type: "object",
    title: "Name",
    properties: {
      "First name": { type: "string" },
      "Middle name": { type: "string" },
      "Last name": { type: "string" },
    },
    required: ["First name", "Last name"],
  },
};

export const phoneNumber = {
  validate: (formData, errors) => {
    // phone number regex from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
    const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!phoneNumberRegex.test(formData["Phone number"])) {
      errors["Phone number"].addError("Please enter a valid phone number");
    }
    return errors;
  },
  schema: {
    type: "object",
    title: "Phone number",
    properties: {
      "Phone number": {
        type: "string",
      },
    },
    required: ["Phone number"],
  },
};

export const banking = {
  validate: (formData, errors) => {
    if (formData["Transit number"].length !== 5) {
      errors["Transit number"].addError("must be 5 characters long.");
    }
    if (formData["Financial institution number"].length !== 3) {
      errors["Financial institution number"].addError(
        "must be 3 characters long."
      );
    }
    if (formData["Account number"].length !== 12) {
      errors["Account number"].addError("must be 12 characters long.");
    }

    return errors;
  },
  schema: {
    type: "object",
    title: "Banking",
    properties: {
      "Transit number": { type: "string" },
      "Financial institution number": { type: "string" },
      "Account number": { type: "string" },
    },
  },
  required: [
    "Transit number",
    "Financial institution number",
    "Account number",
  ],
};

export const expenseCat = {
  "Evidence-based behavioural services": {
    value: "Evidence based behavioural services",
    desc:
      "This includes behavioural assessments of your child's strengths to inform a treatment plan, ABA, consultations with primary caregivers, etc.",
    sub: [
      "Behavioural assessment",
      "Evidence-based behavioural service",
      "Behavioural consultation",
    ],
  },
  "Additional Autism services and supports": {
    value: "Additional Autism services and supports",
    desc:
      "Includes curriculum-based intervientions, life and social skill training programs, caregiver training, specialized school services, access to service dog, etc.",
    sub: [
      "Curriculum-based interventions",
      "Life skills and social skills training programs",
      "Employment supports",
      "Parent and caregiver capacity building and training",
      "Specialized independent school services",
      "Fees to access a certified service or guide dog from an accredited training facility",
    ],
  },
  "Other therapies and specialized services": {
    value: "Other therapies and specialized services",
    desc:
      "Includes services, assessments and consultations delivered by licensed professionals such as speech therapy, occupational therapy, and physiotherapy services.",
    sub: [
      "Speech and language pathology",
      "Occupational therapy",
      "Physiotherapy",
    ],
  },
  Respite: {
    value: "Respite",
    desc:
      "Respite services provide temporary relief by giving primary caregivers a break. These services can also provide your child or youth with the chance to interact with other adults and children.",
    sub: [
      "Respite services",
      "Fees for community recreational activities and classes, cultural activities and/or camp programs",
    ],
  },
  "Family service planning and support": {
    value: "Family service planning and support",
    desc:
      "Includes interpretation and translation services, administrative employer costs, and up to 10% of your budget on individualized family service planning and support",
    sub: [
      "Interpretation and translation services",
      "Individualized family service planning and support (including administrative employer costs, if applicable)",
    ],
  },
  Travel: {
    value: "Travel",
    desc:
      "Includes travel to a service provider, paying a service provider to get to you, and travel costs to access autism-specific training for caregivers or service providers.",
    sub: [
      "Bus",
      "Train",
      "Air fare",
      "Parking",
      "Mileage (for travel by private vehicle)",
    ],
  },
  Technology: {
    value: "Technology",
    desc:
      "Includes computers, smart phonesm touch-screen tablets (every two years) as well as software and applications.",
    sub: [
      "Desktop computer, laptop computer, touch screen tablet or smart phone",
      "Computer software or applications",
    ],
  },
  "Program materials and equipment": {
    value: "Program materials and equipment",
    desc:
      "Includes program materials and equiptment such as books, visual timers, protective equiptment, augmentative communication devices.",
    sub: ["Program materials", "Supporting equipment"],
  },
};
