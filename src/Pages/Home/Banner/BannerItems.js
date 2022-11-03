import React from 'react';
import './BannerItems.css'

const BannerItems = ({slide}) => {

    
    const {image,id,prev,next}=slide;

    return (
       
            <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='banner-img'>
    <img src={image} alt='img' className="w-full rounded-xl"  />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
      <h1 className='text-6xl font-bold text-white'>Affordable <br/>
       Price For Car <br/>
        Servicing</h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
      <p className='text-white text-xl'>There Are Many Variations Of Passages Od Available,But The Majority Have Suffered Alteration In Some Form</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
    <button className="btn btn-warning mr-5">Discover More</button>
    <button className="btn btn-outline btn-warning">Latest Project</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5 btn-outline btn-warning">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle btn-warning">❯</a>
    </div>
  </div> 
        
    );
};

export default BannerItems;