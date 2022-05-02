import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SingleTrain from "./pages/SingleTrain/singleTrain";
import Dashboard from "./pages/dashboard/dashboard";
import Register from "./pages/register/register";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import CreateTrain from "./pages/createTrain/CreateTrain";
import VolunteerMeal from "./pages/VolunteerMeal/VolunteerMeal";
import EditMeal from "./pages/editMeal/EditMeal";
import TrainUpdates from "./pages/trainUpdates/TrainUpdates";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trains">
            <Route path=":trainId/updates/new" element={<TrainUpdates />} />
            <Route
              path=":trainId/volunteer/:mealId"
              element={<VolunteerMeal />}
            />
            <Route exact path=":trainId/edit" element={<EditMeal />} />
            <Route path=":trainId" element={<SingleTrain />}></Route>
            <Route path="create" element={<CreateTrain />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
