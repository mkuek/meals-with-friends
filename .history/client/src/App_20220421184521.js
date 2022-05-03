import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SingleTrain from "./pages/SingleTrain/singleTrain";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trains">
            <Route path=":trainId" element={<SingleTrain />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
