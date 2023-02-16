import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center pt-3">
        <div className="card bg-info mb-3" style={{}}>
        <div className="card-header"><i className='fa fa-user-circle' style={{fontSize: '3rem'}}></i></div>
        <div className="card-body">
          <h5 className="card-title">Profile card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    )
  }
}

export default Profile