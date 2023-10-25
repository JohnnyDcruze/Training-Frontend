import { Component } from "react";

class TeamDetailsWithState extends Component{
    constructor(props)
    {
        super(props);
        this.state={teamName:"CSK",baseLocation:"chennai",teamCaptain:"YTB"};
    }
    render()
    {
        return(
            <center>
            <div >
            <form>
                <label>Team Name</label><input type="text" 
                defaultValue={this.state.teamName}></input><br></br>
                <label>Base Location</label><select size="1" name="baseLocation" 
                defaultValue={this.state.baseLocation}>
                    <option value="CSK">Chennai</option>
                    <option value="MI">Mumbai</option>
                    <option value="RCB">Bangalore</option>
                    <option value="GT">Gujarat</option>
                </select><br></br>
                <label>Team Captain</label><input type="text"  
                defaultValue={this.state.teamCaptain}></input>
            </form>
        </div>
        </center>
        )
    }
}
export default TeamDetailsWithState;