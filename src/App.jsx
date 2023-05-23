import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import Investment from "./pages/Investment/Investment";
import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";
import Privacy from "./pages/PrivacyPolicy/Privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Investment" element={<Investment />} />
      <Route path="/Contacts" element={<Contacts />} />
      <Route path="/PrivacyPolicy" element={<Privacy />} />
    </Routes>

  );
}

export default App;
