// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import FileUpload from './components/FileUpload';
import Donut from './components/Donut';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<FileUpload formTitle="Upload Resume" title="Resume Insight" /> }>
            {/* formTitile="Upload Resume"  element={<PrivateRoute/>}*/}
          </Route>
      
        </Routes>


      </Router>
    </>
  );
}

export default App;
