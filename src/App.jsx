import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import Investment from "./pages/Investment/Investment";
import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Partnership from "./pages/PPPartnership/Partnership";
import Team from "./pages/OurTeam/Team";
import Transactions from "./pages/Transactions/Transactions";
import Practice from "./pages/InternationalPractice/Practice";
import Assignments from "./pages/SpecialAssignments/Assignments";
import CorporatePractice from "./pages/CorporatePractice/CorporatePractice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/Investment" element={<Investment />} /> */}
      <Route path="/CorporatePractice" element={<CorporatePractice />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/PrivacyPolicy" element={<Privacy />} />
      <Route path="/Partnership" element={<Partnership />} />
      <Route path="/OurTeam" element={<Team />} />
      <Route path="/Transactions" element={<Transactions />} />
      <Route path="/InternationalPractice" element={<Practice />} />
      <Route path="/SpecialAssignments" element={<Assignments />} />
    </Routes>

  );
}

export default App;
