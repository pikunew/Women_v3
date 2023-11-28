import React from "react";
import Dropdown from "react-dropdown";
import PropTypes from 'prop-types'; // Import PropTypes

const options = [
   { value: "op1", label: "All Location" },
   { value: "op2", label: "Andaman and Nicobar Islands" },
   { value: "op3", label: "Andra Pradesh" },
   { value: "op4", label: "Arunachal Pradesh" },
   { value: "op5", label: "Assam" },
   { value: "op6", label: "Bihar" },
   { value: "op7", label: "Chandigarh" },
   { value: "op8", label: "Chhattisgarh" },
   { value: "op9", label: "Daman and Diu" },
   { value: "op10", label: "Delhi" },
   { value: "op11", label: "Goa" },
   { value: "op12", label: "Gujarat" },
   { value: "op13", label: "Haryana" },
   { value: "op14", label: "Himachal Pradesh" },
   { value: "op15", label: "Jammu & Kashmir" },
   { value: "op16", label: "Jharkhand" },
   { value: "op17", label: "Karnataka" },
   { value: "op18", label: "Kerala" },
   { value: "op19", label: "Lakshadweep" },
   { value: "op20", label: "Madhya Pradesh" },
   { value: "op21", label: "Maharashtra" },
   { value: "op22", label: "Manipur" },
   { value: "op25", label: "Mizoram" },
   { value: "op26", label: "Nagaland" },
   { value: "op27", label: "Odisha" },
   { value: "op28", label: "Puducherry" },
   { value: "op29", label: "Punjab" },
   { value: "op30", label: "Rajasthan" },
   { value: "op31", label: "Sikkim" },
   { value: "op32", label: "Tamil Nadu" },
   { value: "op33", label: "Telangana" },
   { value: "op34", label: "Tripura" },
   { value: "op35", label: "Uttarakhand" },
   { value: "op36", label: "Uttar Pradesh" },
   { value: "op37", label: "West Bengal" },
];

function SelectLocation({ setLocation = () => {} }) {
   return (
      <Dropdown
         options={options}
         className="react-dropdown select-location"
         value={options[0]}
         onChange={(e) => {
            if (e.label === "All Location") {
               setLocation("");
            } else {
               setLocation(e.label);
            }
         }}
      />
   );
}

// Add prop type validation
SelectLocation.propTypes = {
   setLocation: PropTypes.func.isRequired,
 };

export default SelectLocation;
