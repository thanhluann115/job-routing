import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
// App.js
import "./App.css";
import {
  AuthProvider
} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
  <BrowserRouter>

    <Navbar />

    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
  path="/login"
  element={<Login />}

/>
<Route
  path="/job/:id"
  element={<JobDetail />}
/>
    </Routes>

  </BrowserRouter>
</AuthProvider>   
  );
}

export default App;