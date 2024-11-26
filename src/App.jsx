import { Routes, Route, BrowserRouter } from "react-router";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import HomePage from "./pages/home";
import EditProfilePage from "./pages/edit_profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/editprofile" element={<EditProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
