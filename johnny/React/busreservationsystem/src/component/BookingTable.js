import React from "react";
function BookingTable() {


  
  return (
    <div>
      <center>
        <h2>Booking Details</h2><br></br>
        <table className="table">
           
            <tr>
              <td className="a"><strong>Name:</strong></td>
              <td className="b">{sessionStorage.getItem('getName')}</td>
            </tr>
            <tr>
              <td className="a"><strong>Age:</strong></td>
              <td className="b">{sessionStorage.getItem('age')}</td>
            </tr> 
            <tr>
              <td className="a"><strong>Origin:</strong></td>
              <td className="b">{sessionStorage.getItem('origin')}</td>
            </tr>  
            <tr>
              <td className="a"><strong>Destination:</strong></td>
              <td className="b">{sessionStorage.getItem('destination')}</td>
            </tr>  
            <tr>
              <td className="a" ><strong>Journey Date:</strong></td>
              <td className="b">{sessionStorage.getItem('startDate')}</td>
              
            </tr>
          
        </table>
      </center>
    </div>
  );
}

export default BookingTable;
