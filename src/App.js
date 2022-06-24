import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import JobSecation from "./Component/JobSecation/JobSecation";
import AddJob from "./Component/AddJob/AddJob";
import AddServices from "./Component/Dashboard/AddServices/AddServices";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Component/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Component/AdminRoute/AdminRoute";
import Navber from "./Component/Home/Navber/Navber";
import ShowjobPost from "./Component/Dashboard/ShowjobPost/ShowjobPost";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navber></Navber>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/jobsection" element={<JobSecation></JobSecation>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/addjob/:serviceId" element={<PrivateRoute><AddJob></AddJob></PrivateRoute>} />
            {/* <Route path="/addservice" element={<AddServices></AddServices>} /> */}

            <Route path="/dashboard" element={<AdminRoute><Dashboard></Dashboard></AdminRoute>}>



              <Route
                path={`/dashboard/addservice`}
                element={<AddServices></AddServices>}
              ></Route>
              <Route
                path={`/dashboard/makeadmin`}
                element={<MakeAdmin></MakeAdmin>}
              ></Route>
              <Route
                path={`/dashboard/showjobpost`}
                element={<ShowjobPost></ShowjobPost>}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// https://wpdemo.redq.io/sites/scholar/company/index.html
