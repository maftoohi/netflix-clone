import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextPrivider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <>
            <AuthContextPrivider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route
                        path="account"
                        element={
                            <ProtectedRoute>
                                <Account />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </AuthContextPrivider>
        </>
    );
}

export default App;
