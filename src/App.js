
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

import AuthProvider from './Context/AuthProvider';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
