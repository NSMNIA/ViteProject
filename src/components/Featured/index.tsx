import React from 'react'
import './featured.scss';
import photos from '../../utils/photos';

export const Featured = () => {
    const [firstUrl, secondUrl] = photos;
    return (
        <section className="rd-featured--section" data-scroll-section>
            <div className='rd-featured--row-layout'>
                <h6>green</h6>
                <img src={firstUrl} data-scroll/>
            </div>
            <div className='rd-featured--column-layout'>
                <h6>lily</h6>
                <img src={secondUrl} data-scroll/>
            </div>
        </section>
    )
}
