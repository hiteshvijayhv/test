import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CoinsList from "./components/CoinsList";
import CoinStats from "./components/CoinStats";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" exact element={<CoinsList />} />
          <Route path="/:id" exact element={<CoinStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
