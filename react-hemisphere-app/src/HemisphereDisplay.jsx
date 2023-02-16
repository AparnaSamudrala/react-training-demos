import React from 'react'; 
class HemisphereDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        imageHighlight:
        {
        width: '50%',
        height: '50%',
        objectFit: 'contain',
        border: '10px outset rgb(175 185 177)'
        }
                  
        }
    }
    componentWillUnmount() {
        alert("The component named HemisphereDisplay is about to be unmounted.");
      }
    
    render(){
    console.log(this.props.latitude);
    console.log(this.props.longitude);
    const hemi = this.props.longitude >0 ? 'You are in Northeren Hemisphere' : "You are in Southeren Hemisphere";
    const picture = this.props.latitude >0 ? 'https://upload.wikimedia.org/wikipedia/commons/8/89/NEED-North.jpg' : 'https://macaulay.cuny.edu/seminars/lessinger09/images/5/5a/South_India_Map.jpg';
    return(<div className='App'><p>{hemi}{': Longitude '}{this.props.longitude}</p><img style={this.state.imageHighlight} src={picture} alt="" /></div>)
    }
}
    export default HemisphereDisplay;
