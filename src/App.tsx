import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import DashboardDetails from "./pages/Shipment";
import NewBooking from "./pages/NewBooking";
import History from "./pages/History";
import CreateAccount from "./pages/CreateAccount";
import OTP from "./pages/OTP";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPasswrd";
import Anomalies from "./pages/Anomalies";
import TopUp from "./pages/TopUp";
import UserProfile from "./pages/UserProfile";
import CashOnDelivery from "./pages/CashOnDelivery";
import UserWrongWeight from "./pages/UserWrongWeight";
import Earnings from "./AffiliateDashboard/pages/Earnings";
import AffiliateAssisstance from "./AffiliateDashboard/pages/AffiliateAssisstance";
import AffiliateProfile from "./AffiliateDashboard/pages/AffiliateProfile";
import AffiliateRules from "./AffiliateDashboard/pages/AffiliateRules";
import Shipment from "./pages/Shipment";
import AdminDailyOrder from "./AdminDashboard/pages/AdminDailyOrder";
import AdminOrder from "./AdminDashboard/pages/AdminOrder";
import AdminAnomalies from "./AdminDashboard/pages/AdminAnomalies";
import AdminTopUp from "./AdminDashboard/pages/AdminTopUp";
import AdminCashOn from "./AdminDashboard/pages/AdminCashOn";
import AdminUserProfile from "./AdminDashboard/pages/AdminUserProfile";
import UserUndelivered from "./pages/UserUndelivered";

const App = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Get role from localStorage
    setRole(localStorage.getItem("role"));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default Route (Redirect to Sign-In) */}
        {/* <Route path="/" element={<Navigate to="/sign-in" />} /> */}

        {/* Public Routes */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Protected Routes - Require Login */}
        {role && (
          <Route path="/" element={<Layout />}>
            {/* Admin, User, and Affiliate Dashboards */}
            <Route
              index
              element={
                role === "admin" ? <Navigate to="/admin-dashboard" /> :
                role === "affiliate" ? <Navigate to="/dashboard/earnings" /> :
                <DashboardDetails />
              }
            />
            <Route path="shipment" element={<Shipment />} />
            <Route path="dashboard/history" element={<History />} />
            <Route path="dashboard/new-booking" element={<NewBooking />} />
            <Route path="dashboard/user-anomalies" element={<Anomalies />} />
            <Route path="dashboard/user-topup" element={<TopUp />} />
            <Route path="dashboard/user-profile" element={<UserProfile />} />
            <Route path="dashboard/cash-on-delivery" element={<CashOnDelivery />} />
            <Route path="dashboard/user-wrong-weight" element={<UserWrongWeight />} />
            <Route path="dashboard/user-undelivered" element={<UserUndelivered />} />
            <Route path="dashboard/earnings" element={<Earnings />} />
            <Route path="dashboard/assistance" element={<AffiliateAssisstance />} />
            <Route path="dashboard/affiliate-profile" element={<AffiliateProfile />} />
            <Route path="dashboard/rules" element={<AffiliateRules />} />
            <Route path="admin-dashboard" element={<AdminDailyOrder />} />
            <Route path="admin-order" element={<AdminOrder />} />
            <Route path="admin-anomalies" element={<AdminAnomalies />} />
            <Route path="admin-topup" element={<AdminTopUp />} />
            <Route path="admin-cashondelivery" element={<AdminCashOn />} />
            <Route path="admin-profile" element={<AdminUserProfile />} />
          </Route>
        )}

        {/* Redirect to Sign-In if trying to access protected routes without login */}
        {!role && <Route path="*" element={<Navigate to="/sign-in" />} />}
      </Routes>
    </Router>
  );
};

export default App;
