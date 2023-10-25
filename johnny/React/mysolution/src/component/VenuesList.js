import { Component } from 'react';
import './VenuesList.css'
//let VenueCount=15;
class VenuesList extends Component
{
    venueCount=10;
    render(){
    return(
        <div className='VenuesList' >
            <center>
            <b>count of Venues</b>{this.venueCount}<br></br>
            <b>Venues for the Qualifiers</b><br></br>
            <ol>
              <li>Chepauk,Chennai</li>
              <li>Chinnaswamy,Bangalore</li>
              <li>DY Patil Stadium,Mumbai</li>
              <li>Narendra Modi,Ahmedabad</li>
            </ol>
            </center>
        </div>
       
    )
}
}
export default VenuesList;