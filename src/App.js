import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import IndexScreen from "./screens/IndexScreen";

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <IndexScreen />
        ) : (
          <Routes>
            <Route exact path="/home" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
