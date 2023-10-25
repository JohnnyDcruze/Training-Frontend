import { Component } from "react";

class TeamDetails extends Component{
    teamName="CSK";
    baseLocation="chennai";
    teamCaptain="YTB";
    
    getteamName() {
        return this.teamName;
    }
    setteamName(tname) {
        this.teamName = tname;
    }

    componentDidMount(){
        console.log("TeamDetails Component Mounted....")
    }

    componentDidUpdate(){
        console.log("TeamDetails component has been updated....")
    }

    componentWillUnmount(){
        console.log("TeamDetails Component has been unmounted...")
    }

    render()
    {
        return(
            <center>
            <div >
            <form>
                <label>Team Name</label><input type="text" defaultValue={this.teamName}></input><br></br>
                <label>Base Location</label><select size="1" name="baseLocation" defaultValue={this.baseLocation}>
                    <option value="CSK">Chennai</option>
                    <option value="MI">Mumbai</option>
                    <option value="RCB">Bangalore</option>
                    <option value="GT">Gujarat</option>
                </select><br></br>
                <label>Team Captain</label><input type="text"  defaultValue={this.teamCaptain}></input>
            </form>
        </div>
        </center>
        )
    }
}
export default TeamDetails;