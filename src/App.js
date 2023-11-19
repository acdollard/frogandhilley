import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import  Home from './components/Home';
import  ReturnPolicy from './components/ReturnPolicy'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={<Home />}
          />
          <Route
            path="/returnPolicy"
            element={<ReturnPolicy />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
