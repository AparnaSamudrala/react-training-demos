import React, {Component} from 'react'
import Message from './Message'
 
export default class Notifications extends Component{
    render(){
            return(
                <>
                    <p className="my-3">You have <span className='badge badge-primary'>4</span> new messages</p>
                    <Message/>
                    </>
            )
    }
}