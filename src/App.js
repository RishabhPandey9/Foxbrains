
import Login from "./Pages/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Users from "./Pages/Users/Users";
import UserDetails from "./Pages/Users/UserDetails";
import Signup from "./Pages/SignUp/Signup";




function App() {
  return (
    <Router>
    <Routes>
    <Route path='*' exact element={<PageNotFound/>} />
      
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/" element={<Signup/>} />
      <Route exact path="/users" element={<Users/>} />
      <Route exact path="/users/:userId" element={<UserDetails/>} />

    </Routes>
    </Router>
  );
}

export default App;
