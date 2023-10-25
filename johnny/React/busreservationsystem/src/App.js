
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import BookingDetails from './component/BookingDetails';
import CustomerDetails from './component/CustomerDetails';
import Catalog from './component/Catalog';
import Home from './component/Home';
import BookingTable from './component/BookingTable';



function App() {
  return (<div className='back'>
  
    <Router>
    
      
      <Routes>
      {/* <Route exact path="/" element={}></Route> */}
      <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/BookingDetails" element={<BookingDetails />}></Route>
        <Route exact path="/CustomerDetails" element={<CustomerDetails />}></Route>
        <Route exact path="/Catalog" element={<Catalog />}></Route>
        <Route exact path="/BookingTable" element={<BookingTable />}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;