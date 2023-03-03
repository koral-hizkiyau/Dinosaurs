import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import "../CSS/background.css";

const images = [
    {
      original: 'https://images2.alphacoders.com/546/546340.jpg',
      thumbnail: 'https://images2.alphacoders.com/546/546340.jpg',
    },
    {
      original: 'https://images.alphacoders.com/503/50361.jpg',
      thumbnail: 'https://images.alphacoders.com/503/50361.jpg',
    },
    {
      original: 'https://images6.alphacoders.com/739/739837.jpg',
      thumbnail: 'https://images6.alphacoders.com/739/739837.jpg',
    },
    {
      original: 'https://images4.alphacoders.com/202/202064.jpg',
      thumbnail: 'https://images4.alphacoders.com/202/202064.jpg',
    },
    {
      original: 'https://images2.alphacoders.com/635/635586.jpg',
      thumbnail: 'https://images2.alphacoders.com/635/635586.jpg',
    },
    {
      original: 'https://images4.alphacoders.com/788/788900.jpg',
      thumbnail: 'https://images4.alphacoders.com/788/788900.jpg',
    },
    {
      original: 'https://images3.alphacoders.com/958/958528.jpg',
      thumbnail: 'https://images3.alphacoders.com/958/958528.jpg',
    },
    {
        original: 'https://images2.alphacoders.com/105/1050599.jpg',
        thumbnail: 'https://images2.alphacoders.com/105/1050599.jpg',
    }

  ];
export default class BackgroundImages extends Component {

    
  render() {
    return (
        <div className="continer-fluid p-4">  

        <h1 className="titleApp" style={{paddingBottom:"2%"}}>Background Images Gallery</h1>
        <ImageGallery items={images} />;
        </div>    )
  }
}
