import React from 'react';
const ImageList = (props) => {
    const imageGallery = props.image.map((image) => {
        return <div key={image.id}><img style={{width: '100%'}}  src={image.webformatURL} alt="image" /></div>
    })
    return (<div>{imageGallery}</div>)
}
export default ImageList;

