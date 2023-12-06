import React, { useEffect } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  useProSidebar,
} from "react-pro-sidebar";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { Box, useTheme } from "@mui/material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import Person3Icon from "@mui/icons-material/Person3";
import Avatar from "@mui/material/Avatar";
import logoDashboard from "../../assets/images/favicon.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogoutAction,
  userProfileAction,
} from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Typography } from "@mui/material/";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const SidebarAdm = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const { palette } = useTheme();
  const { collapsed } = useProSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);

  //log out
  const logOut = () => {
    dispatch(userLogoutAction());
    navigate("/login");
  };

  return (
    <>
      <Sidebar backgroundColor="#003366" style={{ borderRightStyle: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <Box
              sx={{ pt: 3, pb: 5, display: "flex", justifyContent: "center" }}
            >
              {collapsed ? (
                <Avatar alt="logo dashboard" src={logoDashboard} />
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{
                      width: "100px",
                      heigth: "100px",
                      textAlign: "center",
                      transition: "all ease-out .5s",
                    }}
                    src={logoDashboard}
                    alt="logo dashboard"
                  />
                </Box>
              )}
            </Box>

            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: "#fafafa",
                  },
                  [`&.${menuClasses.disabled}`]: {
                    color: "green",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(23,105,170, 1)",
                    color: "#fafafa",
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    // color: "blue",
                    color: palette.primary.main,
                  },
                },
              }}
            >
              {userInfo && userInfo.role === 1 ? (
                <>
                  <MenuItem
                    component={<Link to="/admin/dashboard" />}
                    icon={<HomeOutlinedIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <Typography
                    variant="h6"
                    sx={{
                      m: "15px 0 5px 20px",
                      color: "white",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    MANAGE TEAM
                  </Typography>

                  <MenuItem
                    component={<Link to="/admin/users" />}
                    icon={<PeopleOutlinedIcon />}
                  >
                    {" "}
                    Users{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/createusers" />}
                    icon={<GroupAddIcon />}
                  >
                    {" "}
                    Create Users{" "}
                  </MenuItem>
                  <Typography
                    variant="h6"
                    sx={{
                      m: "15px 0 5px 20px",
                      color: "white",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    MANAGE HELPLINE
                  </Typography>
                  <MenuItem
                    component={<Link to="/admin/createhelplines" />}
                    icon={<ContactsOutlinedIcon />}
                  >
                    {" "}
                    Create Helplines{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/admin/helplines" />}
                    icon={<ContactsOutlinedIcon />}
                  >
                    {" "}
                    Edit Helplines{" "}
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    component={<Link to="/user/dashboard" />}
                    icon={<HomeOutlinedIcon />}
                  >
                    {" "}
                    Dashboard{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/createhelplineemployee" />}
                    icon={<ContactsOutlinedIcon />}
                  >
                    {" "}
                    Create Helplines{" "}
                  </MenuItem>
                  <MenuItem
                    component={<Link to="/user/edithelplineemployee" />}
                    icon={<ContactsOutlinedIcon />}
                  >
                    {" "}
                    Edit Helplines{" "}
                  </MenuItem>

                  <MenuItem
                    component={<Link to="/user/info" />}
                    icon={<Person3Icon />}
                  >
                    {" "}
                    Personal Info{" "}
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          <Box sx={{ pb: 2 }}>
            <Menu
              menuItemStyles={{
                button: {
                  [`&.${menuClasses.button}`]: {
                    color: "#fafafa",
                  },

                  "&:hover": {
                    backgroundColor: "rgba(23,105,170, 1)",
                    color: "#fafafa",
                  },
                },

                icon: {
                  [`&.${menuClasses.icon}`]: {
                    // color: "blue",
                    color: palette.primary.main,
                  },
                },
              }}
            >
              <MenuItem onClick={logOut} icon={<LoginIcon />}>
                {" "}
                Log out{" "}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Sidebar>
    </>
  );
};

export default SidebarAdm;
