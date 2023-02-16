import React from 'react';
import './App.css';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';
/* Child -> parent communication demo. Though react is unidirectional(only parent -> child) */
/* child component is using this onSearchSubmit via props of child as onSearchSubmit = {this.onSearchSubmit}  */
class App extends React.Component {
  state = {image: [],resultText: '' };
  onSearchSubmit = async (entry) => {
     
     const response = await axios.get(`https://pixabay.com/api/?key=33307129-48610e9aab895d55ed6488ff5&q=${entry}&image_type=photo&pretty=true`);
     console.log(response);
      
     this.setState({image: response.data.hits});
     this.setState({resultText : `we have ${this.state.image.length} images of ${entry}`});
     }
  render(){
     return (
            <div className='ui container' style={{ marginTop: '30px' }}>
             <SearchInput onSearchSubmit={this.onSearchSubmit} />                
             {/* We have {this.state.image.length} images */} 
             {this.state.resultText}               
             <ImageList image={this.state.image} />
             </div>
            )
         }
  
}

export default App;
