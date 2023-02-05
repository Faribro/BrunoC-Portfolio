import { Routes, Route, BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { Projects } from "./Pages/Projects/Project.jsx";
import { Error } from "./Pages/Error404/Error404.jsx";
import { Courses } from "./Pages/Courses/Courses.jsx";

export function Router() {
  return (
    <BrowserRouter>
       <Routes>        
        <Route path="*" element={<Error />} />
        <Route path="/" element={<App />} />  
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}