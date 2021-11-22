import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSuccess from './containers/LoginSuccess';
import { useAuthContext } from './context/UserContext';
import Login from './pages/Login';
import Posts from './pages/Posts';
function App() {
  const { isUserAuthenticated } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={isUserAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path='/' element={isUserAuthenticated ? <Posts /> : <Navigate to="/login" />} />
        <Route exact path='login/success' element={<LoginSuccess />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
