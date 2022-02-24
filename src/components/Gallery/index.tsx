import React, { useState } from 'react'
import './gallery.scss';

const images = [
    {
        src: "https://images.unsplash.com/photo-1645661319735-dadbd43c8811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        title: "Editorial",
        subtitle: "ALEKSEY KUPRIKOV",
        category: "test",
    },
    {
        src: "https://images.unsplash.com/photo-1645655812392-cf6dd5172bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        title: "Editorial",
        subtitle: "Susan Wilkinson",
        category: "test",
    },
    {
        src: "https://images.unsplash.com/photo-1645631661911-6245700578c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        title: "Editorial",
        subtitle: "Nikolay Petrov",
        category: "test",
    },
    {
        src: "https://images.unsplash.com/photo-1645661319735-dadbd43c8811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        title: "Editorial",
        subtitle: "ALEKSEY KUPRIKOV",
        category: "test",
    }
]

interface IGallery{
    src: string,
    title: string,
    subtitle: string,
    category: string,
    updateActiveImage: any,
    index: number
}

function GalleryItem({src, title, subtitle, category, updateActiveImage, index}: IGallery){
    return (
        <div className='rd-gallery--item-wrapper'>
            <div/>
            <div className='rd-gallery--item'>
                <div className="rd-gallery--item-info">
                    <h1 className='rd-gallery--item-info--title'>
                        {title}
                    </h1>
                    <h6 className='rd-gallery--item-info--subtitle'>
                        {subtitle}
                    </h6>
                    <p className='rd-gallery--item-info--category'>
                        {category}
                    </p>
                </div>
                <div className='rd-gallery--item-image' style={{backgroundImage: `url(${src})`}}></div>
            </div>
            <div/>
        </div>
    )
}

export const Gallery = () => {
    const [activeImage, setActiveImage] = useState(1);
    return (
        <section className='rd-section--wrapper rd-gallery--wrap'>
            <div className='rd-gallery'>
                <div className='rd-gallery--counter'>
                    <span>{activeImage}</span>
                    <span className='divider'></span>
                    <span>{images.length}</span>
                </div>
                {images.map((image, index) => {
                    return (
                        <GalleryItem
                            key={index}
                            index={index}
                            src={image.src}
                            subtitle={image.subtitle}
                            category={image.category}
                            title={image.title}
                            updateActiveImage={(index: number) => setActiveImage(index+1)}
                        />
                    )
                })}
            </div>
        </section>
    )
}
