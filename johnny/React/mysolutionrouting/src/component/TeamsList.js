import { Component } from 'react';
import './TeamsList.css'
class TeamsList extends Component {
    TeamsCount = 4;
    getTeamsCount() {
        return this.TeamsCount;
    }
    setTeamsCount(tcount) {
        this.TeamsCount = tcount;
    }
    componentDidMount() {
        console.log("TeamList Component Mounted....")
    }

    componentDidUpdate() {
        console.log("TeamList component has been updated....")
    }

    componentWillUnmount() {
        console.log("TeamList Component has been unmounted...")
    }

    render() {
        return (
            <div className='TeamsList'>
                <center >
                    <b>List of teams in IPL 2023</b><br></br>
                    <ol>
                        <li>CSK</li>
                        <li>RCB</li>
                        <li>MI</li>
                        <li>GT</li>
                    </ol>
                </center>
            </div>
        )
    }
}
export default TeamsList;