
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CourseDetails from "./pages/CourseDetails";

function App() {
return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="course-details" element={<CourseDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App; 
