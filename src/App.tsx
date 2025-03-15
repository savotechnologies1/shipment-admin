import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Toaster } from "sonner";
import AdminAnomalies from "./AdminDashboard/pages/AdminAnomalies";
import AdminCashOn from "./AdminDashboard/pages/AdminCashOn";
import AdminDailyOrder from "./AdminDashboard/pages/AdminDailyOrder";
import AdminOrder from "./AdminDashboard/pages/AdminOrder";
import AdminResetPasword from "./AdminDashboard/pages/AdminResetPasword";
import AdminTopUp from "./AdminDashboard/pages/AdminTopUp";
import AdminUserProfile from "./AdminDashboard/pages/AdminUserProfile";
import AffiliateAssisstance from "./AffiliateDashboard/pages/AffiliateAssisstance";
import AffiliateProfile from "./AffiliateDashboard/pages/AffiliateProfile";
import AffiliateRules from "./AffiliateDashboard/pages/AffiliateRules";
import Earnings from "./AffiliateDashboard/pages/Earnings";
import { AuthProvider } from "./auth/AuthProvider";
import Layout from "./components/Layout";
import AddressBook from "./pages/AddressBook";
import AdminSignIn from "./pages/AdminSignIn";
import Anomalies from "./pages/Anomalies";
import CashOnDelivery from "./pages/CashOnDelivery";
import CreateAccount from "./pages/CreateAccount";
import History from "./pages/History";
import UserResetPasword from "./pages/ResetPasswrd";
import { default as Shipment } from "./pages/Shipment";
import SignIn from "./pages/SignIn";
import TopUp from "./pages/TopUp";
import UserProfile from "./pages/UserProfile";
import UserUndelivered from "./pages/UserUndelivered";
import UserWrongWeight from "./pages/UserWrongWeight";
import { setup } from "./utils/axios";

const App = () => {
  setup();

  const queryClient = new QueryClient();
  const [role, setRole] = useState<string | null>(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/admin/sign-in" element={<AdminSignIn />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/resetpassword" element={<UserResetPasword />} />
              <Route
                path="/admin/resetpassword"
                element={<AdminResetPasword />}
              />

              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={
                    role === null || role === "undefined" ? (
                      <Navigate to="/sign-in" replace />
                    ) : role === "admin_v1" ? (
                      <Navigate to="/admin-dashboard" replace />
                    ) : role === "user_v1" ? (
                      <Navigate to="/shipment" replace />
                    ) : (
                      <Navigate to="/sign-in" replace />
                    )
                  }
                />

                {role && role == "user_v1" ? (
                  <>
                    <Route path="shipment" element={<Shipment />} />
                    <Route path="dashboard/history" element={<History />} />
                    <Route
                      path="dashboard/addressbook"
                      element={<AddressBook />}
                    />
                    <Route
                      path="dashboard/user-anomalies"
                      element={<Anomalies />}
                    />
                    <Route path="dashboard/user-topup" element={<TopUp />} />
                    <Route
                      path="dashboard/user-profile"
                      element={<UserProfile />}
                    />
                    <Route
                      path="dashboard/cash-on-delivery"
                      element={<CashOnDelivery />}
                    />
                    <Route
                      path="dashboard/user-wrong-weight"
                      element={<UserWrongWeight />}
                    />
                    <Route
                      path="dashboard/user-undelivered"
                      element={<UserUndelivered />}
                    />

                    <Route path="dashboard/earnings" element={<Earnings />} />
                    <Route
                      path="dashboard/assistance"
                      element={<AffiliateAssisstance />}
                    />
                    <Route
                      path="dashboard/affiliate-profile"
                      element={<AffiliateProfile />}
                    />
                    <Route
                      path="dashboard/rules"
                      element={<AffiliateRules />}
                    />
                  </>
                ) : null}
                {role == "admin_v1" ? (
                  <>
                    <Route
                      path="admin-dashboard"
                      element={<AdminDailyOrder />}
                    />
                    <Route path="admin-order" element={<AdminOrder />} />
                    <Route
                      path="admin-anomalies"
                      element={<AdminAnomalies />}
                    />
                    <Route path="admin-topup" element={<AdminTopUp />} />
                    <Route
                      path="admin-cashondelivery"
                      element={<AdminCashOn />}
                    />
                    <Route
                      path="admin-profile"
                      element={<AdminUserProfile />}
                    />
                  </>
                ) : null}
              </Route>

              <Route path="*" element={<Navigate to="/sign-in" />} />
            </Routes>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
