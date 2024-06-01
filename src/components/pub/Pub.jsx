import React from 'react'
import "./pub.css"
import Carousel from "react-multi-carousel";
const Pub = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
             
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={4000}
            infinite={true}
            keyBoardControl={true}
            showDots={true}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className='d'
        >

            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/audi_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/bmw_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/citroen_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/fiat_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/ford_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/honda_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/hyundai_logo.png" />
                </div>
            </div>
            <div className='app__pub-images_car' >
                <div className="product-display-im">
                    <img alt='f' className="product-card-im is-img-loaded" src="/images/brand/kia_logo.png" />
                </div>
            </div>
        </Carousel>
            <div className="row" style={{marginTop : "2rem"}}>
                <div className="col-md-6">
                    <img src="/files/car_4_820x.png" alt="banner" />
                </div>
                <div className="col-md-6">
                    <img src="/files/Copie_de_Red_and_Black_Car_Rental_Promotion_Facebook_Cover_820x.png" alt="u" />
                </div>
            </div>
        </div>
    )
}

export default Pub
