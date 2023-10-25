import { Component } from "react";

class TeamDetails extends Component{
    teamName="CSK";
    baseLocation="chennai";
    teamCaptain="YTB";
    render()
    {
        return(
            <center>
            <div >
            <form>
                <label>Team Name</label><input type="text" value={this.teamName}></input><br></br>
                <label>Base Location</label><select size="1" name="baseLocation" value={this.baseLocation}>
                    <option value="CSK">Chennai</option>
                    <option value="MI">Mumbai</option>
                    <option value="RCB">Bangalore</option>
                    <option value="GT">Gujarat</option>
                </select><br></br>
                <label>Team Captain</label><input type="text"  value={this.teamCaptain}></input>
            </form>
        </div>
        </center>
        )
    }
}
export default TeamDetails;