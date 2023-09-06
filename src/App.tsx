import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Ksiegowi from "./pages/Ksiegowi";
import Layout from "./components/Layout/Layout";

export const App = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ksiegowi" />} />
        <Route path="/ksiegowi" element={<Ksiegowi />} />
        <Route path="*" element={<Navigate to="/ksiegowi" />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);
