import { useState } from "react";

function TeamDetailsWithUseState ()
{
    const[teamName,setTeamName]=useState("CSK");
    const[teamCaptain,setCaptainName]=useState("Dhoni");
    const[baseLocation,setBaseLocation]=useState("Chennai");
    function validate()
    {
        let vstatus=false;
        if(teamName=="")
        window.alert("Name cannot be blank");
        else
        vstatus=true;
        if(teamCaptain=="")
        window.alert("captain name cannot be blank");
        else
        vstatus=true;

        return vstatus;
    }
        return(
            <center>
            <div >
            <form action="javascript:alert('All Ok')" onsubmit={validate()}>
                <label>Team Name</label><input type="text"
                onChange={e=>{setTeamName(e.target.value)}} defaultValue={teamName}></input><br></br>
                <label>Base Location</label><select size="1" name="baseLocation" 
                onChange={e=>{setBaseLocation(e.target.value)}} defaultValue={baseLocation}>
                    <option value="Chennai">CSK</option>
                    <option value="Mumbai">MI</option>
                    <option value="Bangalore">RCB</option>
                    <option value="Gujarat">GT</option>
                </select><br></br>
                <label>Team Captain</label><input type="text" 
                onChange={e=>{setCaptainName(e.target.value)}} defaultValue={teamCaptain}></input><br></br>
                <input type="submit" value="Save" /><br></br>
                <b>Team Name :</b>{teamName}<br></br>
                <b>Team Captain :</b>{teamCaptain}<br></br>
                <b>Team baseLocation :</b>{baseLocation}
            </form>
        </div>
        </center>
        )
}

export default TeamDetailsWithUseState;