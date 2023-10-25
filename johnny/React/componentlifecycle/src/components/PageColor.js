import {Component} from 'react';
class PageColor extends Component{

    constructor(props)
    {
        super(props);
        this.state={color:"blue"};
    }
    changeColor=(color)=>
    {
        this.setState({color});
    }
    render()
    {
        return(
        <div >
        <select defaultValue={this.state.color} onChange={(e)=>{this.changeColor(e.target.value)}}>
            <option value="red">Red</option>
            <option value="yellow">yellow</option>
            <option value="Blue">blue</option>
            <option value="green">green</option>
        </select>
        <div id="mnt"></div>
        </div>
        )
    }
     componentDidMount()
     {
        let dv=document.getElementById("mnt");
        dv.innerHTML+="<br><b><u>Component Mounted</u></b>";
        dv.style.color=this.state.color;
     }
     
     componentDidUpdate()
     {
        let dv=document.getElementById("mnt");
        dv.innerHTML+="<br><b><i>Component Updated</i></b>";
        dv.style.color=this.state.color;

     }

     componentWillUnmount()
     {
        const dv=document.getElementById("mnt");
        dv.innerHTML+="<br><b><i>Component unmounted</i></b>"
     }
}
export default PageColor;