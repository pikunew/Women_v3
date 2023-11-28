// UserSignup.js

import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { userSignUpAction } from "../../redux/actions/userAction";
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
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  role: yup.number().required("Role is required"),
});

const UserSignup = () => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: 0, // Default to regular user
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(userSignUpAction(values));
    },
  });

  return (
    <Box m="20px">
      <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
        Create Users
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
            label="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            name="firstName"
            error={!!formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            name="lastName"
            error={!!formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
            sx={{ gridColumn: "span 2", backgroundColor: "white" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            error={!!formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ gridColumn: "span 4", backgroundColor: "white" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="password"
            label="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            error={!!formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ gridColumn: "span 4", backgroundColor: "white" }}
          />
          <FormControl
            fullWidth
            sx={{ gridColumn: "span 4", backgroundColor: "white" }}
          >
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.role && !!formik.errors.role}
            >
              <MenuItem value={0}>Employee</MenuItem>
              <MenuItem value={1}>Admin</MenuItem>
            </Select>
            {formik.touched.role && formik.errors.role && (
              <Typography variant="caption" color="error">
                {formik.errors.role}
              </Typography>
            )}
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserSignup;
