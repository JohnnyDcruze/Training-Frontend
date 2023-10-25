import { Component } from "react";
import { Link } from "react-router-dom";

class BookingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengername: "",
      origin: "",
      destination: "",
      startDate: "",
      disable: true,
    };
  }
  componentDidMount() {
     const passengername = sessionStorage.getItem('getName');
     const origin = sessionStorage.getItem("origin");
     const destination = sessionStorage.getItem("destination");
     const startDate = sessionStorage.getItem("startDate");

    if (passengername) {
      this.setState({ passengername });
    }
    if (origin) {
      this.setState({ origin });
    }
    if (destination) {
      this.setState({ destination });
    }
    if (startDate) {
      this.setState({ startDate });
     
    }
  }
  componentWillUnmount() {
    
    sessionStorage.removeItem("origin");
    sessionStorage.removeItem("destination");
    sessionStorage.removeItem("startDate");
  }
  // const [passengername, setName] = useState("");
 
  // const [journeydate, setDate] = useState("");
  // const [originplace, setOriginplace] = useState("");
  // const [destinationplace, setDestinationplace] = useState("");

  validate = (event) => {
    event.preventDefault(); 
    let submitOK = true;

    if (this.state.passengername.length > 10) {
      alert("The name must be less than 10 characters");
      submitOK = false;
    }
    

    this.setState({ disable: !submitOK });
  };

  check = () => {
    
    if (this.state.origin === this.state.destination) {
      this.setState({ disable: true });
      alert("Destination and origin should not be the same");
    } else {
      this.setState({ disable: false });
    }
  };

  handleNameChange = (event) => {
    this.setState({ passengername: event.target.value });
  };

  // handleDateChange = (event) => {
  //   this.setState({ startDate: event.target.value });
  // };

  handleOriginChange = (event) => {
    this.setState({ origin: event.target.value }, () => {
      this.check(); // Call check() after updating origin
      sessionStorage.setItem("origin", this.state.origin);
    });
    
  };

  handleDestinationChange = (event) => {
    this.setState({ destination: event.target.value }, () => {
      this.check(); // Call check() after updating destination
      sessionStorage.setItem("destination", this.state.destination);
      
    });
    
  };

  handleDateChange=(event)=>{
    this.setState({ startDate: event.target.value },()=>{
      sessionStorage.setItem("startDate", this.state.startDate);
    }
    );
  };
  successful=()=>{
    alert('Your booking has been successfully created');
  };

  render() {
    const today = new Date().toISOString().split("T")[0];
    
    return (
      <div>
        <center>
          <form onSubmit={this.validate}>
          <b className="titleStyle">Booking Details</b><br></br>
            <label className="labelStyle">
              <b>Name : </b>{" "}
            </label >
            <input
              type="text"
              id="passengername"
              placeholder="Enter your name"
              className="inputStyle"
              value={this.state.passengername}
              onChange={this.handleNameChange}
            />
            <br></br>
            <label className="labelStyle">
              <b>Journey Date : </b>
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="inputStyle"
              value={this.state.startDate}
              onChange={this.handleDateChange}
              min={today}
              required
              
              
            />
            <br></br>
            <label className="labelStyle">
              <b>Origin : </b>
            </label>
            <select
              id="origin"
              className="inputStyle"
              
              value={this.state.origin}
              onChange={this.handleOriginChange}
            
            >
              <option value="">Select a Origin place</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trichy">Trichy</option>
              <option value="Rameshwaram">Rameshwaram</option>
            </select>
            <br></br>
            <label className="labelStyle">
              <b>Destination : </b>
            </label>
            <select
              id="destination"
              className="inputStyle"
              value={this.state.destination}
              onChange={this.handleDestinationChange}
            >
              <option value="">Select a Destination place</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Trichy">Trichy</option>
              <option value="Rameshwaram">Rameshwaram</option>
            </select>
            <br></br><br></br>
            <Link to="/BookingTable">
              <input
                type="submit"
                id="submit"
                value="Add"
                className="buttonStyle" 
                disabled={this.state.disable}
                onClick={this.successful}
              />
            </Link>

            <input type="reset" value="Reset" className="buttonStyle" />
          </form>
        </center>
      </div>
    );
  }
}

export default BookingDetails;
