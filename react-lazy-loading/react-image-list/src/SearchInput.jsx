import React from 'react';

class SearchInput extends React.Component{
    
    // if onformsubmit method is not an arrow function we need to bind it in a constructor otherwise state is undefined
    /* constructor(){
        super();
        state ={entry: ""}
        this.onFormSubmit = this.onFormSubmit.bind(this);
    } */
    state = {entry: 'dog'}
    
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.entry);
        this.props.onSearchSubmit(this.state.entry);//child is using parents function
    }
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input type="text" 
                            placeholder='search....'
                            onChange={(e) => this.setState({entry: e.target.value})}
                            value={this.state.entry}
                            />
                            <i className='search icon'/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;