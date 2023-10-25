import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import VenuesList from './component/VenuesList';
import TeamsList from './component/TeamsList';
import TeamDetails from './component/TeamDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>.....Welcome to React.....</h1>
       </header>
       <Link to="/VenuesList">List of Venues</Link><br></br>
       <Link to="/TeamsList">List of Teams</Link><br></br>
       <Link to="/TeamDetails">Team-Details</Link><br></br>
       <Link to="/BookingDetail">BookingDetail</Link>
    </div>
    <Routes>
      <Route exact path="/VenuesList" element={<VenuesList/>}></Route>
      <Route exact path="/TeamsList" element={<TeamsList/>}></Route>
      <Route exact path="/TeamDetails" element={<TeamDetails/>}></Route>
      <Route exact path="/BookingDetail" element={<BookingDetail/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
