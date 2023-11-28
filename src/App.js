import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import LogIn from "./pages/LogIn";
import UserDashboard from "./pages/user/UserDashboard";
import UserRoute from "./components/UserRoute";
import AdminRoute from "./components/AdminRoute";
import Layout from "./pages/global/Layout";

import UserInfoDashboard from "./pages/user/UserInfoDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DashUsers from "./pages/admin/DashUsers";
import DashHelplines from "./pages/admin/DashHelplines";
import CreateUser from "./pages/admin/CreateUsers";
import CreateHelpline from "./pages/admin/CreateHelpline";
import CreateHelplineUser from "./pages/user/CreateHelplineUser"; 
import DashHelplinesUser from "./pages/user/DashHelplineUser";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Search from "./pages/Search";
import TermsOfUse from "./pages/Termsofuse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiesPolicy";

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserCreateHelplineUserHOC = Layout(CreateHelplineUser);
const UserDashHelplinesUserHOC = Layout(DashHelplinesUser);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashHelplinesHOC = Layout(DashHelplines);
const CreateUserHoc = Layout(CreateUser);
const CreateHelplineHoc = Layout(CreateHelpline);


const App = () => {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/termsofuse" element={<TermsOfUse />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/cookiespolicy" element={<CookiePolicy />} />
              <Route path="/search/location/:location" element={<Home />} />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="/login" element={<LogIn />} />
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <AdminDashboardHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <DashUsersHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/createusers"
                element={
                  <AdminRoute>
                    <CreateUserHoc />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/helplines"
                element={
                  <AdminRoute>
                    <DashHelplinesHOC />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/createhelplines"
                element={
                  <AdminRoute>
                    <CreateHelplineHoc />
                  </AdminRoute>
                }
              />
              <Route
                path="/user/dashboard"
                element={
                  <UserRoute>
                    <UserDashboardHOC />
                  </UserRoute>
                }
              />
               <Route
                path="/user/createhelplineemployee"
                element={
                  <UserRoute>
                    <UserCreateHelplineUserHOC />
                  </UserRoute>
                }
              />
               <Route
                path="/user/edithelplineemployee"
                element={
                  <UserRoute>
                    <UserDashHelplinesUserHOC />
                  </UserRoute>
                }
              />
              <Route
             
                path="/user/info"
                element={
                  <UserRoute>
                    <UserInfoDashboardHOC />
                  </UserRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
