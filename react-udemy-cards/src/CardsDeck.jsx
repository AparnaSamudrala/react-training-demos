import React from 'react'
const CardsDeck = (props) => {
   let highLight = {
    color: 'orange'
   }
  return (
           <div className="card">
            <img className="card-img-top" src={props.pic} alt="Card  cap"/>
            <div className="card-body">
                <p className="card-title"><strong>{props.title}</strong></p>
                <p className="card-text"><small className='text-muted'>{props.author}</small></p>
                <span className="text-success mr-1"><strong>3</strong></span>
                <span className="fa fa-star checked" style={highLight}></span>
                <span className="fa fa-star checked" style={highLight}></span>
                <span className="fa fa-star checked" style={highLight}></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="ml-1 text-secondary"><small>(2,345)</small></span>
                <p className="card-text text-primary">{props.price}</p>
                <span className="badge badge-warning">Bestseller</span>
            </div>
         </div>
  )
}

export default CardsDeck