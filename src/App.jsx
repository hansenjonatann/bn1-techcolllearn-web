import { Routes, Route, BrowserRouter } from "react-router";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import HomePage from "./pages/home";
import EditProfilePage from "./pages/edit_profile";
import CourseTeamPage from "./pages/course-team";
import MyCoursePage from "./pages/mycourse";
import AboutPage from "./pages/about";
import ExploreCoursePage from "./pages/explorecourse";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/editprofile" element={<EditProfilePage/>}/>
        <Route path="/courseteam" element={<CourseTeamPage/>}/>
        <Route path="/course" element={<MyCoursePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/explore' element={<ExploreCoursePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
