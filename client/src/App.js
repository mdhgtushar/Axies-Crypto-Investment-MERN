import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";
import ApiAccess from "./components/ApiAccess";
import Withdrawals from "./pages/Withdrawals";
import Deposits from "./pages/Deposits";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Loading from "./pages/Loading";
import AddDeposit from "./pages/AddDeposit";
import "./index.css";
import AddWithdrawals from "./pages/AddWithdrawals";
import Referral from "./pages/Referral";
import Profile from "./pages/Profile";

function App() {
  const ifLogin = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={ifLogin ? <Loading /> : <Login />} />
        <Route path="/signup" element={ifLogin ? <Loading /> : <Signup />} />
        <Route
          path="/dashboard"
          element={ifLogin ? <Dashboard /> : <Loading />}
        />
        <Route
          path="/deposits"
          element={ifLogin ? <Deposits /> : <Loading />}
        />
        <Route
          path="/deposits/add"
          element={ifLogin ? <AddDeposit /> : <Loading />}
        />
        <Route
          path="/withdrawals"
          element={ifLogin ? <Withdrawals /> : <Loading />}
        />
        <Route
          path="/withdrawals/add"
          element={ifLogin ? <AddWithdrawals /> : <Loading />}
        />
        <Route
          path="/referral"
          element={ifLogin ? <Referral /> : <Loading />}
        />
        <Route path="/profile" element={ifLogin ? <Profile /> : <Loading />} />
      </Routes>
    </div>
  );
}

export default App;
