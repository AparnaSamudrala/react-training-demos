//Functional component
import React from 'react'; 
const HemisphereDisplay = (props) => {
    let imageHighlight = {
        width: '50%',
        height: '50%',
        objectFit: 'contain',
        border: '10px outset rgb(175 185 177)'
    }
    console.log(props.latitude);
    console.log(props.longitude);
    const hemi = props.longitude >0 ? 'You are in Northeren Hemisphere' : "You are in Southeren Hemisphere";
    const picture = props.latitude >0 ? 'https://upload.wikimedia.org/wikipedia/commons/8/89/NEED-North.jpg' : 'https://macaulay.cuny.edu/seminars/lessinger09/images/5/5a/South_India_Map.jpg';
    return(<div className='App'><p>{hemi}{': Longitude '}{props.longitude}</p><img style={imageHighlight} src={picture} alt="" /></div>)
    }
    export default HemisphereDisplay;
