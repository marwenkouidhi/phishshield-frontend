import LandingPage from "./pages/landingPage";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/noMatch";
import LoginPage from "./pages/loginPage";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import PrivateLayout from "./layouts/PrivateLayout";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Pricing from "./pages/pricing";
import Email from "./components/Email";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <div className="text-sm">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/account" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="inbox/:id" element={<Email />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
