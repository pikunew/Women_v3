import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { createHelplineAction } from "../../redux/actions/helplineAction";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const validationSchema = yup.object({
  stt: yup.string("Enter the status").required("Status is required"),
  uid: yup.string("Enter the UID").required("UID is required"),
  agen: yup.string("Enter the agency").required("Agency is required"),
  issue: yup.string("Select the issue").required("Issue is required"),

  map: yup.string("Enter the Location").required("Location is required"),
  num: yup.string("Enter the number").required("Number is required"),
  sup: yup
    .string("Enter the support type")
    .required("Support Type is required"),
  des: yup.string("Enter the description").required("Description is required"),
  lan: yup.string("Enter the language").required("Language is required"),
});

const CreateHelpline = () => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formik = useFormik({
    initialValues: {
      stt: "",
      uid: "",
      agen: "",
      issue: "",

      map: "",
      num: "",
      sup: "",
      des: "",
      lan: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(createHelplineAction(values));
    },
  });

  return (
    <Box m="20px">
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Create Helpline
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="UID"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.uid}
            name="uid"
            error={!!formik.touched.uid && !!formik.errors.uid}
            helperText={formik.touched.uid && formik.errors.uid}
            sx={{ gridColumn: "span 1", backgroundColor: "white" }}
          />

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Agency"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.agen}
            name="agen"
            error={!!formik.touched.agen && !!formik.errors.agen}
            helperText={formik.touched.agen && formik.errors.agen}
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          />
          <FormControl
            fullWidth
            variant="filled"
            sx={{ gridColumn: "span 1", backgroundColor: "white" }}
          >
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="stt"
              name="stt"
              value={formik.values.stt}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.stt && !!formik.errors.stt}
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>
              <MenuItem value="Verified">Verified</MenuItem>
              <MenuItem value="Not Verified">Not Verified</MenuItem>
            </Select>
            {formik.touched.stt && formik.errors.stt && (
              <Typography variant="caption" color="error">
                {formik.errors.stt}
              </Typography>
            )}
          </FormControl>

          <FormControl
            fullWidth
            variant="filled"
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          >
            <InputLabel id="issue-label">Issue</InputLabel>
            <Select
              labelId="issue-label"
              id="issue"
              name="issue"
              value={formik.values.issue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.issue && !!formik.errors.issue}
            >
              <MenuItem value="" disabled>
                Select an Issue
              </MenuItem>
              <MenuItem value="Adultary">Adultary</MenuItem>
              <MenuItem value="Blackmailing">Blackmailing</MenuItem>
              <MenuItem value="Bullying">Bullying</MenuItem>
              <MenuItem value="Career Counselling">Career Counselling</MenuItem>
              <MenuItem value="Cheating">Cheating</MenuItem>
              <MenuItem value="Cyber Bullying">Cyber Bullying</MenuItem>
              <MenuItem value="Death Threat">Death Threat</MenuItem>
              <MenuItem value="Dowry Harassement">Dowry Harassement</MenuItem>
              <MenuItem value="Maternity Related">Maternity Related</MenuItem>
              <MenuItem value="Rape">Rape</MenuItem>
              <MenuItem value="Salary,Wages,Leave">Salary,Wages,Leave</MenuItem>
              <MenuItem value="Sexual Haresment">Sexual Haresment</MenuItem>
              <MenuItem value="Stalking">Stalking</MenuItem>
              <MenuItem value="Workplace Issues">Workplace Issues</MenuItem>
              <MenuItem value="Cheating">Cheating</MenuItem>
            </Select>
            {formik.touched.issue && formik.errors.issue && (
              <Typography variant="caption" color="error">
                {formik.errors.issue}
              </Typography>
            )}
          </FormControl>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.num}
            name="num"
            error={!!formik.touched.num && !!formik.errors.num}
            helperText={formik.touched.num && formik.errors.num}
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          />

          <FormControl
            fullWidth
            variant="filled"
            sx={{ gridColumn: "span 1", backgroundColor: "white" }}
          >
            <InputLabel id="issue-label">Location</InputLabel>
            <Select
              labelId="Language"
              id="lan"
              name="lan"
              value={formik.values.map}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.map && !!formik.errors.map}
            >
              <MenuItem value="" disabled>
                Select a location
              </MenuItem>
              <MenuItem value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </MenuItem>
              <MenuItem value="Andra Pradesh">Andra Pradesh</MenuItem>
              <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
              <MenuItem value="Assam">Assam</MenuItem>
              <MenuItem value="Bihar">Bihar</MenuItem>
              <MenuItem value="Chandigarh">Chandigarh</MenuItem>
              <MenuItem value="Chattisgarh">Chattisgarh</MenuItem>
              <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Rape">Goa</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Haryana">Haryana</MenuItem>
              <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
              <MenuItem value="Jammu & Khasmir">Jammu & Khasmir</MenuItem>
              <MenuItem value="Karnataka">Karnataka</MenuItem>
              <MenuItem value="Kerela">Kerela</MenuItem>
              <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
              <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Manipur">Manipur</MenuItem>
              <MenuItem value="Mizoram">Mizoram</MenuItem>
              <MenuItem value="Nagaland">Nagaland</MenuItem>
              <MenuItem value="Odisha">Odisha</MenuItem>
              <MenuItem value="Puducherry">Puducherry</MenuItem>
              <MenuItem value="Punjab">Punjab</MenuItem>
              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
              <MenuItem value="Sikkim">Sikkim</MenuItem>
              <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
              <MenuItem value="Telengana">Telengana</MenuItem>
              <MenuItem value="Tripura">Tripura</MenuItem>
              <MenuItem value="Uttrakhand">Uttrakhand</MenuItem>
              <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
              <MenuItem value="West Bengal">West Bengal</MenuItem>
            </Select>
            {formik.touched.map && formik.errors.map && (
              <Typography variant="caption" color="error">
                {formik.errors.map}
              </Typography>
            )}
          </FormControl>

          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Language"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lan}
            name="lan"
            error={!!formik.touched.lan && !!formik.errors.lan}
            helperText={formik.touched.lan && formik.errors.lan}
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          />
          <FormControl
            fullWidth
            variant="filled"
            sx={{ gridColumn: "span 1", backgroundColor: "white" }}
          >
            <InputLabel id="status-label">Support Type</InputLabel>
            <Select
              labelId="status-label"
              id="sup"
              name="sup"
              value={formik.values.sup}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.sup && !!formik.errors.sup} 
            >
              <MenuItem value="" disabled>
                Support type
              </MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Physical">Physical</MenuItem>
            </Select>
            {formik.touched.stt && formik.errors.stt && (
              <Typography variant="caption" color="error">
                {formik.errors.stt}
              </Typography>
            )}
          </FormControl>
          <TextField
            fullWidth
            multiline
            rows={4} // You can adjust the number of rows as needed
            variant="filled"
            type="text"
            label="Description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.des}
            name="des"
            error={!!formik.touched.des && !!formik.errors.des}
            helperText={formik.touched.des && formik.errors.des}
            sx={{ gridColumn: "span 4", backgroundColor: "white" }}
          />
          {/* Add similar fields for map, num, sup, des, and lan */}
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create Helpline
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateHelpline;
